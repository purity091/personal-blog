import type { Metadata } from 'next';
import { Calendar, ChevronLeft, Clock, ArrowLeft } from 'lucide-react';
import Navbar from '../../components/Navbar';
import FooterReflect from '../../components/FooterReflect';
import { getPublishedBlogPosts } from '../../lib/content';

export const metadata: Metadata = {
  title: 'المدونة',
  description: 'مقالات متعمقة حول الذكاء الاصطناعي والتعلم العميق',
};

export default function BlogPage() {
  const posts = getPublishedBlogPosts();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg-primary)] transition-colors duration-300">
        <section className="relative overflow-hidden border-b border-[var(--border-subtle)] px-6 pb-16 pt-32">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent-purple)]/5 blur-[120px]" />
          <div className="relative z-10 mx-auto max-w-6xl text-center">
            <h1 className="hero-gradient mb-6 text-4xl font-black leading-tight tracking-tighter md:text-6xl">
              مساحة لطالب علم <span className="text-[var(--text-muted)]"> يحاول أن يفهم بعمق العالم الرقمي الجديد </span>
            </h1>
            <p className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-[var(--text-secondary)] md:text-lg">
              أوثق رحلتي في فهم الذكاء الاصطناعي وتعلم الآلة والنماذج اللغوية والشبكات العصبية والبرمجة وسلوك المستهلك والتحولات الرقمية.
            </p>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto max-w-6xl">
            {posts.length === 0 ? (
              <div className="flex flex-col items-center gap-4 py-20 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--bg-tertiary)] text-[var(--text-muted)]"><Clock size={32} /></div>
                <p className="text-lg font-bold text-[var(--text-secondary)]">لا توجد مقالات منشورة بعد</p>
                <a href="/" className="flex items-center gap-2 text-sm font-bold text-[var(--accent-purple)] hover:underline">العودة للرئيسية <ArrowLeft size={16} /></a>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <a key={post.slug} href={`/blog/${post.slug}`} className="glass-card group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-[var(--border-subtle)] transition-all duration-300 hover:border-[var(--accent-purple)]/40 md:min-h-[260px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative z-10 flex flex-1 flex-col p-6 md:p-8">
                      <div className="mb-4 flex items-center justify-between">
                        <span className="rounded-md border border-[var(--accent-purple)]/20 bg-[var(--accent-purple)]/10 px-2.5 py-1 text-[9px] font-black text-[var(--accent-purple)] md:text-[10px]">{post.category}</span>
                        <div className="flex items-center gap-1.5 text-[9px] font-medium text-[var(--text-muted)] md:text-[10px]">
                          <Calendar size={12} />
                          <time dateTime={post.date.toISOString()}>{new Intl.DateTimeFormat('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' }).format(post.date)}</time>
                        </div>
                      </div>
                      {post.image && (
                        <div className="mb-4 aspect-video overflow-hidden rounded-xl border border-[var(--border-subtle)]">
                          <img src={post.image.src} alt={post.image.alt || post.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                        </div>
                      )}
                      <h2 className="mb-3 text-lg font-black leading-snug text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent-purple)] md:text-xl">{post.title}</h2>
                      <p className="mb-6 line-clamp-3 text-xs font-medium leading-relaxed text-[var(--text-secondary)] md:text-sm">{post.description}</p>
                      <div className="mt-auto flex flex-col gap-4 border-t border-[var(--border-subtle)] pt-4 transition-colors group-hover:border-[var(--accent-purple)]/20">
                        {post.tags.length > 0 && <div className="flex flex-wrap gap-2">{post.tags.slice(0, 3).map((tag) => <span key={tag} className="rounded border border-[var(--border-subtle)] bg-[var(--bg-tertiary)] px-2 py-0.5 text-[9px] font-bold text-[var(--text-muted)] group-hover:text-[var(--accent-purple)]">#{tag}</span>)}</div>}
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1.5 text-[10px] font-bold text-[var(--text-muted)]"><Clock size={12} /> {post.readingTime || 5} دقائق</span>
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--bg-tertiary)] text-[var(--text-secondary)] transition-colors group-hover:bg-[var(--accent-purple)] group-hover:text-white"><ChevronLeft size={14} /></div>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <FooterReflect />
    </>
  );
}
