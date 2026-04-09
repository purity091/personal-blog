import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ShieldCheck, Users, ArrowLeft } from 'lucide-react';

const NewsletterReflect = () => (
  <section className="py-24 md:py-48 px-6 relative overflow-hidden bg-[var(--bg-primary)] transition-colors duration-500">
    {/* Decorative background elements for Light Mode */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent-purple)]/5 rounded-full blur-[100px] pointer-events-none" />
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--accent-blue)]/5 rounded-full blur-[100px] pointer-events-none" />

    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="relative group"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-purple)] to-[var(--accent-blue)] rounded-[3rem] md:rounded-[5rem] blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200" />
        
        <div className="relative glass-card p-12 md:p-24 rounded-[3rem] md:rounded-[5rem] text-center z-10 overflow-hidden border-[var(--border-subtle)]/50 shadow-2xl">
          {/* Subtle grid in background of the card */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          
          <div className="flex flex-col items-center relative z-20">
            <motion.div 
              whileHover={{ rotate: 15, scale: 1.1 }}
              className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[var(--accent-purple)] to-[var(--accent-blue)] rounded-2xl md:rounded-3xl flex items-center justify-center text-white mb-8 shadow-lg shadow-purple-500/20"
            >
              <Mail size={32} />
            </motion.div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--accent-purple)]/10 text-[var(--accent-purple)] text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-6 border border-[var(--accent-purple)]/20 shadow-sm">
               <Users size={14} /> أكثر من 15,000 مشترك
            </div>

            <h2 className="text-4xl md:text-7xl font-black mb-6 hero-gradient tracking-tighter leading-[1.1]">
              كن جزءاً من المستقبل
            </h2>
            
            <p className="text-[var(--text-secondary)] text-sm md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
              انضم إلى النخبة المهتمة بتقنيات الجيل القادم، واحصل على فكرة واحدة معمقة، دقيقة، وقابلة للتطبيق كل يوم سبت.
            </p>

            <div className="w-full max-w-xl mx-auto">
              <div className="relative flex flex-col md:flex-row gap-3 md:gap-0 bg-[var(--bg-primary)] p-2 rounded-[1.5rem] md:rounded-full border border-[var(--border-medium)] shadow-xl focus-within:border-[var(--accent-purple)] transition-all group/input">
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="flex-1 bg-transparent px-8 py-4 focus:outline-none text-[var(--text-primary)] text-right md:text-left placeholder:text-[var(--text-muted)] text-sm md:text-lg font-medium"
                />
                <button className="bg-[var(--text-primary)] text-[var(--bg-primary)] font-black px-10 py-4 rounded-xl md:rounded-full hover:bg-[var(--accent-purple)] hover:text-white transition-all shadow-xl flex items-center justify-center gap-3 group-hover:scale-[1.02] transform">
                  <ArrowLeft size={18} className="hidden md:block transition-transform group-hover:-translate-x-1" />
                  اشترك مجاناً
                </button>
              </div>

              <div className="flex flex-wrap justify-center gap-6 mt-8 opacity-60">
                <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">
                  <ShieldCheck size={14} className="text-emerald-500" /> لا وجود للرسائل المزعجة
                </div>
                <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">
                  <ShieldCheck size={14} className="text-emerald-500" /> إلغاء الاشتراك بضغطة واحدة
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default NewsletterReflect;
