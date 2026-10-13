// src/components/sections/hero.tsx
'use client';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { SITE } from '@/lib/content';
import { GithubIcon, LinkedinIcon } from '@/components/ui/social-icons';

export default function Hero() {
  return (
    <section id="top" className="relative isolate py-20 sm:py-32">
      {/* Background: soft glow + fading grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to bottom, #000 70%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, #000 70%, transparent)',
        }}
      >
        <div className="absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.35),transparent_65%)] blur-2xl" />
        <div className="absolute -bottom-48 right-[30%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(0,190,255,0.18),transparent_65%)] blur-2xl" />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse 70% 80% at 70% 40%, #000 20%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 80% at 70% 40%, #000 20%, transparent 75%)',
          }}
        />
      </div>

      <div className="flex flex-col gap-6">
        <p className="font-mono text-xs text-violet-300/90">
          <span className="text-white/40">//</span> hello, world
        </p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-7xl font-black tracking-tight leading-none"
        >
          {SITE.name}
        </motion.h1>

        <p className="text-base sm:text-lg text-white/80">{SITE.tagline}</p>
        <p className="max-w-xl text-sm leading-6 text-white/60">{SITE.summary}</p>

        <div className="flex flex-wrap gap-3 text-xs text-white/70">
          {SITE.roles.map((r) => (
            <span key={r} className="px-3 py-1 rounded-full border border-white/15 hover:border-white/30">
              {r}
            </span>
          ))}
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-3 text-sm">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-medium text-black transition hover:bg-white/85"
          >
            View projects
            <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-white/90 transition hover:border-white/40"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
            <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-white/90 transition hover:border-white/40"
          >
            <LinkedinIcon className="h-4 w-4" />
            LinkedIn
            <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
          </a>
        </div>
      </div>
    </section>
  );
}
