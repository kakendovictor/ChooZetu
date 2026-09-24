import React from 'react';
import { getAllPosts } from '@/lib/sanity';
import { Header } from '@/src/components/Header';
import { Footer } from '@/src/components/Footer';
import { FloatingWhatsApp } from '@/src/components/FloatingWhatsApp';
import { ArrowRight, BookOpen } from 'lucide-react';

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getAllPosts();

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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Kenya Event & Site Sanitation Blog
            </span>
            <h1 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Planning & Industry Guides
            </h1>
            <p className="mt-4 text-base text-slate-300">
              Expert advice on budgeting, site safety compliance, and VIP event sanitation standards in Kenya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post._id}
                className="group flex flex-col rounded-2xl border border-cyan-500/15 bg-[#07152E]/70 overflow-hidden backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-[#0A1B3A]"
              >
                <a href={`/blog/${post.slug}`} className="block relative aspect-[16/9] overflow-hidden">
                  <img
                    src={post.mainImage.url}
                    alt={post.mainImage.alt || post.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07152E] via-transparent to-transparent opacity-60" />
                </a>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                    <span>{post.category || 'Planning'}</span>
                    <span aria-hidden="true">·</span>
                    <span>
                      {new Date(post.publishedAt).toLocaleDateString('en-KE', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{post.readTimeMinutes || 5} min read</span>
                  </div>

                  <h2 className="text-lg font-bold text-white group-hover:text-cyan-200 transition-colors line-clamp-2">
                    <a href={`/blog/${post.slug}`}>{post.title}</a>
                  </h2>

                  <p className="mt-2 text-xs text-slate-300 leading-relaxed line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="mt-6 pt-4 border-t border-slate-800">
                    <a
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300"
                    >
                      <span>Read Full Guide</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </article>
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
