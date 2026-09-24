import React from 'react';
import { Sparkles, Truck, Users, ShieldAlert, Check, Droplets } from 'lucide-react';

export const ValueProposition: React.FC = () => {
  const pillars = [
    {
      icon: Droplets,
      number: '01',
      title: '100% Hospital-Grade Hygiene',
      description:
        'Every unit undergoes a strict 12-point sanitization protocol using eco-friendly biodegradable disinfectants before deployment. Fresh water, touchless fixtures, and odor-free comfort guaranteed.',
      highlight: 'Odor-Free Guarantee',
    },
    {
      icon: Truck,
      number: '02',
      title: 'Punctual Nationwide Delivery',
      description:
        'Dedicated logistics depots in Nairobi, Naivasha, Nakuru, and Mombasa. We position units at your venue at least 3 hours prior to guest arrival with zero stress or delays.',
      highlight: '4 Strategic Hubs',
    },
    {
      icon: Users,
      number: '03',
      title: 'Uniformed On-Site Attendants',
      description:
        'Trained, hospitable attendants remain on-site to wipe surfaces after each guest, replenish luxury toiletries, manage queue flow, and keep mirrors pristine.',
      highlight: 'VIP Guest Hospitality',
    },
    {
      icon: ShieldAlert,
      number: '04',
      title: 'NEMA & OSHA Certified',
      description:
        'Full compliance with Kenyan environmental protection and occupational safety standards. Safe biological waste evacuation with certified municipal records.',
      highlight: 'Full Legal Compliance',
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 border-y border-cyan-500/10 bg-[#07152E]/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
            The ChooZetu Standard
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Why Kenya’s Top Event Organizers Choose Us
          </h2>
          <p className="mt-4 text-base text-slate-300">
            We eliminate the discomfort and embarrassment of substandard event sanitation with luxury amenities,
            uncompromising cleanliness, and reliable Kenyan logistics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="group relative flex flex-col rounded-2xl border border-cyan-500/15 bg-[#020B1D]/80 p-6 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-mono text-cyan-500/50 font-bold">{pillar.number}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed flex-1 mb-4">
                  {pillar.description}
                </p>

                <div className="pt-3 border-t border-slate-800 flex items-center gap-1.5 text-xs font-medium text-cyan-400">
                  <Check className="h-3.5 w-3.5" />
                  <span>{pillar.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
