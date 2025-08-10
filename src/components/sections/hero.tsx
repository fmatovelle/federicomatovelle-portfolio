'use client';
import { motion } from 'framer-motion';
import { SITE } from '@/lib/content';

export default function Hero() {
  return (
    <section id="top" className="py-16 sm:py-24">
      <div className="flex flex-col gap-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-7xl font-black tracking-tight leading-none"
        >
          {SITE.name}
        </motion.h1>
        <p className="text-sm text-white/70">{SITE.tagline}</p>
        <div className="flex flex-wrap gap-3 text-xs text-white/70">
          {SITE.roles.map((r) => (
            <span key={r} className="px-3 py-1 rounded-full border border-white/15 hover:border-white/30">
              {r}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
