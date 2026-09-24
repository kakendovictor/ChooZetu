/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { HeroSection } from './components/HeroSection';
import { ValueProposition } from './components/ValueProposition';
import { ToiletCard } from './components/ToiletCard';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BlogTeaser } from './components/BlogTeaser';
import { QuoteForm } from './components/QuoteForm';
import { PricingPackages } from './components/PricingPackages';
import { ContactSection } from './components/ContactSection';
import { BlogPostReader } from './components/BlogPostReader';
import { ToiletUnit, BlogPost, ToiletCategory } from '../lib/types';
import { getAllToilets, getAllPosts } from '../lib/sanity';
import { SEED_TOILETS, SEED_POSTS } from '../lib/seedData';
import {
  Filter,
  Search,
  ArrowRight,
  Sparkles,
  Calendar,
  X,
  CheckCircle2,
  Users,
  ShieldCheck,
  MessageCircle,
} from 'lucide-react';
import { getWhatsAppBookingLink } from './utils/whatsapp';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [units, setUnits] = useState<ToiletUnit[]>(SEED_TOILETS);
  const [posts, setPosts] = useState<BlogPost[]>(SEED_POSTS);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedUnitForQuote, setSelectedUnitForQuote] = useState<ToiletUnit | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [detailModalUnit, setDetailModalUnit] = useState<ToiletUnit | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const [fetchedUnits, fetchedPosts] = await Promise.all([
          getAllToilets(),
          getAllPosts(),
        ]);
        if (fetchedUnits && fetchedUnits.length > 0) setUnits(fetchedUnits);
        if (fetchedPosts && fetchedPosts.length > 0) setPosts(fetchedPosts);
      } catch (err) {
        // Seed fallback is already active
      }
    }
    loadData();
  }, []);

  const categories: string[] = [
    'All',
    'VIP Luxury Trailer',
    'Single Executive Loo',
    'Accessible VIP Unit',
    'Standard Construction Loo',
  ];

  const filteredUnits = units.filter((unit) => {
    const matchesCategory = activeCategory === 'All' || unit.category === activeCategory;
    const matchesSearch =
      unit.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      unit.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleSelectForQuote = (unit: ToiletUnit) => {
    setSelectedUnitForQuote(unit);
    setCurrentTab('quote');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReadPost = (post: BlogPost) => {
    setSelectedPost(post);
    setCurrentTab('blog-post');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#020B1D] text-[#E2E8F0] selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Bar Navigation */}
      <Header
        currentTab={currentTab}
        onNavigate={(tab) => {
          setCurrentTab(tab);
          if (tab === 'blog') setSelectedPost(null);
        }}
        onOpenQuote={() => setQuoteModalOpen(true)}
      />

      <main className="flex-1">
        {/* TAB 1: HOME */}
        {currentTab === 'home' && (
          <div>
            <HeroSection
              onRequestQuote={() => {
                setCurrentTab('quote');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onViewUnits={() => {
                setCurrentTab('catalog');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            <ValueProposition />

            {/* Featured Fleet Showcase */}
            <section className="py-16 sm:py-24">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                      Signature Collection
                    </span>
                    <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                      Featured Restroom Trailers & Loos
                    </h2>
                    <p className="mt-2 text-sm text-slate-300">
                      Pristine mobile units available for dispatch across Nairobi, Naivasha, Nakuru, and Mombasa.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setCurrentTab('catalog');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>View All {units.length} Units</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {units.slice(0, 3).map((unit) => (
                    <ToiletCard
                      key={unit._id}
                      unit={unit}
                      onSelectForQuote={handleSelectForQuote}
                      onViewDetails={(u) => setDetailModalUnit(u)}
                    />
                  ))}
                </div>
              </div>
            </section>

            <TestimonialsSection />

            <BlogTeaser
              posts={posts}
              onSelectPost={handleReadPost}
              onViewAllPosts={() => {
                setCurrentTab('blog');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>
        )}

        {/* TAB 2: INVENTORY / CATALOG */}
        {currentTab === 'catalog' && (
          <div className="py-12 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  Fleet Inventory
                </span>
                <h1 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                  Mobile Toilet Units in Kenya
                </h1>
                <p className="mt-3 text-sm sm:text-base text-slate-300">
                  Filter by category to explore VIP luxury trailers, wheelchair-accessible suites, standalone executive loos, and standard construction cabins.
                </p>
              </div>

              {/* Controls: Category Filter Tabs + Search */}
              <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Segmented Category Filter Buttons */}
                <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-[#07152E] border border-cyan-500/15 max-w-full overflow-x-auto">
                  {categories.map((cat) => {
                    const isCurrent = activeCategory === cat;
                    return (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`rounded-xl px-4 py-2 text-xs font-medium transition-all whitespace-nowrap ${
                          isCurrent
                            ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                            : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                        }`}
                      >
                        {cat}
                      </button>
                    );
                  })}
                </div>

                {/* Search Bar */}
                <div className="relative w-full md:w-72">
                  <Search className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search amenities (e.g. AC, flush)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full rounded-xl border border-slate-700/80 bg-[#07152E] pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Units Grid */}
              {filteredUnits.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredUnits.map((unit) => (
                    <ToiletCard
                      key={unit._id}
                      unit={unit}
                      onSelectForQuote={handleSelectForQuote}
                      onViewDetails={(u) => setDetailModalUnit(u)}
                    />
                  ))}
                </div>
              ) : (
                <div className="rounded-3xl border border-dashed border-slate-700 bg-[#07152E]/40 p-12 text-center">
                  <p className="text-sm text-slate-400">No units match your current filter.</p>
                  <button
                    onClick={() => {
                      setActiveCategory('All');
                      setSearchQuery('');
                    }}
                    className="mt-3 text-xs font-semibold text-cyan-400 hover:underline"
                  >
                    Reset all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 3: PRICING & PACKAGES */}
        {currentTab === 'pricing' && (
          <div className="py-12 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <PricingPackages
                onSelectPackage={(pkg) => {
                  setSelectedUnitForQuote(null);
                  setCurrentTab('quote');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </div>
          </div>
        )}

        {/* TAB 4: QUOTE & BOOKING FORM */}
        {currentTab === 'quote' && (
          <div className="py-12 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <QuoteForm
                initialSelectedUnit={selectedUnitForQuote}
                allUnits={units}
                onSuccess={() => {}}
              />
            </div>
          </div>
        )}

        {/* TAB 5: BLOG (LIST) */}
        {currentTab === 'blog' && (
          <div className="py-12 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-14">
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  Knowledge Hub
                </span>
                <h1 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                  Event Sanitation Guides & Prices
                </h1>
                <p className="mt-3 text-base text-slate-300">
                  Comprehensive insights on mobile toilet rental costs in Nairobi, wedding logistics in Naivasha, and Kenyan OSHA/NEMA site requirements.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <article
                    key={post._id}
                    onClick={() => handleReadPost(post)}
                    className="group cursor-pointer flex flex-col rounded-2xl border border-cyan-500/15 bg-[#07152E]/70 overflow-hidden backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-[#0A1B3A]"
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                      <img
                        src={post.mainImage.url}
                        alt={post.mainImage.alt || post.title}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#07152E] via-transparent to-transparent opacity-60" />
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                        <span className="text-cyan-400">{post.category || 'Planning'}</span>
                        <span aria-hidden="true">·</span>
                        <span>{new Date(post.publishedAt).toLocaleDateString('en-KE', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        <span aria-hidden="true">·</span>
                        <span>{post.readTimeMinutes || 5} min read</span>
                      </div>

                      <h2 className="text-lg font-bold text-white group-hover:text-cyan-200 transition-colors line-clamp-2">
                        {post.title}
                      </h2>

                      <p className="mt-2 text-xs text-slate-300 leading-relaxed line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>

                      <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
                        <span>Read Full Guide</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: BLOG POST READER */}
        {currentTab === 'blog-post' && selectedPost && (
          <BlogPostReader
            post={selectedPost}
            onBack={() => setCurrentTab('blog')}
            onRequestQuote={() => {
              setCurrentTab('quote');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {/* TAB 7: CONTACT */}
        {currentTab === 'contact' && <ContactSection />}
      </main>

      {/* Floating Instant Quote Modal */}
      {quoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in">
          <div className="relative w-full max-w-3xl my-8">
            <button
              onClick={() => setQuoteModalOpen(false)}
              className="absolute top-4 right-4 z-20 rounded-full bg-slate-800/80 p-2 text-slate-400 hover:text-white"
              aria-label="Close dialog"
            >
              <X className="h-5 w-5" />
            </button>
            <QuoteForm
              initialSelectedUnit={selectedUnitForQuote}
              allUnits={units}
              onSuccess={() => {
                setTimeout(() => setQuoteModalOpen(false), 3500);
              }}
            />
          </div>
        </div>
      )}

      <Footer
        onNavigate={(tab) => {
          setCurrentTab(tab);
          if (tab === 'blog') setSelectedPost(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Persistent Floating WhatsApp Icon */}
      <FloatingWhatsApp />
    </div>
  );
}
