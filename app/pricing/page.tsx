import React from 'react';
import { Header } from '@/src/components/Header';
import { Footer } from '@/src/components/Footer';
import { FloatingWhatsApp } from '@/src/components/FloatingWhatsApp';
import { PricingPackages } from '@/src/components/PricingPackages';

export const revalidate = 60;

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#020B1D] text-[#E2E8F0]">
      <Header
        currentTab="pricing"
        onNavigate={(tab) => {
          if (typeof window !== 'undefined') {
            window.location.href = tab === 'home' ? '/' : `/${tab}`;
          }
        }}
        onOpenQuote={() => {
          if (typeof window !== 'undefined') window.location.href = '/quote';
        }}
      />

      <main className="py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PricingPackages
            onSelectPackage={(pkg) => {
              if (typeof window !== 'undefined') {
                window.location.href = `/quote?package=${encodeURIComponent(pkg)}`;
              }
            }}
          />
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
