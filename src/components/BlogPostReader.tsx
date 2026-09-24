import React from 'react';
import { ArrowLeft, Calendar, Clock, Share2, Sparkles, MessageCircle, CalendarCheck } from 'lucide-react';
import { BlogPost } from '@/lib/types';
import { getWhatsAppCustomQuoteLink } from '../utils/whatsapp';

interface BlogPostReaderProps {
  post: BlogPost;
  onBack: () => void;
  onRequestQuote: () => void;
}

export const BlogPostReader: React.FC<BlogPostReaderProps> = ({ post, onBack, onRequestQuote }) => {
  return (
    <div className="py-8 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to All Guides</span>
        </button>

        {/* Article Meta */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
          <span className="text-cyan-400 font-semibold">{post.category || 'Event Planning'}</span>
          <span aria-hidden="true">·</span>
          <span>
            {new Date(post.publishedAt).toLocaleDateString('en-KE', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>
          <span aria-hidden="true">·</span>
          <span>{post.readTimeMinutes || 5} min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
          {post.title}
        </h1>

        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
          {post.excerpt}
        </p>

        {/* Featured Image */}
        <div className="my-8 aspect-[16/9] w-full overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-900 shadow-2xl">
          <img
            src={post.mainImage.url}
            alt={post.mainImage.alt || post.title}
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Body content */}
        <div className="prose prose-invert prose-cyan max-w-none text-slate-200 text-sm sm:text-base leading-relaxed space-y-6">
          {post.contentHtml ? (
            post.contentHtml.map((paragraph: string, idx: number) => (
              <p key={idx} className="text-slate-300 leading-relaxed">
                {paragraph}
              </p>
            ))
          ) : (
            <p className="text-slate-300">Detailed guide content loading from Sanity CMS...</p>
          )}
        </div>

        {/* Contextual CTA Banner */}
        <div className="mt-12 rounded-3xl border border-cyan-500/25 bg-[#07152E]/90 p-8 text-center backdrop-blur-xl">
          <Sparkles className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
          <h3 className="text-2xl font-bold text-white">Planning an Event in Kenya?</h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
            Get an all-inclusive quotation for our luxury VIP mobile restroom trailers or executive loos. We deliver anywhere in Kenya with hospital-grade sanitization.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onRequestQuote}
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-lg shadow-cyan-500/20 hover:opacity-95"
            >
              <CalendarCheck className="h-4 w-4" />
              Request Instant Quote
            </button>
            <a
              href={getWhatsAppCustomQuoteLink({ name: 'Blog Reader', eventType: 'Event Inquiry' })}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-950/30 px-6 py-3 text-xs font-semibold text-emerald-300 hover:bg-emerald-950/50"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
