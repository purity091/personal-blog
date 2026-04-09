import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Network, Code, ChevronRight, ChevronLeft, CheckCircle2 } from 'lucide-react';

const MyBookSlider = () => {
  const [index, setIndex] = useState(0);
  const books = [
    {
      title: "مدخل إلى الذكاء الاصطناعي وتعلم الآلة",
      subtitle: "النماذج اللغوية الضخمة",
      desc: "دليل مبسط لفهم أسرار الذكاء الاصطناعي من الصفر إلى الاحتراف.",
      image: "/image/AI-ML-Full-cover.png",
      accent: "from-purple-900 to-black",
      icon: <Brain className="text-purple-400" />
    },
    {
      title: "عشرة مشاريع عملية عن الذكاء الاصطناعي",
      subtitle: "غوص عميق في المحولات",
      desc: "اكتشف كيف غيرت بنية الـ Attention وجه العالم البرمجي واللغوي.",
      image: "/image/10-Artificial-Intelligence-Projects-Cover.png",
      accent: "from-blue-900 to-black",
      icon: <Network className="text-blue-400" />
    },
  
  ];

  const next = () => setIndex((prev) => (prev + 1) % books.length);
  const prev = () => setIndex((prev) => (prev - 1 + books.length) % books.length);

  return (
    <section id="book" className="py-20 md:py-40 px-6 relative overflow-hidden bg-[var(--bg-primary)] transition-colors duration-300">
      <div className="max-w-6xl mx-auto mb-10 md:mb-16 flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
        <div className="text-center md:text-right">
          <span className="text-[var(--accent-purple)] font-bold text-[10px] md:text-xs tracking-widest uppercase mb-2 md:mb-4 block">المؤلفات التقنية</span>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] leading-tight">اقرأ المستقبل، <br className="md:hidden"/> صفحة بصفحة</h2>
        </div>
        <div className="flex gap-4">
          <button onClick={prev} className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[var(--border-medium)] flex items-center justify-center hover:bg-[var(--glass-bg-hover)] transition-all text-[var(--text-primary)] shadow-sm">
            <ChevronRight size={18} />
          </button>
          <button onClick={next} className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[var(--border-medium)] flex items-center justify-center hover:bg-[var(--glass-bg-hover)] transition-all text-[var(--text-primary)] shadow-sm">
            <ChevronLeft size={18} />
          </button>
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto overflow-hidden">
        <motion.div
          animate={{ x: `-${index * (typeof window !== 'undefined' && window.innerWidth < 768 ? 85 : 50)}%` }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="flex gap-4 md:gap-6 w-max"
        >
          {books.map((book, i) => (
            <motion.div
              key={i}
              className="w-[80vw] md:w-[45%] lg:w-[320px] glass-card rounded-3xl md:rounded-[2.5rem] p-6 md:p-8 flex flex-col items-center gap-6 group"
            >
              <div className="relative perspective-1000 shrink-0">
                <motion.div
                  whileHover={{ rotateY: -15, rotateX: 5 }}
                  className={`w-32 md:w-48 aspect-[3/4] rounded-r-lg shadow-2xl border-y border-r border-white/10 relative overflow-hidden flex flex-col justify-between`}
                >
                  {/* Book Image */}
                  <img 
                    src={book.image} 
                    alt={book.title} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
                  <div className="absolute left-0 top-0 bottom-0 w-2 md:w-3 bg-black/40" />
                </motion.div>
              </div>

              <div className="text-center">
                <h3 className="text-base md:text-lg font-bold mb-2 text-[var(--text-primary)] min-h-[3rem] flex items-center justify-center">{book.title}</h3>
                <p className="text-[var(--text-secondary)] text-[10px] md:text-xs leading-relaxed mb-4 line-clamp-2">{book.desc}</p>
                <div className="space-y-1 mb-6">
                  <div className="flex items-center justify-center gap-2 text-[9px] md:text-[10px] text-[var(--text-muted)]">
                    <CheckCircle2 size={10} className="text-[var(--accent-purple)]" /> أفضل الممارسات العملية
                  </div>
                  <div className="flex items-center justify-center gap-2 text-[9px] md:text-[10px] text-[var(--text-muted)]">
                    <CheckCircle2 size={10} className="text-[var(--accent-purple)]" /> أمثلة برمجية حية
                  </div>
                </div>
                <button className="w-full bg-[var(--text-primary)] text-[var(--bg-primary)] px-4 py-2 rounded-full text-[9px] md:text-[10px] font-bold hover:bg-[var(--accent-purple)] hover:text-white transition-all shadow-md">
                  اكتشف المزيد
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MyBookSlider;
