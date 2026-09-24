import React from 'react';
import { ArrowRight, ShieldCheck, Clock, MapPin, Award, Sparkles } from 'lucide-react';
import heroLuxuryTrailerImg from '../assets/images/kenya_luxury_vip_trailer_1790266624260.jpg';

interface HeroSectionProps {
  onRequestQuote: () => void;
  onViewUnits: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onRequestQuote, onViewUnits }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background ambient water/glow orbs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[48rem] rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-20 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl animate-water-glow" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy and CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Tagline kicker */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-cyan-300 backdrop-blur-md mb-6">
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              <span>Pure Comfort, Anywhere.</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] text-balance">
              Sanitation Solutions for Events & Sites Across{' '}
              <span className="cyan-gradient-text">Kenya</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Kenya’s premier luxury mobile restroom trailer & executive loo fleet. We deliver spotless,
              air-conditioned, and fully serviced portable sanitation to high-end weddings, corporate galas,
              and industrial project sites across Nairobi, Naivasha, Nakuru, and Mombasa.
            </p>

            {/* Dual CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onRequestQuote}
                className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#00F2FE] via-[#38bdf8] to-[#4FACFE] px-7 py-4 text-sm font-bold uppercase tracking-wider text-slate-950 shadow-xl shadow-cyan-500/20 hover:opacity-95 active:scale-[0.98] transition-all"
              >
                <span>Request a Quote</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onViewUnits}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700/80 bg-[#07152E]/80 hover:bg-[#0A1B3A] px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition-colors active:scale-[0.98]"
              >
                View Toilet Units
              </button>
            </div>

            {/* Claim-to-Proof Adjacency Bar */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-slate-800/80 pt-8 w-full">
              <div>
                <div className="flex items-center gap-1.5 text-cyan-400">
                  <ShieldCheck className="h-4 w-4" />
                  <span className="text-sm sm:text-base font-bold text-white tabular-nums">100%</span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">Hospital-Grade Clean</p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-cyan-400">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm sm:text-base font-bold text-white tabular-nums">On-Time</span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">Guaranteed Delivery</p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-cyan-400">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm sm:text-base font-bold text-white">4+ Counties</span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">Nationwide Hubs</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Media Showcase (16:9 or frame) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl border border-cyan-500/20 bg-gradient-to-b from-cyan-500/10 to-transparent p-2 backdrop-blur-md shadow-2xl">
              <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3] overflow-hidden rounded-2xl bg-slate-900">
                <img
                  src={heroLuxuryTrailerImg}
                  alt="ChooZetu Luxury Mobile Restroom Trailer setup in Karen Nairobi Kenya"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020B1D] via-transparent to-transparent opacity-60" />

                {/* Live Float Badge */}
                <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-cyan-500/20 bg-[#07152E]/90 p-3.5 backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="block text-xs font-bold text-white">The Presidential VIP Trailer</span>
                      <span className="text-[11px] text-slate-400">Air Conditioned · Hot Water · Sound System</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-cyan-300">From KSh 75,000</span>
                      <span className="block text-[10px] text-slate-400">/ day</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
