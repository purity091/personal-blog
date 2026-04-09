import React from 'react';
import { motion } from 'framer-motion';
import {
  MessageSquare,
  Shield,
  BarChart,
  Users,
  Globe,
  Zap,
  Workflow
} from 'lucide-react';

const LLMEcosystem = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const radius = isMobile ? 140 : 220;

  return (
    <section id="ecosystem" className="py-20 md:py-40 px-6 bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-tertiary)] overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto text-center mb-16 md:mb-24">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[var(--text-primary)]">تطبيقات الذكاء العملي</h2>
        <p className="text-[var(--text-secondary)] text-sm md:text-base px-4">من أتمتة التسويق إلى إدارة المخاطر المالية، الـ LLM يغير كل شيء.</p>
      </div>
      <div className="max-w-5xl mx-auto relative flex items-center justify-center min-h-[400px] md:min-h-[500px]">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-[var(--accent-blue)]/10 border border-[var(--accent-blue)]/30 flex flex-col items-center justify-center z-10 backdrop-blur-xl shadow-lg"
        >
          <div className="w-12 h-12 md:w-20 md:h-20 bg-[var(--accent-blue)] rounded-full flex items-center justify-center mb-2 shadow-[0_0_20px_rgba(59,130,246,0.3)] text-white">
            <Workflow size={24} className="md:size-8" />
          </div>
          <span className="text-[9px] md:text-xs font-bold text-[var(--text-primary)] uppercase tracking-tighter">تطبيقات LLM</span>
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center">
          {[
            { icon: <MessageSquare />, label: "أتمتة المحتوى" },
            { icon: <Shield />, label: "الامتثال" },
            { icon: <BarChart />, label: "المخاطر" },
            { icon: <Users />, label: "المواهب" },
            { icon: <Globe />, label: "الإمداد" },
            { icon: <Zap />, label: "أتمتة العمل" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="absolute glass-card p-2 md:p-3 rounded-xl md:rounded-2xl flex items-center gap-2 w-28 md:w-40 group cursor-default shadow-md"
              style={{
                transform: `rotate(${i * 60}deg) translateY(-${radius}px) rotate(-${i * 60}deg)`
              }}
            >
              <div className="text-[var(--accent-blue)] scale-75 md:scale-100 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <span className="text-[8px] md:text-xs font-bold text-[var(--text-primary)] whitespace-nowrap">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LLMEcosystem;
