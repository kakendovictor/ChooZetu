import React from 'react';
import { getFeaturedToilets, getLatestPosts } from '@/lib/sanity';
import { HeroSection } from '@/src/components/HeroSection';
import { ValueProposition } from '@/src/components/ValueProposition';
import { ToiletCard } from '@/src/components/ToiletCard';
import { TestimonialsSection } from '@/src/components/TestimonialsSection';
import { BlogTeaser } from '@/src/components/BlogTeaser';
import { Header } from '@/src/components/Header';
import { Footer } from '@/src/components/Footer';
import { FloatingWhatsApp } from '@/src/components/FloatingWhatsApp';

export const revalidate = 60;

export default async function HomePage() {
  const [featuredUnits, latestPosts] = await Promise.all([
    getFeaturedToilets(),
    getLatestPosts(),
  ]);

  return (
    <div className="min-h-screen bg-[#020B1D] text-[#E2E8F0]">
      <Header
        currentTab="home"
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

      <main>
        <HeroSection
          onRequestQuote={() => {
            if (typeof window !== 'undefined') window.location.href = '/quote';
          }}
          onViewUnits={() => {
            if (typeof window !== 'undefined') window.location.href = '/catalog';
          }}
        />

        <ValueProposition />

        {/* Dynamic Featured Showcase */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  Featured Fleet
                </span>
                <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                  Executive Restroom Trailers & Loos
                </h2>
                <p className="mt-2 text-sm text-slate-300">
                  Directly synced from Sanity CMS with real-time availability in Kenya.
                </p>
              </div>

              <a
                href="/catalog"
                className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300"
              >
                View Full Inventory →
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredUnits.map((unit) => (
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
        </section>

        <TestimonialsSection />

        <BlogTeaser
          posts={latestPosts}
          onSelectPost={(p) => {
            if (typeof window !== 'undefined') window.location.href = `/blog/${p.slug}`;
          }}
          onViewAllPosts={() => {
            if (typeof window !== 'undefined') window.location.href = '/blog';
          }}
        />
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
