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
    const isRTL = document.dir === 'rtl' || window.getComputedStyle(scrollRef.current).direction === 'rtl';
    const scrollAmount = isRTL ? -(index * width) : index * width;
    
    scrollRef.current.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll);
      return () => el.removeEventListener('scroll', handleScroll);
    }
  }, [activeIndex]);

  return (
    <section id="book" className="py-24 md:py-48 px-4 md:px-8 relative bg-[var(--bg-primary)] overflow-hidden text-right" dir="rtl">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-64 h-64 bg-[var(--accent-purple)]/10 blur-[100px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[10%] left-[10%] w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16 md:mb-24 px-4">
          <div className="text-right">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 rounded-full bg-[var(--accent-purple)]/10 text-[var(--accent-purple)] text-[10px] font-black uppercase tracking-[0.3em] mb-4 border border-[var(--accent-purple)]/20"
            >
              The AI Collection
            </motion.span>
            <h2 className="text-4xl md:text-7xl font-black text-[var(--text-primary)] leading-tight tracking-tighter">
              انطلق نحو <span className="text-[var(--accent-purple)]">المستقبل</span>
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <a href="/books" className="hidden md:flex items-center gap-3 text-lg font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all group">
              المكتبة الشاملة
              <ArrowLeft size={20} className="transition-transform group-hover:translate-x-[-6px]" />
            </a>
            <div className="flex gap-4">
              <button 
                onClick={() => scrollTo(activeIndex - 1)} 
                disabled={activeIndex === 0}
                className="nav-btn"
              >
                <ChevronRight size={24} />
              </button>
              <button 
                onClick={() => scrollTo(activeIndex + 1)} 
                disabled={activeIndex === books.length - 1}
                className="nav-btn"
              >
                <ChevronLeft size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Native Scroll-Snap Container (Smooth on Mobile) */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {books.map((book, i) => (
            <div
              key={book.slug}
              className="flex-shrink-0 w-full md:w-[60%] lg:w-[45%] snap-center px-4 md:px-6 group"
            >
              <a 
                href={`/books/${book.slug}`}
                className="block relative p-8 md:p-12 rounded-[3.5rem] bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-700 hover:bg-white/10 hover:border-[var(--accent-purple)]/40 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]"
              >
                <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
                  {/* Premium 3D Cover */}
                  <div className="relative shrink-0 perspective-1000">
                    <div className="relative w-40 md:w-56 aspect-[3/4.2] transition-transform duration-1000 transform group-hover:rotate-y-[-18deg] group-hover:rotate-x-[5deg] group-hover:scale-105">
                      <img
                        src={book.image}
                        alt={book.title}
                        className="w-full h-full object-cover rounded-xl shadow-2xl border border-white/10"
                      />
                      {/* Book spine effect */}
                      <div className="absolute left-0 top-0 bottom-0 w-4 bg-black/40 backdrop-blur-sm rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    {/* Glow */}
                    <div className="absolute -inset-10 bg-[var(--accent-purple)]/20 blur-[80px] rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                  </div>

                  {/* Content */}
                  <div className="text-right flex-1">
                    <div className="flex items-center justify-end gap-3 mb-6">
                      <span className="text-xs font-black uppercase tracking-widest text-[var(--accent-purple)]">{book.eyebrow}</span>
                      <div className="h-1.5 w-1.5 rounded-full bg-[var(--accent-purple)] shadow-[0_0_8px_rgba(168,85,247,0.5)]"></div>
                    </div>
                    
                    <h3 className="text-2xl md:text-4xl font-black text-[var(--text-primary)] mb-6 leading-tight group-hover:text-[var(--accent-purple)] transition-colors">
                      {book.title}
                    </h3>
                    
                    <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed line-clamp-3 mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
                      {book.description}
                    </p>

                    <div className="flex items-center justify-end gap-3 text-[var(--text-primary)] font-black text-lg group/link">
                      <span className="border-b-2 border-transparent group-hover/link:border-[var(--accent-purple)] transition-all">تصفح الكتاب</span>
                      <ArrowLeft size={24} className="transition-transform group-hover/link:translate-x-[-6px]" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-4 mt-12 md:mt-20">
          {books.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`h-2 transition-all duration-700 rounded-full ${
                i === activeIndex 
                ? 'w-16 bg-[var(--accent-purple)]' 
                : 'w-2 bg-[var(--border-medium)] hover:bg-[var(--text-muted)]'
              }`}
            />
          ))}
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .nav-btn {
          width: 60px;
          height: 60px;
          border-radius: 20px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-medium);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-primary);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
        }
        .nav-btn:hover:not(:disabled) {
          border-color: var(--accent-purple);
          background: var(--accent-purple);
          color: white;
          transform: translateY(-4px);
          box-shadow: 0 15px 30px -10px rgba(168,85,247,0.4);
        }
        .nav-btn:disabled {
          opacity: 0.15;
          cursor: not-allowed;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default MyBookSlider;
