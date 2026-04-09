import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Twitter, Linkedin, Play, ExternalLink } from 'lucide-react';

const SocialBentoGrid = () => (
  <section id="social" className="py-20 md:py-40 px-6 relative bg-[var(--bg-primary)] overflow-hidden transition-colors duration-300">
    <div className="max-w-6xl mx-auto">
      <div className="text-center md:text-right mb-12 md:mb-16">
        <span className="text-[var(--accent-blue)] font-bold text-[10px] md:text-xs tracking-widest uppercase mb-2 md:mb-4 block">المنظومة الرقمية</span>
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)]">تواصل معي عبر المنصات</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-auto md:auto-rows-[280px]">
        <motion.div
          whileHover={{ y: -5 }}
          className="md:col-span-8 md:row-span-2 glass-card rounded-3xl md:rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between group overflow-hidden relative min-h-[300px]"
        >
          <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute -bottom-20 -left-20 w-40 md:w-80 h-40 md:h-80 bg-red-600/10 blur-[60px] md:blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex justify-between items-start">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-red-600/10 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all">
              <Youtube size={28} />
            </div>
            <div className="px-3 py-1 rounded-full border border-red-500/20 text-[8px] md:text-[10px] font-bold text-red-600 dark:text-red-400 uppercase">
              أكثر من 150 ألف مشترك
            </div>
          </div>

          <div className="relative z-10 text-center md:text-right mt-8 md:mt-0">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-[var(--text-primary)]">قناة اليوتيوب التعليمية</h3>
            <p className="text-[var(--text-secondary)] text-xs md:text-sm max-w-md ml-auto md:ml-0 md:mr-auto mb-6 md:mb-8">
              أشرح الخوارزميات كأنك تراها. فيديوهات تعتمد على المحاكاة البصرية لتبسيط أعمق مفاهيم الذكاء الاصطناعي.
            </p>
            <button className="bg-[var(--text-primary)] text-[var(--bg-primary)] px-6 py-2.5 md:py-3 rounded-full text-xs font-bold flex items-center gap-2 mx-auto md:mr-auto md:ml-0 hover:bg-red-600 hover:text-white transition-all shadow-md">
              شاهد الشروحات <Play size={14} fill="currentColor" />
            </button>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="md:col-span-4 md:row-span-2 glass-card rounded-3xl md:rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between group relative overflow-hidden min-h-[300px]"
        >
          <div className="text-center md:text-right">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-blue-400/10 flex items-center justify-center text-blue-500 mx-auto md:ml-auto md:mr-0 mb-6 group-hover:bg-blue-400 group-hover:text-white transition-all">
              <Twitter size={24} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-[var(--text-primary)]">خواطر تقنية</h3>
            <p className="text-[var(--text-secondary)] text-xs md:text-sm leading-relaxed">
              تغريدات يومية عن آخر تطورات الـ AI، نصائح مهنية، وتجارب التعلم المستمر.
            </p>
          </div>
          <div className="mt-8 pt-8 border-t border-[var(--border-subtle)] text-center md:text-right">
             <div className="text-[10px] font-mono text-[var(--accent-blue)] mb-4">@MohammedLahlah</div>
             <button className="w-full border border-[var(--border-medium)] text-[var(--text-primary)] py-2.5 rounded-xl font-bold text-[10px] hover:bg-[var(--glass-bg-hover)] transition-all flex items-center justify-center gap-2">
               تابع الرحلة <ExternalLink size={12} />
             </button>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="md:col-span-12 glass-card rounded-3xl md:rounded-[2.5rem] p-6 md:p-12 flex flex-col md:flex-row items-center justify-between group relative overflow-hidden gap-6"
        >
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center md:text-right flex-1">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-blue-700/10 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <Linkedin size={32} />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-1 md:mb-2">الملف المهني العالمي</h3>
              <p className="text-[var(--text-secondary)] text-xs md:text-sm max-w-xl">
                تواصل مهني لفرص التعاون، الإرشاد التقني، وبناء الشراكات.
              </p>
            </div>
          </div>
          <button className="w-full md:w-auto bg-[var(--accent-blue)] text-white px-8 py-3 rounded-full font-bold text-xs hover:bg-blue-700 transition-all shadow-lg">
            تواصل مهنياً
          </button>
        </motion.div>
      </div>
    </div>
  </section>
);

export default SocialBentoGrid;
