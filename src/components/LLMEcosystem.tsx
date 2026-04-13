
import { motion, useReducedMotion } from 'framer-motion';
import {
  MessageSquare,
  Shield,
  BarChart,
  Users,
  Globe,
  Zap,
  Workflow
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const LLMEcosystem = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    setMounted(true);

    const update = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // Use CSS custom property for radius — no hydration mismatch
  const radius = isMobile ? 140 : 220;

  const items = [
    { icon: <MessageSquare size={isMobile ? 14 : 18} />, label: "أتمتة المحتوى" },
    { icon: <Shield size={isMobile ? 14 : 18} />, label: "الامتثال" },
    { icon: <BarChart size={isMobile ? 14 : 18} />, label: "المخاطر" },
    { icon: <Users size={isMobile ? 14 : 18} />, label: "المواهب" },
    { icon: <Globe size={isMobile ? 14 : 18} />, label: "الإمداد" },
    { icon: <Zap size={isMobile ? 14 : 18} />, label: "أتمتة العمل" },
  ];

  return (
    <section id="ecosystem" className="py-16 md:py-32 px-4 md:px-6 bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-tertiary)] overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto text-center mb-12 md:mb-20">
        <h2 className="text-2xl md:text-5xl font-bold mb-3 md:mb-4 text-[var(--text-primary)]">تطبيقات الذكاء العملي</h2>
        <p className="text-[var(--text-secondary)] text-sm md:text-base px-4">من أتمتة التسويق إلى إدارة المخاطر المالية، الـ LLM يغير كل شيء.</p>
      </div>

      <div ref={containerRef} className="max-w-5xl mx-auto relative flex items-center justify-center" style={{ minHeight: isMobile ? 350 : 500 }}>
        {/* Center Hub */}
        <motion.div
          animate={shouldReduceMotion ? {} : { scale: [1, 1.05, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-24 h-24 md:w-40 md:h-40 rounded-full bg-[var(--accent-blue)]/10 border border-[var(--accent-blue)]/30 flex flex-col items-center justify-center z-10 backdrop-blur-xl shadow-lg"
        >
          <div className="w-10 h-10 md:w-16 md:h-16 bg-[var(--accent-blue)] rounded-full flex items-center justify-center mb-1 md:mb-2 shadow-[0_0_20px_rgba(59,130,246,0.3)] text-white">
            <Workflow size={isMobile ? 18 : 28} />
          </div>
          <span className="text-[8px] md:text-[10px] font-bold text-[var(--text-primary)] uppercase tracking-tighter">تطبيقات LLM</span>
        </motion.div>

        {/* Orbital Items — positioned with CSS, no inline transform for hydration safety */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {items.map((item, i) => {
            const angle = (i * 60) * (Math.PI / 180);
            const x = Math.sin(angle) * radius;
            const y = -Math.cos(angle) * radius;
            return (
              <motion.div
                key={i}
                initial={mounted ? { opacity: 0, scale: 0.8 } : {}}
                animate={mounted && !shouldReduceMotion ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="absolute glass-card p-2 md:p-3 rounded-xl md:rounded-2xl flex items-center gap-2 w-24 md:w-36 group cursor-default shadow-md pointer-events-auto"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                <div className="text-[var(--accent-blue)] shrink-0">
                  {item.icon}
                </div>
                <span className="text-[8px] md:text-[10px] font-bold text-[var(--text-primary)] whitespace-nowrap truncate">{item.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LLMEcosystem;
