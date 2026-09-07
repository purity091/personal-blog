import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import Navbar from './Navbar';
import FooterReflect from './FooterReflect';
import type { BlogPost } from '../lib/content';

export default function BlogPostLayout({ post }: { post: BlogPost }) {
  const shareUrl = `https://lahlah.ai/blog/${post.slug}`;
  const formattedDate = new Intl.DateTimeFormat('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' }).format(post.date);

  return (
    <>
      <Navbar />
      <article className="min-h-screen bg-[var(--bg-primary)] transition-colors duration-300">
        <header className="relative overflow-hidden border-b border-[var(--border-subtle)]">
          <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
            <a href="/blog" className="mb-8 inline-flex items-center gap-2 text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-purple)]" aria-label="العودة إلى قائمة المقالات">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
              العودة إلى المقالات
            </a>
            <div className="mb-6"><span className="rounded-full bg-[var(--accent-purple)]/10 px-3 py-1 text-xs font-black text-[var(--accent-purple)]">{post.category}</span></div>
            <h1 className="hero-gradient mb-6 text-3xl font-black leading-[1.1] tracking-tighter md:text-5xl lg:text-6xl">{post.title}</h1>
            <p className="mb-8 max-w-3xl text-lg font-medium leading-relaxed text-[var(--text-secondary)] md:text-xl">{post.description}</p>
            <div className="flex flex-wrap items-center gap-6 text-sm text-[var(--text-muted)]">
              <div className="flex items-center gap-2"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-xs font-bold text-white">م</div><span className="font-bold text-[var(--text-secondary)]">محمد لحلح</span></div>
              <time dateTime={post.date.toISOString()}>{formattedDate}</time>
              {post.readingTime && <div className="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg><span>{post.readingTime} دقيقة قراءة</span></div>}
            </div>
            {post.tags.length > 0 && <div className="mt-6 flex flex-wrap gap-2">{post.tags.map((tag) => <span key={tag} className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-tertiary)] px-3 py-1 text-xs font-bold text-[var(--text-muted)]">#{tag}</span>)}</div>}
          </div>
          {post.image && <div className="mx-auto max-w-4xl px-6 pb-12"><img src={post.image.src} alt={post.image.alt} className="w-full rounded-2xl shadow-2xl" loading="lazy" /></div>}
        </header>

        <div className="mx-auto max-w-4xl px-6 py-16">
          <div className="prose prose-lg max-w-none" dir="rtl">
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{post.body}</ReactMarkdown>
          </div>
        </div>

        <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
          <div className="mx-auto max-w-4xl px-6 py-12 text-center">
            <h3 className="mb-4 text-2xl font-bold text-[var(--text-primary)]">شارك المقال</h3>
            <div className="flex justify-center gap-4">
              <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-tertiary)] text-[var(--text-secondary)] transition-all hover:bg-blue-400 hover:text-white" aria-label="شارك على تويتر">𝕏</a>
              <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-tertiary)] text-[var(--text-secondary)] transition-all hover:bg-blue-600 hover:text-white" aria-label="شارك على لينكدإن">in</a>
            </div>
          </div>
        </footer>
      </article>
      <FooterReflect />
    </>
  );
}
