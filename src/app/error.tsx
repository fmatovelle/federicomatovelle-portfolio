'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Global app error:', error);
    
    // Log to monitoring service
    if (typeof window !== 'undefined') {
      (window as any).gtag?.('event', 'exception', {
        description: error.toString(),
        fatal: true,
      });
    }
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
          <AlertTriangle className="w-8 h-8 text-red-400" />
        </div>
        
        <h1 className="text-xl font-semibold mb-2">Something went wrong</h1>
        <p className="text-white/60 mb-6">
          We encountered an unexpected error. Don't worry, it's not your fault.
        </p>
        
        <div className="flex gap-3 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-4 py-2 text-sm hover:border-white/40 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
          
          <button
            onClick={() => window.location.href = '/'}
            className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-4 py-2 text-sm hover:border-white/40 transition-colors"
          >
            <Home className="w-4 h-4" />
            Go Home
          </button>
        </div>

        {process.env.NODE_ENV === 'development' && (
          <details className="mt-6 text-left">
            <summary className="cursor-pointer text-sm text-white/60 hover:text-white/80">
              Error Details (Development)
            </summary>
            <pre className="mt-2 p-4 bg-black/50 rounded-lg text-xs overflow-auto border border-white/10">
              <code className="text-red-400">{error.toString()}</code>
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}
