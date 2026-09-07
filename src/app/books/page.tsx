import type { Metadata } from 'next';
import { books } from '../../data/books';
import Navbar from '../../components/Navbar';
import FooterReflect from '../../components/FooterReflect';

export const metadata: Metadata = {
  title: 'المكتبة التقنية',
  description: 'استكشف مؤلفات محمد لحلح في الذكاء الاصطناعي، تعلم الآلة، والتقنيات الحديثة.',
};

export default function BooksPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen bg-[var(--bg-primary)] pb-20 pt-28">
        <div className="pointer-events-none fixed inset-0 z-0"><div className="absolute left-0 top-0 h-[30vh] w-full bg-gradient-to-b from-[var(--bg-secondary)] to-transparent opacity-50" /><div className="absolute right-1/4 top-1/4 h-[20rem] w-[20rem] bg-[var(--accent-purple)]/5 blur-[100px]" /></div>
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <header className="mb-20 max-w-3xl text-right">
            <div className="mb-6 flex items-center gap-3"><div className="h-6 w-1.5 rounded-full bg-[var(--accent-purple)]" /><span className="text-xs font-black uppercase tracking-widest text-[var(--accent-purple)]">Digital Archive</span></div>
            <h1 className="mb-6 text-4xl font-black leading-tight tracking-tighter text-[var(--text-primary)] md:text-5xl lg:text-6xl">المكتبة التقنية</h1>
            <p className="max-w-xl text-base leading-relaxed text-[var(--text-secondary)] opacity-80 md:text-lg">مجموعة مختارة من الإصدارات التي تلخص رحلتي في تبسيط مفاهيم الذكاء الاصطناعي وهندسة البرمجيات للعقل العربي.</p>
          </header>

          <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {books.map((book) => (
              <article key={book.slug} className="group relative">
                <a href={`/books/${book.slug}`} className="block h-full">
                  <div className="group/card relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-500 hover:border-[var(--accent-purple)]/30 hover:bg-white/[0.04]">
                    <div className="relative mb-8 flex aspect-[3/4] items-center justify-center overflow-hidden rounded-2xl border border-white/5 bg-[var(--bg-secondary)] transition-all group-hover/card:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]">
                      <div className="relative w-32 transition-all duration-700 group-hover/card:scale-105 group-hover/card:-rotate-3 md:w-40"><img src={book.image} alt={book.title} className="rounded-md shadow-[0_15px_30px_rgba(0,0,0,0.4)]" /><div className="absolute -inset-4 -z-10 rounded-full bg-[var(--accent-purple)]/20 blur-2xl opacity-0 transition-opacity group-hover/card:opacity-100" /></div>
                      <div className="absolute left-4 top-4 rounded-lg border border-white/10 bg-black/60 px-2.5 py-1 text-[8px] font-black uppercase tracking-widest text-white backdrop-blur-md">{book.format[2].value}</div>
                    </div>
                    <div className="flex flex-1 flex-col text-right">
                      <div className="mb-3 flex items-center justify-end gap-2"><span className="text-[9px] font-black uppercase tracking-widest text-[var(--text-muted)]">{book.eyebrow}</span><div className="h-1 w-1 rounded-full bg-[var(--accent-purple)]" /></div>
                      <h2 className="mb-3 text-xl font-black text-[var(--text-primary)] transition-colors group-hover/card:text-[var(--accent-purple)] md:text-2xl">{book.title}</h2>
                      <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-[var(--text-secondary)] opacity-70">{book.description}</p>
                      <div className="mt-auto flex items-center justify-end gap-2 border-t border-white/5 pt-4 text-xs font-bold text-[var(--text-primary)] transition-all group-hover/card:gap-4"><span>استكشف المحتوى</span><svg className="h-4 w-4 transition-transform group-hover/card:translate-x-[-2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg></div>
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </section>

          <footer className="mt-40 border-t border-white/5 py-20 text-center"><h2 className="mb-6 text-3xl font-black md:text-4xl">هل تبحث عن تعاون تقني؟</h2><p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-[var(--text-secondary)] opacity-80">أنا متاح دائماً لنقاش المشاريع البرمجية واستشارات الذكاء الاصطناعي.</p><a href="/#social" className="inline-flex items-center justify-center rounded-xl bg-white px-10 py-4 text-base font-black text-black transition-all hover:scale-105 active:scale-95">تواصل معي الآن</a></footer>
        </div>
      </main>
      <FooterReflect />
    </>
  );
}
