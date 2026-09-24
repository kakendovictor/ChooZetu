import React from 'react';
import { Star, Quote, Building2, HeartHandshake, HardHat } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Wanjiku Mwangi',
      role: 'Lead Wedding Planner',
      company: 'Aura Luxury Weddings, Nairobi',
      category: 'Destination Wedding',
      icon: HeartHandshake,
      quote:
        'We booked the 4-Station Presidential Trailer for a 450-guest garden reception in Karen. The air conditioning and spotless vanity mirrors were the talk of the evening. Not a single queue or unpleasant odor. ChooZetu transformed our outdoor setup.',
      outcome: 'Zero guest complaints across 8-hour celebration',
    },
    {
      name: 'David Otieno',
      role: 'Head of Operations',
      company: 'East Africa Tech Summit (500+ Attendees)',
      category: 'Corporate Conference',
      icon: Building2,
      quote:
        'For high-profile international delegates at our Naivasha retreat, ordinary porta-potties were not an option. ChooZetu delivered two luxury trailers with professional uniformed attendants who maintained five-star hotel hygiene all weekend.',
      outcome: '100% on-time placement 4 hours before keynote',
    },
    {
      name: 'Eng. Francis Kimani',
      role: 'Site Director',
      company: 'Apex Infrastructure Kenya',
      category: 'Construction Project',
      icon: HardHat,
      quote:
        'We have contracted ChooZetu for our 9-month commercial site in Ruiru. Weekly pump-outs are executed like clockwork, accompanied by NEMA compliance certificates. Our workers have clean, dignified facilities and productivity is up.',
      outcome: 'Passed 3 NEMA & OSHA environmental audits cleanly',
    },
  ];

  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
            Client Endorsements
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Trusted by Kenya’s Most Demanding Events
          </h2>
          <p className="mt-3 text-base text-slate-300">
            From high-society nuptials in Naivasha to heavy civil engineering sites in Nairobi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => {
            const CategoryIcon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl border border-cyan-500/15 bg-[#07152E]/80 p-8 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/30 hover:bg-[#0A1B3A]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-cyan-400 text-cyan-400" />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs text-cyan-300 font-medium">
                      <CategoryIcon className="h-3.5 w-3.5" />
                      {item.category}
                    </span>
                  </div>

                  <p className="text-sm text-slate-200 leading-relaxed italic mb-6">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-800">
                  <div className="mb-2">
                    <span className="block text-xs font-bold uppercase tracking-wider text-cyan-400">
                      Outcome
                    </span>
                    <span className="text-xs text-slate-300">{item.outcome}</span>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-sm font-bold text-white">{item.name}</h4>
                    <p className="text-xs text-slate-400">{item.role}</p>
                    <p className="text-xs text-slate-500 font-medium">{item.company}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
