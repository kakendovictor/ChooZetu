import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { CHOOZETU_PHONE, CHOOZETU_PHONE_DISPLAY } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);
  const cleanPhone = CHOOZETU_PHONE.replace(/[^0-9]/g, '');
  const defaultMessage = encodeURIComponent(
    'Hello ChooZetu! 🌟 I am planning an event in Kenya and would like to inquire about mobile toilet availability and pricing.'
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Tooltip prompt */}
      {showTooltip && (
        <div className="mb-2 hidden sm:flex items-center gap-2 rounded-xl border border-cyan-500/20 bg-[#07152E]/95 px-3.5 py-2 text-xs text-slate-200 shadow-xl backdrop-blur-md transition-all animate-in fade-in slide-in-from-bottom-2">
          <span>Need rapid assistance? Chat on WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="rounded p-0.5 text-slate-400 hover:text-white"
            aria-label="Dismiss message"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={`https://wa.me/${cleanPhone}?text=${defaultMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 text-white shadow-2xl shadow-emerald-500/30 transition-transform duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-[#020B1D]"
        aria-label="Chat with ChooZetu on WhatsApp"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-400/20 blur-sm animate-pulse" />
        <MessageCircle className="relative h-7 w-7 fill-white/10" />
      </a>
    </div>
  );
};
