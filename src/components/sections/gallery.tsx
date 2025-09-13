// 'use client';

// import { useCallback, useEffect, useState } from 'react';
// import Image from 'next/image';
// import { X, ChevronLeft, ChevronRight } from 'lucide-react';
// import NeonBorder from '@/components/visual/neon-border';
// import { GALLERY } from '@/lib/content';

// export default function Gallery() {
//   const [open, setOpen] = useState<number | null>(null);

//   const closeModal = useCallback(() => setOpen(null), []);
//   const prevImage = useCallback(() => {
//     setOpen((i) => i === null ? null : (i + GALLERY.length - 1) % GALLERY.length);
//   }, []);
//   const nextImage = useCallback(() => {
//     setOpen((i) => i === null ? null : (i + 1) % GALLERY.length);
//   }, []);

//   // Keyboard navigation
//   useEffect(() => {
//     if (open === null) return;
    
//     const handleKeyDown = (e: KeyboardEvent) => {
//       switch (e.key) {
//         case 'Escape':
//           closeModal();
//           break;
//         case 'ArrowLeft':
//           prevImage();
//           break;
//         case 'ArrowRight':
//           nextImage();
//           break;
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);
    
//     // Prevent body scroll
//     const originalOverflow = document.body.style.overflow;
//     document.body.style.overflow = 'hidden';
    
//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//       document.body.style.overflow = originalOverflow;
//     };
//   }, [open, closeModal, prevImage, nextImage]);

//   const openLightbox = useCallback((index: number) => {
//     setOpen(index);
//   }, []);

//   return (
//     <section id="gallery" className="py-10 sm:py-16">
//       <h2 className="text-xl font-semibold mb-6 tracking-widest">MISCELANEA GALLERY</h2>

//       {/* Thumbnail Grid */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
//         {GALLERY.map((item, index) => (
//           <div
//             key={item.image}
//             className="group relative overflow-hidden rounded-xl border border-white/10 cursor-pointer"
//             onClick={() => openLightbox(index)}
//             role="button"
//             tabIndex={0}
//             onKeyDown={(e) => {
//               if (e.key === 'Enter' || e.key === ' ') {
//                 e.preventDefault();
//                 openLightbox(index);
//               }
//             }}
//             aria-label={`Open image ${item.alt}`}
//           >
//             <div className="relative w-full aspect-square bg-black overflow-hidden">
//               <Image
//                 src={item.image}
//                 alt={item.alt}
//                 fill
//                 loading="lazy"
//                 sizes="(min-width:1024px) 25vw, 50vw"
//                 className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
//               />
//             </div>
//             <NeonBorder subtle />
//           </div>
//         ))}
//       </div>

//       {/* Lightbox Modal */}
//       {open !== null && (
//         <div
//           className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm p-4 md:p-8 grid place-items-center"
//           onClick={closeModal}
//           role="dialog"
//           aria-modal="true"
//           aria-label="Image gallery lightbox"
//         >
//           <div
//             className="relative w-full max-w-6xl aspect-[3/2] md:aspect-[16/9] bg-black rounded-2xl border border-white/10 overflow-hidden"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <Image
//               src={GALLERY[open].image}
//               alt={GALLERY[open].alt}
//               fill
//               sizes="100vw"
//               className="object-contain"
//               priority
//             />

//             {/* Close Button */}
//             <button
//               onClick={closeModal}
//               aria-label="Close lightbox"
//               className="absolute right-3 top-3 rounded-full border border-white/20 bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
//             >
//               <X className="w-5 h-5" />
//             </button>

//             {/* Navigation Buttons */}
//             {GALLERY.length > 1 && (
//               <>
//                 <button
//                   onClick={prevImage}
//                   aria-label="Previous image"
//                   className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-2 hover:bg-white/20 transition-colors"
//                 >
//                   <ChevronLeft className="w-6 h-6" />
//                 </button>
//                 <button
//                   onClick={nextImage}
//                   aria-label="Next image"
//                   className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-2 hover:bg-white/20 transition-colors"
//                 >
//                   <ChevronRight className="w-6 h-6" />
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }