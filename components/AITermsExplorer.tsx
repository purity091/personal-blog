import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Network,
  Cpu,
  Zap,
  Sparkles,
  BarChart,
  Layers,
  MessageSquare,
  Globe,
  Terminal,
  ArrowUpRight
} from 'lucide-react';

const AITermsExplorer = () => {
  const [selectedTerm, setSelectedTerm] = useState(0);

  const categories = [
    { id: 'foundation', name: 'الأساسيات', color: 'text-blue-400' },
    { id: 'advanced', name: 'متقدم', color: 'text-purple-400' },
    { id: 'future', name: 'المستقبل', color: 'text-emerald-400' },
  ];

  const terms = [
    { name: "الشبكات العصبية", cat: 'foundation', def: "نماذج حاسوبية مستوحاة من هيكلية الدماغ البشري لمعالجة البيانات المعقدة.", icon: <Network size={16} /> },
    { name: "المحولات (Transformers)", cat: 'advanced', def: "بنية برمجية تعتمد على آلية 'الانتباه' وهي الأساس لمحركات مثل ChatGPT.", icon: <Cpu size={16} /> },
    { name: "التعلم التعزيزي", cat: 'advanced', def: "تدريب الآلة على اتخاذ القرارات من خلال نظام الثواب والعقاب (Trial and Error).", icon: <Zap size={16} /> },
    { name: "الذكاء الاصطناعي التوليدي", cat: 'future', def: "قدرة الآلة على خلق محتوى جديد (نصوص، صور، أكواد) غير موجود مسبقاً.", icon: <Sparkles size={16} /> },
    { name: "تعلم الآلة (ML)", cat: 'foundation', def: "فرع من الذكاء الاصطناعي يهتم بتطوير خوارزميات تسمح للحواسيب بالتعلم من البيانات.", icon: <BarChart size={16} /> },
    { name: "التعلم العميق (DL)", cat: 'foundation', def: "تطور لتعلم الآلة يستخدم شبكات عصبية متعددة الطبقات لفهم الأنماط العميقة.", icon: <Layers size={16} /> },
    { name: "معالجة اللغات (NLP)", cat: 'advanced', def: "تمكين الحواسيب من فهم وتفسير وتوليد لغة البشر بطريقة طبيعية.", icon: <MessageSquare size={16} /> },
    { name: "الرؤية الحاسوبية", cat: 'advanced', def: "قدرة الآلة على استخلاص معلومات مفيدة من الصور الرقمية ومقاطع الفيديو.", icon: <Globe size={16} /> },
  ];

  return (
    <section className="py-2  bg-[var(--bg-primary)] border-y border-[var(--border-subtle)] relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[var(--accent-purple)]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="text-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--glass-bg)] border border-[var(--border-subtle)] text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest mb-4">
              <Terminal size={12} /> مختبر المعرفة الرقمية
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-4 leading-tight">قاموس المفاهيم <br /><span className="text-[var(--accent-purple)]">الذكية التفاعلي</span></h2>
            <p className="text-[var(--text-secondary)] text-sm md:text-base max-w-md ml-auto">استكشف المصطلحات الجوهرية التي تبني مستقبل الذكاء الاصطناعي بضغطة واحدة.</p>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar scroll-smooth">
            {categories.map(cat => (
              <button key={cat.id} className={`px-4 py-2 rounded-xl border border-[var(--border-subtle)] whitespace-nowrap text-[10px] md:text-xs font-bold transition-all hover:bg-[var(--glass-bg-hover)] bg-[var(--card-bg)] shadow-sm ${cat.color}`}>
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 order-2 lg:order-1">
            {terms.map((term, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedTerm(i)}
                className={`p-4 md:p-5 rounded-2xl md:rounded-[2rem] border transition-all text-right flex items-center justify-between group shadow-sm ${selectedTerm === i
                    ? 'bg-[var(--accent-purple)]/10 border-[var(--accent-purple)]/40 shadow-[var(--shadow-md)]'
                    : 'bg-[var(--card-bg)] border-[var(--border-subtle)] hover:border-[var(--accent-purple)]/50'
                  }`}
              >
                <div className={`p-2 rounded-lg transition-colors ${selectedTerm === i ? 'bg-[var(--accent-purple)] text-white' : 'bg-[var(--bg-tertiary)] text-[var(--text-muted)]'}`}>
                  {term.icon}
                </div>
                <div className="flex-1 mr-4">
                  <span className={`block text-xs md:text-sm font-bold transition-colors ${selectedTerm === i ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]'}`}>
                    {term.name}
                  </span>
                </div>
                {selectedTerm === i && <motion.div layoutId="dot" className="w-1.5 h-1.5 rounded-full bg-[var(--accent-purple)] shadow-[0_0_10px_var(--accent-purple)]" />}
              </motion.button>
            ))}
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-24 order-1 lg:order-2">
            <motion.div
              key={selectedTerm}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card rounded-2xl md:rounded-[2.5rem] p-6 md:p-10 relative overflow-hidden border-[var(--accent-purple)]/20 shadow-[var(--shadow-lg)]"
            >
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[var(--border-subtle)]">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500/20" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/20" />
                  <div className="w-2 h-2 rounded-full bg-emerald-500/20" />
                </div>
                <div className="flex-1 text-center text-[8px] md:text-[10px] font-mono text-[var(--text-muted)] flex items-center justify-center gap-2">
                  <Terminal size={10} /> مستكشف_المفاهيم.exe
                </div>
              </div>

              <div className="text-right">
                <div className="inline-block px-2 py-0.5 rounded-md bg-[var(--accent-purple)]/10 text-[var(--accent-purple)] text-[9px] font-bold mb-4">
                  {categories.find(c => c.id === terms[selectedTerm].cat)?.name}
                </div>
                <h3 className="text-xl md:text-3xl font-black text-[var(--text-primary)] mb-4 leading-tight">
                  {terms[selectedTerm].name}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm md:text-lg leading-relaxed mb-6 font-medium">
                  {terms[selectedTerm].def}
                </p>

                <div className="flex items-center justify-end gap-3 p-3 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] group cursor-pointer hover:bg-[var(--glass-bg-hover)] transition-all">
                  <span className="text-[10px] md:text-xs font-bold text-[var(--text-primary)]">اقرأ المقال الكامل</span>
                  <ArrowUpRight size={14} className="text-[var(--accent-purple)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITermsExplorer;
