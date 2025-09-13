'use client';

import { useCallback } from 'react';

export interface ErrorContext {
  section?: string;
  action?: string;
  userId?: string;
  timestamp?: number;
  severity?: 'low' | 'medium' | 'high' | 'critical';
  metadata?: Record<string, any>;
}

interface ErrorInfo {
  message: string;
  stack?: string;
  timestamp: number;
  url: string;
  userAgent: string;
  viewport: string;
  fatal: boolean;
}

export function useErrorHandler() {
  const handleError = useCallback((error: Error, context?: ErrorContext) => {
    const errorInfo: ErrorInfo & ErrorContext = {
      message: error.message,
      stack: error.stack,
      timestamp: Date.now(),
      url: typeof window !== 'undefined' ? window.location.href : 'unknown',
      userAgent: typeof window !== 'undefined' ? navigator.userAgent : 'unknown',
      viewport: typeof window !== 'undefined' 
        ? `${window.innerWidth}x${window.innerHeight}` 
        : 'unknown',
      fatal: context?.severity === 'critical',
      ...context,
    };

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('🐛 Error Handler:', error);
      console.error('📋 Context:', context);
      console.error('📊 Full Info:', errorInfo);
    }

    // Send to monitoring service in production
    if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
      // Send to custom endpoint (non-blocking)
      fetch('/api/errors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(errorInfo),
      }).catch(() => {
        // Fail silently if error reporting fails
        console.warn('Failed to report error to server');
      });
    }

    // Track in analytics (non-blocking)
    if (typeof window !== 'undefined') {
      try {
        // Google Analytics 4
        (window as any).gtag?.('event', 'exception', {
          description: error.toString(),
          fatal: errorInfo.fatal,
          custom_parameters: {
            section: context?.section,
            action: context?.action,
            severity: context?.severity || 'medium',
          }
        });

        // Custom analytics event
        (window as any).gtag?.('event', 'error_reported', {
          event_category: 'Error Handling',
          event_label: context?.section || 'unknown',
          value: context?.severity === 'critical' ? 4 : 
                 context?.severity === 'high' ? 3 :
                 context?.severity === 'medium' ? 2 : 1,
        });
      } catch (analyticsError) {
        console.warn('Failed to log error to analytics:', analyticsError);
      }
    }
  }, []);

  const handlePromiseRejection = useCallback((reason: any, context?: ErrorContext) => {
    const error = reason instanceof Error ? reason : new Error(String(reason));
    handleError(error, { 
      ...context, 
      action: 'promise_rejection',
      severity: 'high' 
    });
  }, [handleError]);

  const handleNetworkError = useCallback((error: Error, context?: ErrorContext) => {
    handleError(error, { 
      ...context, 
      action: 'network_error',
      severity: 'medium' 
    });
  }, [handleError]);

  return { 
    handleError, 
    handlePromiseRejection, 
    handleNetworkError 
  };
}