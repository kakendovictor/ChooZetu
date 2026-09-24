import React from 'react';
import { Check, ShieldCheck, Zap, ArrowRight, MessageCircle } from 'lucide-react';
import { getWhatsAppBookingLink } from '../utils/whatsapp';

interface PricingPackagesProps {
  onSelectPackage: (packageName: string) => void;
}

export const PricingPackages: React.FC<PricingPackagesProps> = ({ onSelectPackage }) => {
  const packages = [
    {
      name: 'Standard Portable Loo',
      kicker: 'Outdoor Events, Functions & Day Hires',
      price: '6,500',
      period: 'per day',
      idealFor: 'Up to 35 guests or attendees · 1-day hire',
      features: [
        'Heavy-duty chemical recirculating flush loo',
        'Built-in antibacterial hand sanitizer dispenser',
        'Ventilated odor-extraction chimney stack',
        'Heavy-duty security padlock hasp & occupancy lock',
        'Slip-resistant textured floor base',
        'Rapid setup and scheduled bio-decontamination',
      ],
      popular: false,
    },
    {
      name: 'Single Executive Package',
      kicker: 'Garden Parties & Small Gatherings',
      price: '12,500',
      period: 'per day',
      idealFor: 'Up to 100 guests · 1-day event',
      features: [
        'Single standalone luxury executive loo',
        'Freshwater foot-pedal flush',
        'Internal handwashing basin with antibacterial soap',
        'Overhead solar LED soft lighting',
        'Standard eco-deodorizer & fresh scenting',
        'Pre-event delivery and post-event removal',
      ],
      popular: false,
    },
    {
      name: 'The Royal Wedding VIP Suite',
      kicker: 'Luxury Weddings & VIP Receptions',
      price: '75,000',
      period: 'per day',
      idealFor: 'Up to 500 guests · Full day celebration',
      features: [
        '4-Station Luxury Restroom Trailer (Dual Suites)',
        'Fully climate-controlled (Dual Air Conditioning)',
        'Porcelain flush toilets, urinals & quartz counters',
        'Backlit Hollywood vanity mirrors & full length glass',
        'Integrated ambient sound system (Bluetooth ready)',
        'Hot/cold running water with luxury hand soaps & lotion',
        'Dedicated uniformed restroom attendant included',
        'Onboard silent inverter power & water storage',
      ],
      popular: true,
    },
    {
      name: 'Corporate Infrastructure Site Package',
      kicker: 'Long-term Construction & Commercial Works',
      price: '28,000',
      period: 'per month',
      idealFor: 'Up to 25 site workers · 30-day lease',
      features: [
        '2 Heavy-duty anti-clog chemical loos',
        'Weekly pump-out, deep steam sanitization & recharge',
        'External freshwater handwash station attachment',
        'NEMA waste disposal compliance certificates provided',
        'Padlock security hasp for site safety',
        'Free relocation within the same county during project',
      ],
      popular: false,
    },
  ];

  return (
    <div className="py-8 sm:py-12">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
          Transparent Pricing in Kenyan Shillings
        </span>
        <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          All-Inclusive Sanitation Packages
        </h2>
        <p className="mt-3 text-sm text-slate-300">
          No hidden delivery surcharges for Nairobi and surrounding environs. Each booking includes thorough bio-sanitization and prompt setup.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {packages.map((pkg, idx) => (
          <div
            key={idx}
            className={`relative flex flex-col rounded-3xl p-8 backdrop-blur-xl transition-all duration-300 ${
              pkg.popular
                ? 'border-2 border-cyan-400 bg-[#07152E] shadow-2xl shadow-cyan-500/20 lg:-translate-y-2'
                : 'border border-cyan-500/20 bg-[#020B1D]/80 hover:border-cyan-500/40'
            }`}
          >
            {pkg.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-1 text-xs font-extrabold uppercase tracking-wider text-slate-950 shadow-md">
                Most Popular for Weddings
              </div>
            )}

            <div className="mb-6">
              <span className="text-xs font-medium text-cyan-400 block mb-1">{pkg.kicker}</span>
              <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
              <p className="text-xs text-slate-400 mt-1">{pkg.idealFor}</p>
            </div>

            <div className="mb-6 flex items-baseline gap-1">
              <span className="text-sm font-semibold text-slate-400">KSh</span>
              <span className="text-4xl font-extrabold text-white tabular-nums tracking-tight">
                {pkg.price}
              </span>
              <span className="text-xs text-slate-400 ml-1">/ {pkg.period}</span>
            </div>

            <div className="flex-1 mb-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-3">
                Package Inclusions:
              </span>
              <ul className="space-y-2.5">
                {pkg.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <Check className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-800">
              <button
                onClick={() => onSelectPackage(pkg.name)}
                className={`w-full rounded-xl py-3.5 text-xs font-bold uppercase tracking-wider transition-all active:scale-[0.98] ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-lg shadow-cyan-500/20 hover:opacity-95'
                    : 'bg-slate-800 text-white hover:bg-slate-700'
                }`}
              >
                Select Package & Quote
              </button>

              <a
                href={getWhatsAppBookingLink(pkg.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-950/20 hover:bg-emerald-950/40 py-2.5 text-xs font-medium text-emerald-300 transition-colors"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                Inquire via WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
