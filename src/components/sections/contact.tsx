// src/components/sections/contact.tsx
'use client';

import { useState, FormEvent } from 'react';
import {
  Mail,
  ArrowUpRight,
  Instagram,
  Loader2,
  Check,
  MessageCircle,
} from 'lucide-react';
import { SITE } from '@/lib/content';

// Definir tipo de estado más explícito
type FormState = 'idle' | 'sending' | 'sent' | 'error';

export default function Contact() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Construye link de WhatsApp si está configurado en el JSON
  const whatsappHref = SITE?.whatsapp
    ? `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
        'Hola Federico, vi tu portafolio y me interesa hablar sobre un proyecto.'
      )}`
    : null;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('sending');
    setErrorMessage('');

    // Simular envío por ahora - reemplaza con tu lógica real
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simular delay
      setFormState('sent');
      e.currentTarget.reset();
    } catch (error) {
      setFormState('error');
      setErrorMessage('Error al enviar el mensaje');
    }
  };

  const isLoading = formState === 'sending';
  const isSuccess = formState === 'sent';
  const isError = formState === 'error';

  return (
    <section id="contact" className="py-10 sm:py-16">
      <h2 className="text-xl font-semibold mb-6 tracking-widest">CONTACT</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* FORMULARIO */}
        <form
          onSubmit={handleSubmit}
          className="group border border-white/10 rounded-2xl p-5 flex flex-col gap-4"
        >
          <div className="grid gap-2">
            <label className="text-xs text-white/60" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              placeholder="Your Name"
              autoComplete="name"
              disabled={isLoading}
              className="rounded-xl border border-white/15 bg-transparent px-3 py-2 text-sm outline-none placeholder-white/40 focus:border-white/30 disabled:opacity-50"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-xs text-white/60" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="youremail@example.com"
              autoComplete="email"
              disabled={isLoading}
              className="rounded-xl border border-white/15 bg-transparent px-3 py-2 text-sm outline-none placeholder-white/40 focus:border-white/30 disabled:opacity-50"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-xs text-white/60" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Tell me about your proyect…"
              disabled={isLoading}
              className="rounded-xl border border-white/15 bg-transparent px-3 py-2 text-sm outline-none placeholder-white/40 focus:border-white/30 min-h-[120px] disabled:opacity-50"
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-4 py-2 text-sm hover:border-white/40 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                </>
              ) : (
                'Send'
              )}
            </button>

            {isSuccess && (
              <span className="inline-flex items-center gap-2 text-emerald-400 text-sm">
                <Check className="h-4 w-4" /> ¡Message Sent!
              </span>
            )}
            {isError && (
              <span className="text-sm text-red-400">{errorMessage}</span>
            )}
          </div>
        </form>

        {/* ATAJOS RÁPIDOS */}
        <div className="grid gap-6">
          <a
            href={`mailto:${SITE.email}`}
            className="group border border-white/10 rounded-2xl p-5 flex items-center justify-between hover:border-white/30 transition-colors"
          >
            <div>
              <p className="text-sm font-medium">Email</p>
              <p className="text-xs text-white/60">{SITE.email}</p>
            </div>
            <Mail className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
          </a>

          <a
            href={SITE.instagram}
            target="_blank"
            rel="noreferrer"
            className="group border border-white/10 rounded-2xl p-5 flex items-center justify-between hover:border-white/30 transition-colors"
          >
            <div className="flex items-center gap-2">
              <Instagram className="w-4 h-4" />
              <p className="text-sm font-medium">Instagram</p>
            </div>
            <ArrowUpRight className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
          </a>

          {whatsappHref && (
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-white/10 rounded-2xl p-5 flex items-center justify-between hover:border-white/30 transition-colors"
              aria-label="Escríbeme por WhatsApp"
            >
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                <p className="text-sm font-medium">WhatsApp</p>
              </div>
              <ArrowUpRight className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}