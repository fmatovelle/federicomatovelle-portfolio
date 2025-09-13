// src/components/ui/skeleton.tsx
import { cn } from '@/utils/cn';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-white/10', className)}
      {...props}
    />
  );
}

// Project Card Skeleton
export function ProjectCardSkeleton() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black">
      {/* Cover Image Skeleton */}
      <Skeleton className="w-full aspect-[16/10]" />
      
      {/* Content Skeleton */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex-1">
          {/* Title */}
          <Skeleton className="h-5 w-3/4 mb-3" />
          
          {/* Tags */}
          <div className="flex gap-2">
            <Skeleton className="h-6 w-16 rounded-full" />
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="h-6 w-14 rounded-full" />
          </div>
        </div>
        
        {/* Year */}
        <Skeleton className="h-4 w-12" />
      </div>
    </div>
  );
}

// Gallery Image Skeleton
export function GalleryImageSkeleton() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10">
      <Skeleton className="w-full aspect-square" />
    </div>
  );
}

// Hero Section Skeleton
export function HeroSkeleton() {
  return (
    <section className="py-16 sm:py-24">
      <div className="flex flex-col gap-6">
        {/* Name */}
        <Skeleton className="h-16 sm:h-24 w-full max-w-2xl" />
        
        {/* Tagline */}
        <Skeleton className="h-4 w-64" />
        
        {/* Roles */}
        <div className="flex flex-wrap gap-3">
          <Skeleton className="h-8 w-20 rounded-full" />
          <Skeleton className="h-8 w-24 rounded-full" />
          <Skeleton className="h-8 w-28 rounded-full" />
          <Skeleton className="h-8 w-16 rounded-full" />
        </div>
      </div>
    </section>
  );
}

// Bio Section Skeleton
export function BioSkeleton() {
  return (
    <section className="py-10 sm:py-16">
      <Skeleton className="h-6 w-16 mb-6" />
      
      <div className="grid md:grid-cols-3 gap-6 items-start">
        {/* Avatar */}
        <div className="md:order-1 order-2">
          <Skeleton className="w-40 h-40 rounded-full mx-auto md:mx-0" />
        </div>

        {/* Text Content */}
        <div className="md:col-span-2 order-1 md:order-2 space-y-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/5" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-32 mt-6" />
        </div>

        {/* Info Rows */}
        <div className="space-y-3 order-3">
          <div className="flex justify-between items-center border-b border-white/10 pb-2">
            <Skeleton className="h-3 w-12" />
            <Skeleton className="h-3 w-20" />
          </div>
          <div className="flex justify-between items-center border-b border-white/10 pb-2">
            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-3 w-16" />
          </div>
          <div className="flex justify-between items-center border-b border-white/10 pb-2">
            <Skeleton className="h-3 w-10" />
            <Skeleton className="h-3 w-32" />
          </div>
        </div>
      </div>
    </section>
  );
}