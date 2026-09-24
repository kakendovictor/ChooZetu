import React, { useState } from 'react';
import { Sparkles, Users, CheckCircle2, MessageCircle, CalendarCheck, ShieldCheck } from 'lucide-react';
import { ToiletUnit } from '@/lib/types';
import { getWhatsAppBookingLink } from '../utils/whatsapp';

interface ToiletCardProps {
  unit: ToiletUnit;
  onSelectForQuote: (unit: ToiletUnit) => void;
  onViewDetails?: (unit: ToiletUnit) => void;
}

export const ToiletCard: React.FC<ToiletCardProps> = ({
  unit,
  onSelectForQuote,
  onViewDetails,
}) => {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [imageError, setImageError] = useState(false);

  const images = unit.images && unit.images.length > 0 ? unit.images : [{ url: '' }];
  const currentImage = images[activeImageIdx] || images[0];

  return (
    <div className="group relative flex flex-col rounded-2xl border border-cyan-500/15 bg-[#07152E]/80 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-[#0A1B3A]/90 hover:shadow-2xl hover:shadow-cyan-500/10 overflow-hidden">
      {/* Media Window with fallback container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
        {!imageError && currentImage?.url ? (
          <img
            src={currentImage.url}
            alt={currentImage.alt || unit.title}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#07152E] to-[#0A1B3A] p-6 text-center">
            <Sparkles className="h-10 w-10 text-cyan-400 mb-2 opacity-70 animate-pulse" />
            <span className="text-sm font-semibold text-slate-300">{unit.title}</span>
            <span className="text-xs text-slate-500 mt-1">ChooZetu Premium Fleet</span>
          </div>
        )}

        {/* Gradient Scrim */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07152E] via-transparent to-transparent opacity-80" />

        {/* Category & Availability Tag */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="rounded-md bg-[#020B1D]/80 backdrop-blur-md px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 border border-cyan-500/20">
            {unit.category}
          </span>
          <span className="flex items-center gap-1 rounded-md bg-[#020B1D]/80 backdrop-blur-md px-2.5 py-1 text-xs font-medium text-emerald-400 border border-emerald-500/20">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available Now
          </span>
        </div>

        {/* Image thumbnail swapper if multiple images */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-3 flex gap-1.5">
            {images.map((_: any, idx: number) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImageIdx(idx);
                }}
                className={`h-2 rounded-full transition-all ${
                  idx === activeImageIdx ? 'w-6 bg-cyan-400' : 'w-2 bg-white/50 hover:bg-white'
                }`}
                aria-label={`View image ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2">
          <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-200 transition-colors">
            {unit.title}
          </h3>
          <div className="mt-1 flex items-center gap-2 text-xs text-slate-400">
            <Users className="h-3.5 w-3.5 text-cyan-400" />
            <span>{unit.capacity}</span>
          </div>
        </div>

        {/* Pricing block */}
        <div className="my-4 rounded-xl border border-cyan-500/10 bg-[#020B1D]/60 p-3.5 flex items-baseline justify-between">
          <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">Daily Rental</span>
          <div className="text-right">
            <span className="text-2xl font-extrabold text-white tabular-nums tracking-tight">
              KSh {unit.dailyRateKSh.toLocaleString()}
            </span>
            <span className="text-xs text-slate-400 ml-1">/ day</span>
          </div>
        </div>

        {/* Features preview */}
        <div className="mb-6 flex-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
            Included Amenities
          </span>
          <ul className="space-y-1.5">
            {unit.features.slice(0, 4).map((feat: string, i: number) => (
              <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-cyan-400" />
                <span className="line-clamp-1">{feat}</span>
              </li>
            ))}
            {unit.features.length > 4 && (
              <li className="text-xs text-cyan-400/80 font-medium pt-1">
                + {unit.features.length - 4} more premium features
              </li>
            )}
          </ul>
        </div>

        {/* Dual Actions: WhatsApp Book & Request Quote */}
        <div className="flex flex-col sm:flex-row gap-2.5 pt-2 border-t border-slate-800">
          <a
            href={getWhatsAppBookingLink(unit.title, unit.dailyRateKSh)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 px-3.5 py-2.5 text-xs font-semibold text-emerald-300 transition-colors whitespace-nowrap active:scale-[0.98]"
          >
            <MessageCircle className="h-4 w-4 text-emerald-400" />
            Book via WhatsApp
          </a>

          <button
            onClick={() => onSelectForQuote(unit)}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 px-3.5 py-2.5 text-xs font-bold text-slate-950 transition-all shadow-md shadow-cyan-500/10 active:scale-[0.98] whitespace-nowrap"
          >
            <CalendarCheck className="h-4 w-4" />
            Select for Quote
          </button>
        </div>
      </div>
    </div>
  );
};
