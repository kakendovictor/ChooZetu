import React from 'react';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '@/lib/sanity';
import { Header } from '@/src/components/Header';
import { Footer } from '@/src/components/Footer';
import { FloatingWhatsApp } from '@/src/components/FloatingWhatsApp';
import { ArrowLeft, Sparkles, MessageCircle, CalendarCheck } from 'lucide-react';
import { getWhatsAppCustomQuoteLink } from '@/src/utils/whatsapp';

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
    return null;
  }

  return (
    <div className="min-h-screen bg-[#020B1D] text-[#E2E8F0]">
      <Header
        currentTab="blog"
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
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <a
            href="/blog"
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to All Guides</span>
          </a>

          <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
            <span className="text-cyan-400 font-semibold">{post.category || 'Guide'}</span>
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

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {post.title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="my-8 aspect-[16/9] w-full overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-900 shadow-2xl">
            <img
              src={post.mainImage.url}
              alt={post.mainImage.alt || post.title}
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="prose prose-invert prose-cyan max-w-none text-slate-200 text-sm sm:text-base leading-relaxed space-y-6">
            {post.contentHtml?.map((paragraph, idx) => (
              <p key={idx} className="text-slate-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-14 rounded-3xl border border-cyan-500/25 bg-[#07152E]/90 p-8 text-center backdrop-blur-xl">
            <Sparkles className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-white">Need Event Sanitation in Kenya?</h3>
            <p className="mt-2 text-sm text-slate-300 max-w-lg mx-auto">
              Get an instant quotation for our luxury VIP mobile restroom trailers or executive loos.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="/quote"
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-lg shadow-cyan-500/20"
              >
                <CalendarCheck className="h-4 w-4" />
                Request Instant Quote
              </a>
              <a
                href={getWhatsAppCustomQuoteLink({ name: 'Inquiry', eventType: 'Event Sanitation' })}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-950/30 px-6 py-3 text-xs font-semibold text-emerald-300"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
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
