'use client';

import { useState, FormEvent } from 'react';
import { Mail, ArrowUpRight, Instagram, Loader2, Check } from 'lucide-react';
import { SITE } from '@/lib/content';

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || '';

export default function Contact() {
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('sending');
    setErrorMsg(null);

    try {
      const form = e.currentTarget;
      const payload = new FormData(form);

      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: payload,
      });

      if (res.ok) {
        setState('sent');
        form.reset();
      } else {
        const j = await res.json().catch(() => null);
        setErrorMsg(j?.error ?? 'No se pudo enviar el mensaje.');
        setState('error');
      }
    } catch (err) {
      setErrorMsg('Error de red. Intenta de nuevo.');
      setState('error');
    }
  }

  return (
    <section id="contact" className="py-10 sm:py-16">
      <h2 className="text-xl font-semibold mb-6 tracking-widest">CONTACT</h2>

      {FORMSPREE_ID === '' && (
        <p className="mb-4 text-xs text-yellow-400/90">
          ⚠️ Falta configurar <code>NEXT_PUBLIC_FORMSPREE_ID</code> en <code>.env.local</code>.
        </p>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {/* FORMULARIO */}
        <form
          onSubmit={onSubmit}
          className="group border border-white/10 rounded-2xl p-5 flex flex-col gap-4"
        >
          <div className="grid gap-2">
            <label className="text-xs text-white/60" htmlFor="name">Nombre</label>
            <input
              id="name"
              name="name"
              required
              placeholder="Tu nombre"
              className="rounded-xl border border-white/15 bg-transparent px-3 py-2 text-sm outline-none placeholder-white/40 focus:border-white/30"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-xs text-white/60" htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="tucorreo@ejemplo.com"
              className="rounded-xl border border-white/15 bg-transparent px-3 py-2 text-sm outline-none placeholder-white/40 focus:border-white/30"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-xs text-white/60" htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Cuéntame sobre tu proyecto…"
              className="rounded-xl border border-white/15 bg-transparent px-3 py-2 text-sm outline-none placeholder-white/40 focus:border-white/30 min-h-[120px]"
            />
          </div>

          {/* Honeypot anti-spam */}
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

          {/* Metadata opcional */}
          <input type="hidden" name="_subject" value="Nuevo mensaje desde el portfolio" />

          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={state === 'sending' || FORMSPREE_ID === ''}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-4 py-2 text-sm hover:border-white/40 disabled:opacity-50"
            >
              {state === 'sending' ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Enviando…
                </>
              ) : (
                'Enviar'
              )}
            </button>

            {state === 'sent' && (
              <span className="inline-flex items-center gap-2 text-emerald-400 text-sm">
                <Check className="h-4 w-4" /> ¡Mensaje enviado!
              </span>
            )}
            {state === 'error' && (
              <span className="text-sm text-red-400">{errorMsg}</span>
            )}
          </div>
        </form>

        {/* ATAJOS RÁPIDOS */}
        <div className="grid gap-6">
          <a
            href={`mailto:${SITE.email}`}
            className="group border border-white/10 rounded-2xl p-5 flex items-center justify-between hover:border-white/30"
          >
            <div>
              <p className="text-sm font-medium">Email</p>
              <p className="text-xs text-white/60">{SITE.email}</p>
            </div>
            <Mail className="w-5 h-5 opacity-70 group-hover:opacity-100" />
          </a>

          <a
            href={SITE.instagram}
            target="_blank"
            rel="noreferrer"
            className="group border border-white/10 rounded-2xl p-5 flex items-center justify-between hover:border-white/30"
          >
            <div className="flex items-center gap-2">
              <Instagram className="w-4 h-4" />
              <p className="text-sm font-medium">Instagram</p>
            </div>
            <ArrowUpRight className="w-5 h-5 opacity-70 group-hover:opacity-100" />
          </a>
        </div>
      </div>
    </section>
  );
}
