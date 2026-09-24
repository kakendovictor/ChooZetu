import React from 'react';
import { getAllToilets } from '@/lib/sanity';
import { Header } from '@/src/components/Header';
import { Footer } from '@/src/components/Footer';
import { FloatingWhatsApp } from '@/src/components/FloatingWhatsApp';
import { ToiletCard } from '@/src/components/ToiletCard';

export const revalidate = 60;

export default async function CatalogPage() {
  const allUnits = await getAllToilets();

  return (
    <div className="min-h-screen bg-[#020B1D] text-[#E2E8F0]">
      <Header
        currentTab="catalog"
        onNavigate={(tab) => {
          if (typeof window !== 'undefined') {
            window.location.href = tab === 'home' ? '/' : `/${tab}`;
          }
        }}
        onOpenQuote={() => {
          if (typeof window !== 'undefined') {
            window.location.href = '/quote';
          }
        }}
      />

      <main className="py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Complete Rental Inventory
            </span>
            <h1 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              ChooZetu Mobile Restroom Fleet
            </h1>
            <p className="mt-4 text-base text-slate-300">
              Browse our complete catalog of mobile restroom trailers, accessible VIP suites, executive single loos, and site sanitation units in Kenya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allUnits.map((unit) => (
              <ToiletCard
                key={unit._id}
                unit={unit}
                onSelectForQuote={(u) => {
                  if (typeof window !== 'undefined') {
                    window.location.href = `/quote?unit=${encodeURIComponent(u.title)}`;
                  }
                }}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer
        onNavigate={(tab) => {
          if (typeof window !== 'undefined') {
            window.location.href = tab === 'home' ? '/' : `/${tab}`;
          }
        }}
      />
      <FloatingWhatsApp />
    </div>
  );
}
