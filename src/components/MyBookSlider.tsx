"use client";

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, ArrowLeft } from 'lucide-react';
import { books } from '../data/books';

const MyBookSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const width = scrollRef.current.offsetWidth;
    const newIndex = Math.round(Math.abs(scrollLeft) / width);
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  const scrollTo = (index: number) => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.offsetWidth;
    const isRTL = typeof document !== 'undefined' && (document.dir === 'rtl' || window.getComputedStyle(scrollRef.current).direction === 'rtl');
    const scrollAmount = isRTL ? -(index * width) : index * width;

    scrollRef.current.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll, { passive: true });
      return () => el.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section id="book" className="relative py-24 md:py-32 bg-[var(--bg-primary)] overflow-hidden text-right" dir="rtl">

      {/* Dynamic Background System */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] start-[-10%] w-[40%] h-[40%] bg-[var(--accent-purple)]/5 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] end-[-10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px]"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">

        {/* Cinematic Header */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--text-primary)] leading-[1.1] tracking-tighter">
              المكتبة <span className="text-[var(--accent-purple)]">الذكية</span>
            </h2>
            <p className="text-base md:text-lg text-[var(--text-secondary)] font-medium max-w-xl">منشوراتي من الكتب التي تجمع بين الخبرة النظرية والعملية في الذكاء الاصطناعي</p>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-8 me-8">
              <div className="flex flex-col items-end">
                <span className="text-[9px] font-black text-[var(--text-muted)] uppercase tracking-widest mb-1">المرحلة الحالية</span>
                <span className="text-xl font-black text-[var(--text-primary)]">{activeIndex + 1} / {books.length}</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => scrollTo(activeIndex - 1)}
                disabled={activeIndex === 0}
                className="group p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-[var(--accent-purple)] hover:border-[var(--accent-purple)] transition-all disabled:opacity-20 disabled:cursor-not-allowed"
              >
                <ChevronRight size={24} className="text-white" />
              </button>
              <button
                onClick={() => scrollTo(activeIndex + 1)}
                disabled={activeIndex === books.length - 1}
                className="group p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-[var(--accent-purple)] hover:border-[var(--accent-purple)] transition-all disabled:opacity-20 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={24} className="text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* The Carousel Engine */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar gap-5 md:gap-8 pb-16"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {books.map((book, i) => (
            <motion.div
              key={book.slug}
              className="flex-shrink-0 w-[88%] md:w-[70%] lg:w-[60%] snap-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
            >
              <div className="relative group p-6 md:p-10 rounded-[3.5rem] bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-1000 h-full overflow-hidden">
                {/* Internal Ambient Glow */}
                <div className="absolute -top-24 -start-24 w-64 h-64 bg-[var(--accent-purple)]/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>

                <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-center gap-10 md:gap-16 h-full">

                  {/* Premium 3D Book Visualization with Floating Animation */}
                  <div className="relative shrink-0 perspective-2000">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="relative w-40 md:w-60 aspect-[3/4.2] transition-all duration-1000 transform group-hover:rotate-y-[-22deg] group-hover:rotate-x-[6deg] group-hover:scale-[1.03]"
                    >
                      <img
                        src={book.image}
                        alt={book.title}
                        className="w-full h-full object-cover rounded-xl shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] border border-white/10"
                      />
                      {/* Logical Start Spine Effect */}
                      <div className="absolute inset-y-0 start-0 w-5 bg-gradient-to-l from-black/60 to-transparent backdrop-blur-[1px] rounded-s-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute inset-y-0 end-0 w-1 bg-white/10 rounded-e-2xl"></div>
                    </motion.div>
                  </div>

                  {/* Content & Intelligence Section */}
                  <div className="flex-1 flex flex-col justify-center text-right py-4">
                    <div className="space-y-4 md:space-y-6">
                      <div className="flex items-center gap-4">
                        <span className="text-[9px] md:text-[10px] font-black text-[var(--accent-purple)] uppercase tracking-[0.3em]">{book.eyebrow}</span>
                        <div className="h-px flex-1 bg-gradient-to-l from-[var(--accent-purple)]/30 to-transparent"></div>
                      </div>

                      <h3 className="text-2xl md:text-4xl font-black text-[var(--text-primary)] leading-tight tracking-tight group-hover:text-[var(--accent-purple)] transition-colors duration-700">
                        {book.title}
                      </h3>

                      <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed opacity-80 group-hover:opacity-100 transition-all duration-700 line-clamp-3 md:line-clamp-4">
                        {book.description}
                      </p>

                      <div className="flex flex-wrap gap-3 pt-4">
                        {book.format.map((stat, s) => (
                          <div key={s} className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 backdrop-blur-md flex items-center gap-2">
                            <span className="text-[8px] font-black text-[var(--accent-purple)] uppercase tracking-widest">{stat.label}</span>
                            <span className="text-sm font-black text-white">{stat.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 flex items-center justify-end">
                      <a
                        href={`/books/${book.slug}`}
                        className="group/btn relative inline-flex items-center justify-center gap-3 py-4 px-10 rounded-[1.5rem] bg-white text-black text-lg font-black overflow-hidden transition-all hover:scale-105 active:scale-95"
                      >
                        <span className="relative z-10">تصفح الكتاب</span>
                        <ArrowLeft size={20} className="relative z-10 transition-transform group-hover/btn:-translate-x-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Futuristic Scroll Progress */}
        <div className="mt-12 flex flex-col items-center gap-6">
          <div className="flex gap-2">
            {books.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`h-1.5 transition-all duration-700 rounded-full ${i === activeIndex
                    ? 'w-12 bg-[var(--accent-purple)] shadow-[0_0_15px_rgba(168,85,247,0.5)]'
                    : 'w-4 bg-white/10 hover:bg-white/30'
                  }`}
              />
            ))}
          </div>
          <a href="/books" className="group flex items-center gap-3 text-lg font-black text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all">
            استكشف المكتبة الكاملة
            <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-2" />
          </a>
        </div>

      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .perspective-2000 {
          perspective: 2000px;
        }
      `}</style>
    </section>
  );
};

export default MyBookSlider;
