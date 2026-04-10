import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Twitter, Linkedin, Play, ExternalLink, ArrowUpLeft } from 'lucide-react';

const SocialBentoGrid = () => (
  <section id="social" className="py-12 md:py-24 px-6 relative bg-[var(--bg-primary)] overflow-hidden transition-colors duration-300 border-t border-[var(--border-subtle)]">
    <div className="absolute top-0 end-0 w-[400px] h-[400px] bg-red-500/5 blur-[100px] rounded-full pointer-events-none" />
    
    <div className="max-w-5xl mx-auto relative z-10">
      <div className="text-center md:text-start mb-10 md:mb-12">
        <span className="inline-block px-3 py-1 rounded-full bg-[var(--accent-blue)]/10 text-[var(--accent-blue)] font-bold text-[10px] tracking-widest uppercase mb-3 border border-[var(--accent-blue)]/20 shadow-sm">
          المجتمع الرقمي
        </span>
        <h2 className="text-2xl md:text-4xl font-black text-[var(--text-primary)] mb-3 tracking-tight leading-tight">
          لنستمر في الحديث <span className="text-[var(--text-muted)]">خارج هذه الصفحة.</span>
        </h2>
        <p className="text-[var(--text-secondary)] text-sm md:text-base max-w-lg md:ms-0 ms-auto me-auto md:me-0 font-medium">
          أتواجد عبر منصات متعددة لبناء مجتمع يهتم بالتطوير التقني، شاركني الرحلة.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 auto-rows-auto">
        {/* Youtube Card - Hero */}
        <motion.div
          whileHover={{ y: -3 }}
          className="md:col-span-8 glass-card rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 flex flex-col justify-between group overflow-hidden relative min-h-[260px] border-[var(--border-subtle)] shadow-lg"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="absolute -bottom-10 -start-10 w-40 h-40 bg-red-600/10 blur-[60px] pointer-events-none" />

          <div className="relative z-10 flex justify-between items-start mb-6">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all duration-300 shadow-inner">
              <Youtube size={24} className="md:w-8 md:h-8" />
            </div>
            <div className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[9px] md:text-[10px] font-black text-red-500 uppercase flex items-center gap-1.5 drop-shadow-sm">
               <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" /> +150,000 متعلم
            </div>
          </div>

          <div className="relative z-10 text-start mt-auto">
            <h3 className="text-xl md:text-2xl font-black mb-2 text-[var(--text-primary)] tracking-tight">المحاكي البصري للـ AI</h3>
            <p className="text-[var(--text-secondary)] text-xs md:text-sm max-w-md mb-6 leading-relaxed font-medium">
              أشرح لك الخوارزميات كأنك تراها. محتوى مرئي يعتمد على التفكيك البصري لتبسيط أعقد المفاهيم.
            </p>
            <button className="bg-[var(--text-primary)] text-[var(--bg-primary)] px-6 py-2.5 rounded-full text-xs font-black flex items-center gap-2 hover:bg-red-600 hover:text-white transition-all shadow-md group/btn w-fit">
              استكشف القناة 
              <Play size={14} fill="currentColor" className="group-hover/btn:scale-110 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Twitter Card */}
        <motion.div
          whileHover={{ y: -3 }}
          className="md:col-span-4 glass-card rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 flex flex-col justify-between group relative overflow-hidden min-h-[260px] shadow-md"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="text-start relative z-10">
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-blue-400/10 flex items-center justify-center text-blue-500 mb-4 group-hover:bg-blue-400 group-hover:text-white transition-all duration-300">
              <Twitter size={20} className="md:w-6 md:h-6" />
            </div>
            <h3 className="text-lg md:text-xl font-black mb-2 text-[var(--text-primary)]">تأملات يومية</h3>
            <p className="text-[var(--text-secondary)] text-xs leading-relaxed font-medium">
              أفكار سريعة وتحديثات يومية حول أحدث نماذج وتطورات الذكاء الاصطناعي.
            </p>
          </div>
          
          <div className="relative z-10 mt-6 text-start">
             <button className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-medium)] text-[var(--text-primary)] py-2.5 rounded-xl font-bold text-[10px] md:text-xs hover:bg-[var(--accent-blue)] hover:text-white hover:border-[var(--accent-blue)] transition-all flex items-center justify-center gap-2 group/btn">
               تابع @MohLahlah <ArrowUpLeft size={12} className="group-hover/btn:-translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
             </button>
          </div>
        </motion.div>

        {/* LinkedIn Card */}
        <motion.div
          whileHover={{ y: -3 }}
          className="md:col-span-12 glass-card rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between group relative overflow-hidden gap-6 shadow-lg"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 text-center md:text-start flex-1 relative z-10">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shrink-0 shadow-inner">
              <Linkedin size={24} className="md:w-8 md:h-8" />
            </div>
            <div>
              <h3 className="text-lg md:text-2xl font-black text-[var(--text-primary)] mb-2">شبكة العلاقات المهنية</h3>
              <p className="text-[var(--text-secondary)] text-xs md:text-sm max-w-xl font-medium leading-relaxed">
                مساحة لبناء الشراكات التقنية، استكشاف فرص التعاون، ومناقشة المشاريع الهندسية.
              </p>
            </div>
          </div>
          <button className="w-full md:w-auto bg-[var(--accent-blue)] text-white px-8 py-3 rounded-xl md:rounded-full font-black text-xs hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 transition-all active:scale-95 shrink-0 flex items-center justify-center gap-2 relative z-10">
            تواصل معي <ExternalLink size={14} />
          </button>
        </motion.div>
      </div>
    </div>
  </section>
);

export default SocialBentoGrid;
