'use client';

import { useEffect, useState } from 'react';

/**
 * Hook to check if component has been mounted on the client side.
 * Useful for preventing hydration mismatches and showing loading states.
 */
export function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}