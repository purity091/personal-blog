import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { ChevronRight, ChevronLeft, CheckCircle2 } from 'lucide-react';

const MyBookSlider = () => {
  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  const books = [
    {
      title: "عقل الآلة: رحلة في أعماق الذكاء الاصطناعي",
      subtitle: "دليلك الشامل من الصفر إلى الاحتراف",
      description: "هذا ليس مجرد كتاب تقني، بل هو خريطة طريق لفهم كيف تفكر الآلات وكيف يمكنك توظيفها لبناء مستقبلك. أشارك فيه خبرتي العملية بأسلوب مبسط وعميق في آن واحد.",
      tags: ["أساسيات", "متقدم", "تطبيقات عملية"],
      features: ["شروحات مرئية مبتكرة", "أمثلة حقيقية من السوق", "تحديثات مستمرة أونلاين"],
      color: "from-purple-600 to-blue-600",
      image: "/image/AI-ML-Full-cover.png"
    },
    {
      title: "سيمياء البيانات: استخراج الذهب من الأرقام",
      subtitle: "فن وعلم تحليل البيانات في العصر الرقمي",
      description: "تعلم كيف تحول البيانات الخام إلى قرارات ذكية. نستعرض في هذا الجزء كيفية قراءة الأنماط الخفية وبناء نماذج تنبؤية دقيقة.",
      tags: ["Data Science", "Analytics", "Big Data"],
      features: ["دراسات حالة واقعية", "أدوات التحليل الحديثة", "منهجية علمية مبسطة"],
      color: "from-emerald-600 to-teal-600",
      image: "/image/10-Artificial-Intelligence-Projects-Cover.png"
    }
  ];

  // Calculate slide width based on container
  const getSlideWidth = useCallback(() => {
    if (!containerRef.current) return 300;
    const containerWidth = containerRef.current.offsetWidth;
    const gap = window.innerWidth < 768 ? 16 : 24;
    // On mobile: show 1 card (full width minus padding)
    // On desktop: show cards at fixed width
    return window.innerWidth < 768 ? containerWidth : Math.min(320, containerWidth / 2 - gap);
  }, []);

  const goTo = (newIndex: number) => {
    const clampedIndex = Math.max(0, Math.min(newIndex, books.length - 1));
    setIndex(clampedIndex);
    const slideWidth = getSlideWidth();
    const gap = window.innerWidth < 768 ? 16 : 24;
    animate(x, -(clampedIndex * (slideWidth + gap)), {
      type: 'spring',
      stiffness: 300,
      damping: 30,
    });
  };

  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  // Handle drag end
  const handleDragEnd = (_: any, info: { offset: { x: number }; velocity: { x: number } }) => {
    setIsDragging(false);
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      next();
    } else if (info.offset.x > swipeThreshold) {
      prev();
    } else {
      goTo(index); // snap back
    }
  };

  // Recalculate on resize
  useEffect(() => {
    const handleResize = () => goTo(index);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [index]);

  // Initialize position
  useEffect(() => {
    // Delay to avoid hydration mismatch
    const timer = setTimeout(() => goTo(0), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="book" className="py-16 md:py-32 px-4 md:px-6 relative overflow-hidden bg-[var(--bg-primary)] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-4 mb-8 md:mb-12">
          <div className="text-center md:text-right">
            <span className="text-[var(--accent-purple)] font-bold text-[10px] md:text-xs tracking-widest uppercase mb-2 md:mb-4 block">المؤلفات التقنية</span>
            <h2 className="text-2xl md:text-5xl font-bold text-[var(--text-primary)] leading-tight">اقرأ المستقبل، <br className="md:hidden" /> صفحة بصفحة</h2>
          </div>

          {/* Navigation Arrows — hidden on mobile (swipe instead) */}
          <div className="hidden md:flex gap-3">
            <button
              onClick={prev}
              disabled={index === 0}
              className="w-11 h-11 rounded-full border border-[var(--border-medium)] flex items-center justify-center hover:bg-[var(--glass-bg-hover)] transition-all text-[var(--text-primary)] shadow-sm disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="الكتاب السابق"
            >
              <ChevronRight size={18} />
            </button>
            <button
              onClick={next}
              disabled={index === books.length - 1}
              className="w-11 h-11 rounded-full border border-[var(--border-medium)] flex items-center justify-center hover:bg-[var(--glass-bg-hover)] transition-all text-[var(--text-primary)] shadow-sm disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="الكتاب التالي"
            >
              <ChevronLeft size={18} />
            </button>
          </div>
        </div>

        {/* Slider Container */}
        <div ref={containerRef} className="relative overflow-hidden md:overflow-visible">
          <motion.div
            style={{ x }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
            className="flex gap-4 md:gap-6 cursor-grab active:cursor-grabbing"
          >
            {books.map((book, i) => {
              const slideWidth = getSlideWidth();
              return (
                <motion.div
                  key={i}
                  style={{ width: slideWidth, flexShrink: 0 }}
                  className={`glass-card rounded-2xl md:rounded-[2.5rem] p-5 md:p-8 flex flex-col items-center gap-4 md:gap-6 ${isDragging ? 'pointer-events-none' : ''
                    }`}
                >
                  {/* Book Cover */}
                  <div className="relative perspective-1000 shrink-0 w-28 md:w-48">
                    <div className="aspect-[3/4] rounded-r-lg shadow-2xl border-y border-r border-white/10 relative overflow-hidden">
                      <img
                        src={book.image}
                        alt={book.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute left-0 top-0 bottom-0 w-2 md:w-3 bg-black/40" />
                    </div>
                  </div>

                  {/* Book Info */}
                  <div className="text-center w-full">
                    <h3 className="text-sm md:text-lg font-bold mb-2 text-[var(--text-primary)] leading-snug">
                      {book.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] text-[10px] md:text-xs leading-relaxed mb-4 line-clamp-2">
                      {book.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-1.5 mb-5">
                      {book.features.map((feature, fi) => (
                        <div key={fi} className="flex items-center justify-center gap-1.5 text-[9px] md:text-[10px] text-[var(--text-muted)]">
                          <CheckCircle2 size={10} className="text-[var(--accent-purple)] shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <a
                      href="/#social"
                      className="inline-block w-full bg-[var(--text-primary)] text-[var(--bg-primary)] px-4 py-2.5 rounded-full text-[10px] md:text-xs font-bold hover:bg-[var(--accent-purple)] hover:text-white transition-all shadow-md text-center"
                    >
                      اكتشف المزيد
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Dot Indicators — visible on mobile */}
        <div className="flex items-center justify-center gap-2 mt-6 md:mt-8">
          {books.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${i === index
                ? 'w-6 h-2 bg-[var(--accent-purple)]'
                : 'w-2 h-2 bg-[var(--text-muted)]/30 hover:bg-[var(--text-muted)]/50'
                }`}
              aria-label={`الانتقال للكتاب ${i + 1}`}
            />
          ))}
        </div>

        {/* Mobile swipe hint */}
        <p className="text-center text-[var(--text-muted)] text-[9px] md:hidden mt-3">
          ← اسحب للتصفح →
        </p>
      </div>
    </section>
  );
};

export default MyBookSlider;
