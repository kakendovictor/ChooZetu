import React, { useState } from 'react';
import { Phone, Menu, X, ShieldCheck } from 'lucide-react';
import { CHOOZETU_PHONE_DISPLAY, CHOOZETU_PHONE } from '../utils/whatsapp';

interface HeaderProps {
  currentTab: string;
  onNavigate: (tab: string) => void;
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, onNavigate, onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'catalog', label: 'Unit Catalog' },
    { id: 'pricing', label: 'Pricing & Packages' },
    { id: 'blog', label: 'Blog & Guides' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-cyan-500/10 bg-[#020B1D]/85 backdrop-blur-xl transition-colors">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single element wordmark */}
        <button
          onClick={() => onNavigate('home')}
          className="group flex items-center gap-2.5 text-left focus:outline-none"
          aria-label="ChooZetu Home"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#00F2FE] to-[#4FACFE] p-0.5 shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
            <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#020B1D]">
              <span className="font-extrabold text-cyan-400 text-lg tracking-wider">CZ</span>
            </div>
          </div>
          <div>
            <span className="text-2xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
              Choo<span className="cyan-gradient-text">Zetu</span>
            </span>
          </div>
        </button>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = currentTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`relative text-sm font-medium transition-colors py-2 ${
                  isActive
                    ? 'text-cyan-400 font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${CHOOZETU_PHONE}`}
            className="flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-cyan-300 transition-colors"
          >
            <Phone className="h-3.5 w-3.5 text-cyan-400" />
            <span className="tabular-nums">{CHOOZETU_PHONE_DISPLAY}</span>
          </a>

          <button
            onClick={onOpenQuote}
            className="relative group overflow-hidden rounded-xl px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-950 transition-all active:scale-[0.98]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#00F2FE] via-[#38bdf8] to-[#4FACFE] transition-transform duration-300 group-hover:scale-105" />
            <span className="relative flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" />
              Get Instant Quote
            </span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={onOpenQuote}
            className="rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-3 py-1.5 text-xs font-bold text-slate-950"
          >
            Quote
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-800 bg-[#07152E]/95 px-6 py-6 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`text-left text-base font-medium py-2 ${
                  currentTab === link.id ? 'text-cyan-400 font-semibold' : 'text-slate-300'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <a
                href={`tel:${CHOOZETU_PHONE}`}
                className="flex items-center gap-2 text-sm text-slate-300"
              >
                <Phone className="h-4 w-4 text-cyan-400" />
                <span className="tabular-nums">{CHOOZETU_PHONE_DISPLAY}</span>
              </a>
              <button
                onClick={() => {
                  onOpenQuote();
                  setMobileMenuOpen(false);
                }}
                className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 py-3 text-center text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20"
              >
                Request an Instant Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
