import { ProjectCardSkeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="py-16">
      {/* Hero Skeleton */}
      <section className="py-16 sm:py-24">
        <div className="flex flex-col gap-6">
          <div className="h-16 sm:h-24 bg-white/10 rounded animate-pulse w-full max-w-2xl" />
          <div className="h-4 bg-white/10 rounded animate-pulse w-64" />
          <div className="flex flex-wrap gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-8 w-20 bg-white/10 rounded-full animate-pulse" />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Skeleton */}
      <section className="py-10 sm:py-16">
        <div className="h-6 w-32 bg-white/10 rounded mb-6 animate-pulse" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <ProjectCardSkeleton key={i} />
          ))}
        </div>
      </section>
    </div>
  );
}