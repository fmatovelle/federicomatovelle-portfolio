import { Mail, ArrowUpRight, Instagram } from 'lucide-react';
import { SITE } from '@/lib/content';

export default function Contact() {
  return (
    <section id="contact" className="py-10 sm:py-16">
      <h2 className="text-xl font-semibold mb-6 tracking-widest">CONTACT</h2>
      <div className="grid md:grid-cols-2 gap-6">
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
    </section>
  );
}
