// src/components/sections/hero.tsx
'use client';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Download } from 'lucide-react';
import { SITE } from '@/lib/content';
import { GithubIcon, LinkedinIcon } from '@/components/ui/social-icons';

export default function Hero() {
  return (
    <section id="top" className="relative py-20 sm:py-32">
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
          <div className="inline-flex overflow-hidden rounded-full bg-white font-medium text-black">
            <a
              href="/cv/Federico-Matovelle-CV.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 transition hover:bg-black/10"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
            <a
              href="/cv/Federico-Matovelle-CV-ES.pdf"
              download
              title="Descargar CV en español"
              aria-label="Descargar CV en español"
              className="inline-flex items-center border-l border-black/15 px-3.5 py-2.5 text-xs font-semibold tracking-wider text-black/60 transition hover:bg-black/10 hover:text-black"
            >
              ES
            </a>
          </div>
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
