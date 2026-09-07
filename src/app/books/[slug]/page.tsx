import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { books, getBookBySlug } from '../../../data/books';
import Navbar from '../../../components/Navbar';
import FooterReflect from '../../../components/FooterReflect';

export function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  return book ? { title: book.title, description: book.description, openGraph: { images: [book.image] } } : {};
}

export default async function BookPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) notFound();
  const otherBooks = books.filter((item) => item.slug !== book.slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen overflow-hidden bg-[var(--bg-primary)] pt-24 text-right" dir="rtl">
        <div className="pointer-events-none fixed inset-0 z-0"><div className="animate-blob absolute -left-[10%] -top-[10%] h-1/2 w-1/2 bg-[var(--accent-purple)]/10 blur-[150px]" /><div className="animate-blob animation-delay-2000 absolute -bottom-[10%] -right-[10%] h-1/2 w-1/2 bg-blue-500/10 blur-[150px]" /><div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.07]" /></div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
          <section className="flex flex-col items-center gap-10 py-8 lg:flex-row lg:items-center lg:gap-16 lg:py-14">
            <div className="order-2 flex-1 space-y-8 text-right lg:order-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 backdrop-blur-md"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--accent-purple)]" /><span className="text-[9px] font-black uppercase tracking-widest text-[var(--text-secondary)]">{book.eyebrow}</span></div>
              <h1 className="text-3xl font-black leading-[1.1] tracking-tighter text-[var(--text-primary)] md:text-5xl lg:text-6xl">{book.title}</h1>
              <div className="relative border-s border-[var(--accent-purple)]/30 ps-6"><p className="mb-2 text-lg font-black text-[var(--text-primary)] md:text-2xl">بين يديك</p><p className="text-base font-medium leading-relaxed text-[var(--text-secondary)] opacity-90 md:text-lg">{book.heroNote}</p></div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">{book.format.map((item) => <div key={item.label} className="group rounded-2xl border border-white/10 border-b-2 border-b-transparent bg-white/5 p-4 text-center backdrop-blur-xl transition-all hover:border-b-[var(--accent-purple)] hover:bg-white/10"><span className="mb-1 block text-[8px] font-black uppercase tracking-[0.2em] text-[var(--accent-purple)]">{item.label}</span><span className="text-base font-black text-[var(--text-primary)]">{item.value}</span></div>)}</div>
              <div className="flex flex-col gap-3 sm:flex-row"><a href={`/image/${book.slug}.pdf`} className="btn-primary py-3.5 px-10 text-lg">حمّل نسختك الآن</a><a href="#roadmap" className="btn-secondary py-3.5 px-10 text-lg">تصفح المحتويات</a></div>
            </div>
            <div className="order-1 flex flex-1 justify-center lg:order-2 lg:justify-end"><div className="group relative"><div className="relative z-10 w-48 transition-all duration-1000 group-hover:scale-105 md:w-[320px]"><img src={book.image} alt={book.title} className="h-full w-full rounded-[1.5rem] border border-white/10 object-cover shadow-[0_40px_80px_-15px_rgba(0,0,0,0.8)]" /><div className="absolute inset-y-0 start-0 w-4 rounded-s-[1.5rem] bg-gradient-to-l from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" /><div className="absolute inset-y-0 end-0 w-1 rounded-e-[1.5rem] bg-white/10" /></div><div className="absolute -inset-10 z-0 rounded-full bg-[var(--accent-purple)]/20 blur-[80px] opacity-30 transition-all duration-1000 group-hover:opacity-60" /></div></div>
          </section>

          <section id="roadmap" className="border-t border-white/5 py-16"><div className="grid gap-10 lg:grid-cols-3 lg:gap-14"><div className="space-y-8 lg:col-span-2"><div className="flex items-center gap-4"><h2 className="whitespace-nowrap text-2xl font-black tracking-tight md:text-4xl">محاور الكتاب</h2><div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent" /></div><div className="relative grid gap-4 md:grid-cols-2">{book.chapters.map((chapter, index) => <div key={chapter.title} className="group relative overflow-hidden rounded-[2rem] border border-white/5 bg-white/5 p-6 transition-all duration-500 hover:border-white/10 hover:bg-white/[0.08]"><div className="absolute right-0 top-0 p-4 text-6xl font-black opacity-5 transition-opacity group-hover:opacity-10">{index + 1}</div><div className="relative z-10"><span className="mb-2 inline-block rounded-md bg-[var(--accent-purple)]/20 px-2 py-0.5 text-[10px] font-black uppercase text-[var(--accent-purple)]">الفصل {index + 1}</span><h4 className="mb-2 text-lg font-black transition-colors group-hover:text-[var(--accent-purple)] md:text-xl">{chapter.title}</h4><p className="line-clamp-3 text-sm leading-relaxed text-[var(--text-muted)] transition-colors group-hover:text-[var(--text-secondary)] md:text-base">{chapter.summary}</p></div></div>)}</div></div>
            <div className="space-y-8"><div className="sticky top-24 space-y-8"><div className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-7 backdrop-blur-3xl md:p-8"><div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-purple)]/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" /><h2 className="relative z-10 mb-6 text-2xl font-black">القيمة العلمية</h2><div className="relative z-10 space-y-6"><div><h3 className="mb-3 text-[9px] font-black uppercase tracking-[0.3em] text-[var(--accent-purple)]">من المستفيد؟</h3><div className="space-y-2.5">{book.audience.map((item) => <div key={item} className="flex items-center gap-2.5 text-sm font-medium text-[var(--text-secondary)] md:text-base"><div className="h-1 w-1 rounded-full bg-[var(--accent-purple)]" /><span>{item}</span></div>)}</div></div><div className="border-t border-white/5 pt-6"><h3 className="mb-3 text-[9px] font-black uppercase tracking-[0.3em] text-[var(--accent-purple)]">مخرجات التعلم</h3><div className="space-y-3">{book.outcomes.map((outcome) => <div key={outcome} className="group flex items-start gap-3 text-sm"><div className="mt-1 rounded-full bg-emerald-500/20 p-0.5 text-emerald-500"><svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg></div><span className="text-[var(--text-secondary)] transition-colors group-hover:text-[var(--text-primary)]">{outcome}</span></div>)}</div></div></div></div></div></div>
          </div></section>

          <section className="mt-10 border-t border-white/5 py-16"><div className="mb-10 flex items-center justify-between"><div className="flex items-center gap-3"><div className="h-4 w-1 rounded-full bg-[var(--accent-purple)]" /><h2 className="text-xl font-black">إصدارات أخرى قد تهمك</h2></div><a href="/books" className="flex items-center gap-1 text-xs font-black text-[var(--accent-purple)] hover:underline">مشاهدة الكل<svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg></a></div><div className="grid grid-cols-1 gap-6 md:grid-cols-3">{otherBooks.map((item) => <a key={item.slug} href={`/books/${item.slug}`} className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition-all duration-300 hover:border-[var(--accent-purple)]/20 hover:bg-white/[0.04]"><div className="relative flex h-20 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/5 bg-[var(--bg-secondary)]"><img src={item.image} alt={item.title} className="w-10 rounded shadow-lg transition-transform duration-500 group-hover:scale-110" /></div><div className="min-w-0 flex-1"><h3 className="mb-1 line-clamp-1 text-sm font-black transition-colors group-hover:text-[var(--accent-purple)]">{item.title}</h3><p className="line-clamp-2 text-[10px] leading-relaxed text-[var(--text-muted)]">{item.description}</p></div></a>)}</div></section>
        </div>
      </main>
      <FooterReflect />
    </>
  );
}
