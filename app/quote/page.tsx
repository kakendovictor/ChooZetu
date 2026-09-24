import React from 'react';
import { getAllToilets } from '@/lib/sanity';
import { Header } from '@/src/components/Header';
import { Footer } from '@/src/components/Footer';
import { FloatingWhatsApp } from '@/src/components/FloatingWhatsApp';
import { QuoteForm } from '@/src/components/QuoteForm';

export const revalidate = 60;

export default async function QuotePage() {
  const allUnits = await getAllToilets();

  return (
    <div className="min-h-screen bg-[#020B1D] text-[#E2E8F0]">
      <Header
        currentTab="quote"
        onNavigate={(tab) => {
          if (typeof window !== 'undefined') {
            window.location.href = tab === 'home' ? '/' : `/${tab}`;
          }
        }}
        onOpenQuote={() => {}}
      />

      <main className="py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <QuoteForm allUnits={allUnits} />
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
