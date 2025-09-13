'use client';

import { useEffect } from 'react';
import { setupGlobalErrorHandlers } from '@/lib/error-utils';

export default function GlobalErrorHandler() {
  useEffect(() => {
    setupGlobalErrorHandlers();
  }, []);

  return null; // This component doesn't render anything
}