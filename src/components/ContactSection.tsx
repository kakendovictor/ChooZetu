import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle2 } from 'lucide-react';
import { CHOOZETU_PHONE, CHOOZETU_PHONE_DISPLAY, getWhatsAppContactMessageLink } from '../utils/whatsapp';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.phone.trim() || !formState.message.trim()) {
      return;
    }

    const whatsappLink = getWhatsAppContactMessageLink({
      name: formState.name,
      phone: formState.phone,
      message: formState.message,
    });

    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      try {
        const link = document.createElement('a');
        link.href = whatsappLink;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (e) {
        // Fallback for sandboxed iframes
      }
    }

    setSent(true);
  };

  const whatsappDirectLink = getWhatsAppContactMessageLink({
    name: formState.name,
    phone: formState.phone,
    message: formState.message,
  });

  return (
    <div className="py-8 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
            Reach Out Anytime
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Connect with ChooZetu Operations
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            Have questions on site access, water pressure, generator requirements, or long-term lease rates? Our fleet coordinators are ready.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details & Depots */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-cyan-500/20 bg-[#07152E]/80 p-6 backdrop-blur-xl">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
                Operations Contact
              </h3>
              <ul className="space-y-4 text-xs text-slate-300">
                <li className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-950/80 text-cyan-400 border border-cyan-500/30">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="block text-slate-400">Direct Logistics Hotline</span>
                    <a href={`tel:${CHOOZETU_PHONE}`} className="text-sm font-bold text-white tabular-nums hover:text-cyan-300">
                      {CHOOZETU_PHONE_DISPLAY}
                    </a>
                  </div>
                </li>

                <li className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
                    <MessageCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="block text-slate-400">Instant WhatsApp Booking</span>
                    <a
                      href={`https://wa.me/${CHOOZETU_PHONE.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-emerald-400 hover:underline"
                    >
                      Chat with Fleet Manager
                    </a>
                  </div>
                </li>

                <li className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-950/80 text-cyan-400 border border-cyan-500/30">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="block text-slate-400">Email Inquiries</span>
                    <span className="text-sm font-medium text-white">quotes@choozetu.co.ke</span>
                  </div>
                </li>

                <li className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-950/80 text-cyan-400 border border-cyan-500/30">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="block text-slate-400">Dispatch Hours</span>
                    <span className="text-sm font-medium text-white">24/7 Delivery & Weekend Standby</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Regional Yards */}
            <div className="rounded-2xl border border-cyan-500/20 bg-[#07152E]/80 p-6 backdrop-blur-xl">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-3">
                Fleet Depots in Kenya
              </h3>
              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Nairobi Central:</strong> Commercial St, Industrial Area & Kiambu Rd Hub.
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Naivasha & Rift Valley:</strong> Moi South Lake Road Service Depot.
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Coast & Mombasa:</strong> Mbaraki / Nyali Logistics Yard.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-cyan-500/20 bg-[#07152E]/90 p-8 shadow-2xl backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white mb-2">Send Us a Direct Message</h3>
              <p className="text-xs text-slate-300 mb-6">
                Fill in your details below and a fleet logistics officer will phone or text you back promptly.
              </p>

              {sent ? (
                <div className="py-8 text-center animate-in fade-in">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                    <MessageCircle className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Dispatched to WhatsApp!</h4>
                  <p className="text-xs text-slate-300 mt-2 max-w-sm mx-auto leading-relaxed">
                    Thank you <strong className="text-cyan-300">{formState.name}</strong>. Your message has been formatted and opened in WhatsApp for instant review by our Nairobi operations team (+254 762 344 353).
                  </p>
                  <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={whatsappDirectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 px-6 py-3 text-xs font-bold text-slate-950 uppercase tracking-wider hover:opacity-95"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Open WhatsApp Again
                    </a>
                    <button
                      onClick={() => setSent(false)}
                      className="text-xs text-slate-400 hover:text-white underline underline-offset-4 py-2"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kelvin Otieno"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full rounded-xl border border-slate-700/80 bg-[#020B1D]/70 px-4 py-3 text-sm text-white focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                      Phone Number (Kenya)
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0712 345 678"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full rounded-xl border border-slate-700/80 bg-[#020B1D]/70 px-4 py-3 text-sm text-white focus:border-cyan-400 focus:outline-none tabular-nums"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                      Inquiry / Site Requirement Details
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us about your event venue, dates, or site requirements..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full rounded-xl border border-slate-700/80 bg-[#020B1D]/70 px-4 py-3 text-sm text-white focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 py-3.5 text-sm font-extrabold text-slate-950 uppercase tracking-wider hover:opacity-95 active:scale-[0.99] transition-all shadow-lg shadow-emerald-500/20"
                  >
                    <MessageCircle className="h-4 w-4 fill-slate-950 text-slate-950" />
                    Dispatch Message via WhatsApp
                  </button>

                  <p className="text-center text-xs text-slate-400">
                    Direct WhatsApp message to our logistics desk (+254 762 344 353) • Instant response
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
