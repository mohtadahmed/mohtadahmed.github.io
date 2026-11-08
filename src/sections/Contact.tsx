import { useState } from 'react';
import { Check, Copy, Mail, MapPin, Phone, Send } from 'lucide-react';
import { profile } from '@/data/profile';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import SocialLinks from '@/components/SocialLinks';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  // No backend needed: opens the visitor's email app with the message pre-filled.
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = form.subject || `Hello from ${form.name || 'your website'}`;
    const body = `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ''}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const input =
    'w-full rounded-lg border border-white/10 bg-ink-950/60 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-600 transition focus:border-volt/50 focus:outline-none focus:ring-2 focus:ring-volt/20';

  return (
    <Section id="contact">
      <SectionHeading index="11" label="contact" title={<>Let's build something <span className="text-gradient">together</span></>}>
        Have a project, a research idea, a teaching opportunity — or just want to talk IoT? My inbox is open.
      </SectionHeading>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.3fr]">
        <Reveal className="space-y-4">
          <div className="card p-5">
            <div className="flex items-center gap-4">
              <span className="grid h-11 w-11 place-items-center rounded-lg border border-volt/30 bg-volt/10 text-volt">
                <Mail className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-mono text-[11px] uppercase tracking-wider text-slate-500">Email</p>
                <a href={`mailto:${profile.email}`} className="block truncate text-white hover:text-volt">
                  {profile.email}
                </a>
              </div>
              <button onClick={copy} className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-slate-400 hover:text-volt" aria-label="Copy email">
                {copied ? <Check className="h-4 w-4 text-amp" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
          </div>
          <a href={`tel:${profile.phoneHref}`} className="card card-hover flex items-center gap-4 p-5">
            <span className="grid h-11 w-11 place-items-center rounded-lg border border-amp/30 bg-amp/10 text-amp">
              <Phone className="h-5 w-5" />
            </span>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-slate-500">Phone</p>
              <p className="text-white">{profile.phone}</p>
            </div>
          </a>
          <div className="card flex items-center gap-4 p-5">
            <span className="grid h-11 w-11 place-items-center rounded-lg border border-sky-400/30 bg-sky-400/10 text-sky-300">
              <MapPin className="h-5 w-5" />
            </span>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-slate-500">Location</p>
              <p className="text-white">{profile.location}</p>
            </div>
          </div>
          <div className="card p-5">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-slate-500">Elsewhere</p>
            <SocialLinks withEmail={false} />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form onSubmit={submit} className="card hud space-y-4 p-6 sm:p-8">
            <p className="font-mono text-xs text-slate-500">
              <span className="text-volt">$</span> compose --to {profile.email.split('@')[0]}
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-xs text-slate-400">Name</span>
                <input required className={input} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs text-slate-400">Email</span>
                <input type="email" className={input} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
              </label>
            </div>
            <label className="block">
              <span className="mb-1.5 block text-xs text-slate-400">Subject</span>
              <input className={input} value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="Project, collaboration, question…" />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs text-slate-400">Message</span>
              <textarea required rows={6} className={input} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me a bit about it…" />
            </label>
            <button type="submit" className="btn-primary w-full sm:w-auto">
              <Send className="h-4 w-4" /> Send message
            </button>
            <p className="text-xs text-slate-600">Opens your email app with the message ready to send.</p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
