import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, ShieldCheck } from 'lucide-react';
import { CHOOZETU_PHONE, CHOOZETU_PHONE_DISPLAY } from '../utils/whatsapp';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="border-t border-cyan-500/15 bg-[#020B1D] pt-16 pb-12 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#00F2FE] to-[#4FACFE] p-0.5">
                <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#020B1D]">
                  <span className="font-extrabold text-cyan-400 text-sm">CZ</span>
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Choo<span className="cyan-gradient-text">Zetu</span>
              </span>
            </div>
            <p className="mt-4 text-xs text-slate-300 leading-relaxed max-w-sm">
              "Pure Comfort, Anywhere." Kenya’s trusted partner for high-end mobile restroom trailers,
              accessible units, and hygienic site sanitation across weddings, corporate galas, and infrastructure projects.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={`https://wa.me/${CHOOZETU_PHONE.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-950/40 px-3 py-1.5 text-xs font-semibold text-emerald-400 hover:bg-emerald-900/50 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp Fleet Support</span>
              </a>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('catalog')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Unit Catalog
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('pricing')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Pricing & Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('quote')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Get Instant Quote
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('blog')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Sanitation Guides
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Key Service Hubs */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Coverage Hubs
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                <span>Nairobi (Karen, Westlands, Runda)</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                <span>Naivasha & Great Rift Valley</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                <span>Nakuru County</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                <span>Mombasa & Coastal Events</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                <span>Machakos & Athi River</span>
              </li>
            </ul>
          </div>

          {/* Col 5: Direct Inquiries */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                <a href={`tel:${CHOOZETU_PHONE}`} className="hover:text-white tabular-nums">
                  {CHOOZETU_PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                <span className="hover:text-white">quotes@choozetu.co.ke</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>NEMA & OSHA Environmental Waste Registered</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ChooZetu Kenya. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Hospitality Grade Cleanliness</span>
            <span aria-hidden="true">·</span>
            <span>24/7 Logistics Hotline</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
