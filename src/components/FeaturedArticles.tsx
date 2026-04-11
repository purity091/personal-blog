import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpLeft, Calendar, Clock, BookOpen, ChevronLeft } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: "شرح آلية 'الانتباه' (Attention) في محولات ChatGPT المشهورة",
    excerpt: "كيف تفهم النماذج اللغوية الضخمة السياق؟ رحلة تفصيلية ومقارنة مرئية لآلية Self-Attention.",
    category: "النماذج التوليدية",
    date: "12 أبريل، 2026",
    readingTime: "8 دقائق",
    gradient: "from-purple-500/10 to-blue-500/10",
    tags: ["#ChatGPT", "#Transformers", "#NLP"],
  },
  {
    id: 2,
    title: "المرشد الشامل لبناء وتدريب شبكة عصبية من الصفر (بدون مكتبات)",
    excerpt: "بعيداً عن Keras و PyTorch، كيف تبني الطبقات والعصبونات باستخدام لغة بايثون والرياضيات الخالصة؟",
    category: "تعلم عميق",
    date: "5 أبريل، 2026",
    readingTime: "15 دقيقة",
    gradient: "from-blue-500/10 to-teal-500/10",
    tags: ["#Python", "#Math", "#DeepLearning"],
  },
  {
    id: 3,
    title: "لماذا تفشل خوارزميات تعلم الآلة أحياناً في العالم الحقيقي؟",
    excerpt: "نفكك أسباب انحياز البيانات (Data Bias) والـ Overfitting، مع أمثلة حية من أنظمة الذكاء الاصطناعي الحالية.",
    category: "هندسة البيانات",
    date: "28 مارس، 2026",
    readingTime: "5 دقائق",
    gradient: "from-fuchsia-500/10 to-purple-500/10",
    tags: ["#MachineLearning", "#DataBias", "#AI"],
  }
];

const FeaturedArticles = () => {
  return (
    <section className="py-12 md:py-20 px-6 relative bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] transition-colors duration-500">
      {/* Background glow */}
      <div className="absolute top-0 start-1/4 w-[300px] h-[300px] bg-[var(--accent-purple)]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Compact Layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="text-start">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-purple)]/10 border border-[var(--accent-purple)]/20 text-[var(--accent-purple)] text-[10px] font-bold tracking-widest uppercase mb-4 shadow-sm">
              <BookOpen size={12} /> أحدث التدوينات
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-[var(--text-primary)] tracking-tight">
              مقالات وشروحات <span className="text-[var(--text-muted)]">مكتوبة.</span>
            </h2>
          </div>
          
          <button className="group flex items-center justify-center gap-2 text-sm font-bold text-[var(--text-primary)] bg-[var(--bg-tertiary)] border border-[var(--border-medium)] px-6 py-2.5 rounded-full hover:bg-[var(--accent-purple)] hover:text-white hover:border-[var(--accent-purple)] transition-all shadow-sm w-fit shrink-0">
            تصفح كل المقالات
            <ArrowUpLeft size={16} className="group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Articles Grid (Compact 3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {articles.map((article, i) => (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              key={article.id}
              className="glass-card flex flex-col group cursor-pointer border-[var(--border-subtle)] hover:border-[var(--accent-purple)]/40 overflow-hidden relative rounded-2xl md:min-h-[260px]"
            >
              {/* Subtle Gradient background matching category */}
              <div className={`absolute inset-0 bg-gradient-to-br ${article.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="p-6 md:p-8 flex flex-col flex-1 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-md bg-[var(--accent-purple)]/10 border border-[var(--accent-purple)]/20 text-[9px] md:text-[10px] font-black text-[var(--accent-purple)] shadow-sm">
                    {article.category}
                  </span>
                  
                  <div className="flex items-center gap-3 text-[9px] md:text-[10px] font-medium text-[var(--text-muted)]">
                    <div className="flex items-center gap-1.5 opacity-80">
                      <Calendar size={12} /> {article.date}
                    </div>
                  </div>
                </div>

                <h3 className="text-lg md:text-xl font-black text-[var(--text-primary)] mb-3 leading-snug group-hover:text-[var(--accent-purple)] transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-[var(--text-secondary)] text-xs md:text-sm leading-relaxed mb-6 flex-1 font-medium line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="mt-auto pt-4 border-t border-[var(--border-subtle)] group-hover:border-[var(--accent-purple)]/20 transition-colors flex flex-col gap-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-[9px] font-bold text-[var(--text-muted)] group-hover:text-[var(--accent-purple)] bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] px-2 py-0.5 rounded-md transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Reading Time & Arrow */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold flex items-center gap-1.5 text-[var(--text-muted)]">
                      <Clock size={12} /> وقت القراءة: {article.readingTime}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[var(--bg-tertiary)] group-hover:bg-[var(--accent-purple)] flex items-center justify-center text-[var(--text-secondary)] group-hover:text-white transition-all shadow-sm">
                      <ChevronLeft size={14} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default FeaturedArticles;
