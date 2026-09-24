import React from 'react';
import { ArrowRight, Calendar, Clock, BookOpen } from 'lucide-react';
import { BlogPost } from '@/lib/types';

interface BlogTeaserProps {
  posts: BlogPost[];
  onSelectPost: (post: BlogPost) => void;
  onViewAllPosts: () => void;
}

export const BlogTeaser: React.FC<BlogTeaserProps> = ({ posts, onSelectPost, onViewAllPosts }) => {
  return (
    <section className="relative py-16 sm:py-24 border-t border-cyan-500/10 bg-[#020B1D]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Sanitation Guides & Insights
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Planning Sanitation for Kenya Events
            </h2>
            <p className="mt-2 text-sm text-slate-300 max-w-xl">
              Practical guides on portable restroom costs in Nairobi, wedding logistics in Naivasha, and OSHA/NEMA site requirements.
            </p>
          </div>

          <button
            onClick={onViewAllPosts}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>Read All Articles</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.slice(0, 3).map((post) => (
            <article
              key={post._id}
              onClick={() => onSelectPost(post)}
              className="group cursor-pointer flex flex-col rounded-2xl border border-cyan-500/15 bg-[#07152E]/70 overflow-hidden backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-[#0A1B3A] hover:shadow-xl"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                {post.mainImage?.url ? (
                  <img
                    src={post.mainImage.url}
                    alt={post.mainImage.alt || post.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-slate-800 text-cyan-400">
                    <BookOpen className="h-8 w-8" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07152E] via-transparent to-transparent opacity-60" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                  <span>{post.category || 'Planning Guide'}</span>
                  <span aria-hidden="true">·</span>
                  <span>{new Date(post.publishedAt).toLocaleDateString('en-KE', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTimeMinutes || 4} min read</span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-200 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="mt-2 text-xs text-slate-300 leading-relaxed line-clamp-3 flex-1">
                  {post.excerpt}
                </p>

                <div className="mt-5 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
                  <span>Read Full Article</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
