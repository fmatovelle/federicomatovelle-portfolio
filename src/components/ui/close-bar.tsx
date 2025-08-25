'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';

export default function CloseBar() {
  const router = useRouter();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (window.history.length <= 2) router.push('/#projects');
        else router.back();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [router]);

  const goBack = () => {
    if (window.history.length <= 2) router.push('/#projects');
    else router.back();
  };

  return (
    <div className="sticky top-16 z-40 mb-4 flex justify-end">
      <button
        onClick={goBack}
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-xs hover:border-white/30"
        aria-label="Cerrar y volver"
      >
        <X className="h-4 w-4" /> Close
      </button>
    </div>
  );
}
