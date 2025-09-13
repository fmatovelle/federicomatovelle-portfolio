export class AppError extends Error {
  public readonly code: string;
  public readonly severity: 'low' | 'medium' | 'high' | 'critical';
  public readonly context?: Record<string, any>;

  constructor(
    message: string, 
    code: string = 'UNKNOWN_ERROR', 
    severity: 'low' | 'medium' | 'high' | 'critical' = 'medium',
    context?: Record<string, any>
  ) {
    super(message);
    this.name = 'AppError';
    this.code = code;
    this.severity = severity;
    this.context = context;
  }
}

// Predefined error types
export const ErrorTypes = {
  NETWORK: (message: string, context?: any) => 
    new AppError(message, 'NETWORK_ERROR', 'medium', context),
  
  VALIDATION: (message: string, context?: any) => 
    new AppError(message, 'VALIDATION_ERROR', 'low', context),
  
  API: (message: string, context?: any) => 
    new AppError(message, 'API_ERROR', 'high', context),
  
  CRITICAL: (message: string, context?: any) => 
    new AppError(message, 'CRITICAL_ERROR', 'critical', context),
} as const;

// Retry utility for failed operations
export async function withRetry<T>(
  operation: () => Promise<T>,
  maxAttempts: number = 3,
  delay: number = 1000,
  backoff: boolean = true
): Promise<T> {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await operation();
    } catch (error) {
      if (attempt === maxAttempts) {
        throw error;
      }
      
      const waitTime = backoff ? delay * Math.pow(2, attempt - 1) : delay;
      await new Promise(resolve => setTimeout(resolve, waitTime));
    }
  }
  throw new Error('Retry attempts exhausted');
}

// Global error handlers setup
export function setupGlobalErrorHandlers() {
  if (typeof window === 'undefined') return;

  // Catch unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
    
    // Prevent the default browser error handling
    event.preventDefault();
    
    // Report the error
    if (typeof window !== 'undefined') {
      (window as any).gtag?.('event', 'exception', {
        description: `Unhandled Promise: ${event.reason}`,
        fatal: false,
      });
    }
  });

  // Catch global JavaScript errors
  window.addEventListener('error', (event) => {
    console.error('Global JavaScript error:', event.error);
    
    if (typeof window !== 'undefined') {
      (window as any).gtag?.('event', 'exception', {
        description: `Global Error: ${event.error?.message || event.message}`,
        fatal: true,
      });
    }
  });

  // Catch resource loading errors
  window.addEventListener('error', (event) => {
    if (event.target !== window) {
      console.error('Resource loading error:', event.target);
      
      if (typeof window !== 'undefined') {
        (window as any).gtag?.('event', 'exception', {
          description: `Resource Error: ${(event.target as any)?.src || 'unknown'}`,
          fatal: false,
        });
      }
    }
  }, true); // Capture phase to catch resource errors
}