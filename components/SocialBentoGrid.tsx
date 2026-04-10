import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Twitter, Linkedin, Play, ExternalLink, ArrowUpLeft, BookOpen, Users, TrendingUp, Target } from 'lucide-react';

const SocialBentoGrid = () => {
  const stats = [
    { icon: <Users size={18} />, value: "150K+", label: "متابع" },
    { icon: <TrendingUp size={18} />, value: "500+", label: "فيديو" },
    { icon: <Target size={18} />, value: "10K+", label: "طالب" },
  ];

  return (
    <section id="social" className="py-16 md:py-32 px-6 relative bg-[var(--bg-secondary)] overflow-hidden transition-colors duration-500">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/5 to-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-blue-500/5 to-purple-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header with Strong Value Proposition */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--accent-purple)]/10 text-[var(--accent-purple)] font-bold text-[10px] tracking-widest uppercase mb-6 border border-[var(--accent-purple)]/20">
              <BookOpen size={12} /> من المحتوى إلى المجتمع
            </span>

            <h2 className="text-3xl md:text-5xl font-black text-[var(--text-primary)] mb-6 tracking-tight leading-[1.2]">
              أبني جسراً بينك وبين
              <span className="block bg-gradient-to-r from-[var(--accent-purple)] to-[var(--accent-blue)] bg-clip-text text-transparent">
                مستقبل الذكاء الاصطناعي
              </span>
            </h2>

            <p className="text-[var(--text-secondary)] text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              لست مجرد صانع محتوى. أنا مرشدك التقني في رحلة فهم أعقد التقنيات،
              من خلال محتوى مرئي مدروس يبني الفكرة فكرة.
            </p>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-4 md:gap-8 mb-16 md:mb-20 p-6 md:p-8 glass-card rounded-2xl md:rounded-3xl border-[var(--border-subtle)]"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="flex items-center justify-center mb-2 text-[var(--accent-purple)]">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-4xl font-black text-[var(--text-primary)] mb-1">
                {stat.value}
              </div>
              <div className="text-[10px] md:text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Main Content Grid - Ali Abdaal Style */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* YouTube - Main Platform Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="md:col-span-8 glass-card rounded-2xl md:rounded-3xl p-8 md:p-12 flex flex-col justify-between group overflow-hidden relative min-h-[320px] md:min-h-[400px] border-[var(--border-subtle)] shadow-xl"
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-red-600/10 blur-[80px] pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white shadow-lg shadow-red-500/20 group-hover:scale-110 transition-transform duration-300">
                  <Youtube size={28} className="md:w-10 md:h-10" />
                </div>
                <div className="px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-black uppercase tracking-wider">
                  المنصة الرئيسية
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl md:text-4xl font-black mb-4 text-[var(--text-primary)] tracking-tight leading-tight">
                  قناة اليوتيوب التعليمية
                </h3>
                <p className="text-[var(--text-secondary)] text-sm md:text-lg max-w-xl mb-8 leading-relaxed font-medium">
                  أكثر من 500 فيديو يشرح الخوارزميات كأنك تراها. محتوى مرئي يعتمد على
                  التفكيك البصري، من أبسط المفاهيم إلى أعقد التطبيقات العملية.
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {['شبكات عصبية', 'تعلم عميق', 'محاكاة بصرية', 'Python'].map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] text-[10px] font-bold text-[var(--text-muted)]">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="group/btn bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full font-black text-sm flex items-center gap-3 hover:shadow-xl hover:shadow-red-600/20 transition-all hover:scale-105 active:scale-95">
                  استكشف القناة
                  <Play size={16} fill="currentColor" className="group-hover/btn:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Twitter/X Card - Quick Insights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="md:col-span-4 glass-card rounded-2xl md:rounded-3xl p-8 flex flex-col justify-between group relative overflow-hidden min-h-[320px] md:min-h-[400px] shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />

            <div className="relative z-10">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-400/20">
                <Twitter size={24} className="md:w-8 md:h-8" />
              </div>

              <h3 className="text-xl md:text-2xl font-black mb-4 text-[var(--text-primary)] tracking-tight">
                تأملات يومية
              </h3>
              <p className="text-[var(--text-secondary)] text-sm md:text-base leading-relaxed font-medium mb-6">
                خواطر سريعة وتحديثات لحظية حول أحدث نماذج الذكاء الاصطناعي،
                نصائح تقنية، ورؤى مستقبلية.
              </p>

              <div className="space-y-3 mb-6">
                {['أخبار AI يومية', 'نصائح تقنية', 'مناقشات تفاعلية'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-[var(--text-muted)] text-xs font-bold">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <button className="group/btn w-full bg-[var(--bg-tertiary)] border border-[var(--border-medium)] text-[var(--text-primary)] py-3.5 rounded-xl font-bold text-sm hover:bg-blue-400 hover:text-white hover:border-blue-400 transition-all flex items-center justify-center gap-2">
              تابع @MohLahlah
              <ArrowUpLeft size={12} className="group-hover/btn:-translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </button>
          </motion.div>

          {/* LinkedIn Card - Professional Network */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="md:col-span-12 glass-card rounded-2xl md:rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between group relative overflow-hidden gap-8 shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-all duration-700" />

            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 text-center md:text-start flex-1 relative z-10">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform duration-300 shrink-0">
                <Linkedin size={32} className="md:w-10 md:h-10" />
              </div>

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 text-blue-500 text-[9px] font-black uppercase tracking-wider mb-4 border border-blue-600/20">
                  للشركات والمؤسسات
                </div>
                <h3 className="text-xl md:text-3xl font-black text-[var(--text-primary)] mb-3 tracking-tight">
                  شبكة العلاقات المهنية
                </h3>
                <p className="text-[var(--text-secondary)] text-sm md:text-base max-w-2xl font-medium leading-relaxed">
                  مساحة احترافية لبناء الشراكات التقنية، استكشاف فرص التعاون في المشاريع،
                  وتقديم استشارات متخصصة للشركات الناشئة في مجال الذكاء الاصطناعي.
                </p>
              </div>
            </div>

            <button className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-full font-black text-sm hover:shadow-xl hover:shadow-blue-600/20 transition-all active:scale-95 shrink-0 flex items-center justify-center gap-3 relative z-10 hover:scale-105">
              تواصل للتعاون
              <ExternalLink size={16} />
            </button>
          </motion.div>
        </div>

        {/* Call to Action - Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-[var(--text-muted)] text-sm md:text-base font-medium mb-4">
            انضم إلى مجتمع يتعلم وينمو معاً
          </p>
          <div className="flex items-center justify-center gap-2 text-[var(--text-secondary)] text-xs">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>نشاط مستمر يومياً عبر جميع المنصات</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialBentoGrid;
