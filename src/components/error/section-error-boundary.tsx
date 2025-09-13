'use client';

import { Component, ErrorInfo, ReactNode } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
  sectionName: string;
}

interface State {
  hasError: boolean;
  error?: Error;
}

/**
 * Smaller error boundary for individual sections
 * Shows a more compact error message that doesn't break the entire page
 */
export class SectionErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(`Error in ${this.props.sectionName} section:`, error, errorInfo);
    
    // Log to analytics
    if (typeof window !== 'undefined') {
      (window as any).gtag?.('event', 'exception', {
        description: `Section error: ${this.props.sectionName} - ${error.toString()}`,
        fatal: false,
      });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="py-10 sm:py-16">
          <div className="border border-red-500/20 rounded-2xl p-6 bg-red-500/5">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
              <h3 className="font-medium">Failed to load {this.props.sectionName}</h3>
            </div>
            
            <p className="text-sm text-white/60 mb-4">
              There was an error loading this section. This won't affect other parts of the site.
            </p>
            
            <button
              onClick={() => this.setState({ hasError: false, error: undefined })}
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-3 py-1.5 text-sm hover:border-white/40 transition-colors"
            >
              <RefreshCw className="w-3 h-3" />
              Retry
            </button>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}
