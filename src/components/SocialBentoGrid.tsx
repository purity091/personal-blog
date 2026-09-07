"use client";

import { motion } from 'framer-motion';
import { Play, ArrowUpLeft, Twitter, Youtube, Linkedin } from 'lucide-react';

const SocialBentoGrid = () => {
  return (
    <section id="social" className="py-16 md:py-24 px-6 relative bg-[var(--bg-secondary)] overflow-hidden transition-colors duration-500" dir="rtl">

      {/* Dynamic Background Elements */}
      <div className="absolute top-0 end-0 w-[400px] h-[400px] bg-[var(--accent-purple)]/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 start-0 w-[300px] h-[300px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Compact Modern Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-8 border-b border-white/5 pb-10">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl text-start"
          >
            
            <h2 className="text-2xl md:text-4xl font-black text-[var(--text-primary)] leading-tight tracking-tight">
              أبني جسراً بينك وبين <span className="text-[var(--accent-purple)]">مستقبل الذكاء الاصطناعي</span>
            </h2>
          </motion.div>

          {/* Integrated Stats Bar */}

        </div>

        {/* Professional Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

          {/* YouTube - Primary Channel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 group relative p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden min-h-[300px] flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-red-600 flex items-center justify-center text-white shadow-lg shadow-red-600/20">
                  <Youtube size={24} />
                </div>
                <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">قناة اليوتيوب</span>
              </div>
              <h3 className="text-xl md:text-2xl font-black mb-3 text-[var(--text-primary)]">المحتوى المرئي التعليمي</h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed max-w-sm font-medium">فيديوهات تشرح الخوارزميات والذكاء الاصطناعي بأسلوب بسيط ومميز.</p>
            </div>

            <a href="https://www.youtube.com/@lahlah-ai" target="_blank" rel="noopener noreferrer" className="relative z-10 w-fit flex items-center gap-3 text-sm font-black text-white bg-red-600 px-6 py-3 rounded-full hover:scale-105 transition-transform active:scale-95">
              اشترك الآن <Play size={14} fill="currentColor" />
            </a>
          </motion.div>

          {/* Twitter/X - Quick Insights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 group relative p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-400/20">
                  <Twitter size={24} />
                </div>
                <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">منصة إكس / تويتر</span>
              </div>
              <h3 className="text-xl font-black mb-3 text-[var(--text-primary)]">تأملات يومية</h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed font-medium">خواطر سريعة وتحديثات لحظية حول أحدث نماذج الذكاء الاصطناعي.</p>
            </div>

            <a href="https://twitter.com/lahlahai" target="_blank" rel="noopener noreferrer" className="relative z-10 w-full flex items-center justify-center gap-2 text-xs font-black text-[var(--text-primary)] bg-white/5 border border-white/5 py-3 rounded-2xl hover:bg-blue-400 hover:text-white hover:border-blue-400 transition-all">
              تابع @lahlahai <ArrowUpLeft size={14} />
            </a>
          </motion.div>

          {/* LinkedIn - Professional Bar Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-12 group relative p-6 md:p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="flex items-center gap-6 relative z-10 flex-1">
              <div className="w-14 h-14 rounded-2xl bg-blue-700 flex items-center justify-center text-white shadow-lg shadow-blue-600/20 shrink-0">
                <Linkedin size={28} />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-black text-[var(--text-primary)]">شبكة العلاقات المهنية</h3>
                <p className="text-[var(--text-secondary)] text-xs md:text-sm font-medium">مساحة احترافية لبناء الشراكات التقنية واستكشاف فرص التعاون.</p>
              </div>
            </div>

            <a href="https://www.linkedin.com/in/mohamed-lahlah" target="_blank" rel="noopener noreferrer" className="relative z-10 px-8 py-3.5 rounded-full bg-blue-700 text-white text-xs font-black hover:scale-105 transition-transform active:scale-95 shrink-0">
              تواصل للتعاون
            </a>
          </motion.div>
        </div>



      </div>
    </section>
  );
};

export default SocialBentoGrid;
