import { useState, useEffect, type MouseEvent } from 'react';
import { motion, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import {
  ArrowUpLeft,
  Book as BookIcon,
  Sparkles,
  Zap,
  Globe,
  Code2,
  Cpu,
  Search,
  MessageSquare,
  BookOpen,
  Share2,
  Binary,
  Network
} from 'lucide-react';

const NeuralMesh = () => (
  <div className="absolute inset-0 -z-20 pointer-events-none">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--accent-purple)/0.03,transparent_70%)]" />
    <svg className="w-full h-full opacity-[0.05] md:opacity-[0.1]" aria-hidden="true">
      <defs>
        <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" className="text-[var(--accent-purple)]" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hero-grid)" />
    </svg>
    <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] via-transparent to-[var(--bg-primary)]" />
  </div>
);

const CodeSnippet = () => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.5, duration: 1 }}
    className="absolute -top-12 -start-12 p-5 rounded-3xl bg-[#0d1117]/90 backdrop-blur-2xl border border-white/10 shadow-2xl z-20 font-mono text-[11px] text-emerald-400 hidden lg:block ring-1 ring-white/5"
  >
    <div className="flex gap-2 mb-3">
      <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40"></div>
      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/40"></div>
      <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/40"></div>
    </div>
    <div className="space-y-1.5">
      <div className="flex gap-2 text-slate-500 italic">// Student of Knowledge</div>
      <div className="flex gap-2"><span className="text-purple-400">while</span> <span className="text-blue-400">isLearning</span>:</div>
      <div className="ps-4 flex gap-2 text-yellow-400">discover_ai_secrets()</div>
      <div className="ps-4 flex gap-2 text-yellow-400">share_with_community()</div>
    </div>
  </motion.div>
);

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  const mouseX = useSpring(0, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 50 });

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) / 40;
    const moveY = (clientY - window.innerHeight / 2) / 40;
    mouseX.set(moveX);
    mouseY.set(moveY);
  };

  const aiTerms = ["Neural Networks", "Deep Learning", "Transformers", "Backprop"];

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[var(--bg-primary)]"
      dir="rtl"
    >
      <NeuralMesh />
      
      {/* Dynamic Ambient Glows */}
      <motion.div 
        style={{ x: mouseX, y: mouseY }}
        className="absolute top-[20%] start-[10%] w-[500px] h-[500px] bg-[var(--accent-purple)]/5 blur-[150px] rounded-full pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Narrative Partition: Content Engine */}
          <div className="space-y-12 text-start order-2 lg:order-1">
            
            {/* 1. The Hook: Status & Identity */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[var(--text-muted)] text-[9px] font-black tracking-widest uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                متاح لتبادل المعرفة والتعاون
              </div>
              
              <div className="space-y-4">
                <h2 className="text-[var(--accent-purple)] text-[10px] md:text-xs font-black tracking-[0.3em] uppercase flex items-center gap-2">
                  <Search size={14} /> رحلة طالب علم
                </h2>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[var(--text-primary)] leading-[1.1] tracking-tighter">
                  أبسط <span className="text-[var(--accent-purple)]">الذكاء الاصطناعي</span> <br />
                  لأتعلم وأشارك.
                </h1>
              </div>
            </motion.div>

            {/* 2. The Manifest: Core Story */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="relative ps-6 border-s border-white/10"
            >
              <p className="text-base md:text-lg lg:text-xl text-[var(--text-secondary)] font-medium leading-relaxed max-w-xl opacity-90">
                أنا محمد لحلح، أؤمن أن أعظم طريق لفهم المستقبل هو شرحه للآخرين. كل ما تجده هنا هو نتاج رحلتي في تبسيط "عقل الآلة" ليكون متاحاً لكل عقل عربي طموح.
              </p>
            </motion.div>

            {/* 3. The Action Partition: Grouped CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href="/#blog" 
                className="group relative inline-flex items-center justify-center gap-3 bg-[var(--accent-purple)] text-white px-8 py-4 md:px-10 md:py-5 rounded-2xl font-black text-base md:text-lg shadow-xl shadow-[var(--accent-purple)]/20 transition-all hover:scale-[1.03]"
              >
                تصفح الاكتشافات <Sparkles size={20} />
              </a>
              <a 
                href="/#books" 
                className="inline-flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-[var(--text-primary)] px-8 py-4 md:px-10 md:py-5 rounded-2xl font-black text-base md:text-lg hover:bg-white/10 transition-all"
              >
                إصداراتي التعليمية <BookOpen size={20} />
              </a>
            </motion.div>

            {/* 4. The Meta Partition: Philosophy & Target */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-8 pt-10 border-t border-white/5 max-w-md"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[var(--accent-purple)]">
                  <Zap size={14} />
                  <span className="text-[10px] font-black uppercase tracking-widest">فلسفة التعلم</span>
                </div>
                <p className="text-sm font-bold text-[var(--text-primary)]">التفكيك البصري للمفاهيم</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[var(--accent-blue)]">
                  <Share2 size={14} />
                  <span className="text-[10px] font-black uppercase tracking-widest">هدف المشاركة</span>
                </div>
                <p className="text-sm font-bold text-[var(--text-primary)]">بناء مجتمع تقني عربي</p>
              </div>
            </motion.div>
          </div>

          {/* Visual Partition: The Persona Center */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 relative order-1 lg:order-2"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] mx-auto">
              
              <CodeSnippet />

              {/* Subtle AI Terminology Floating */}
              {aiTerms.map((term, i) => (
                <motion.div
                  key={term}
                  animate={{ y: [0, -10, 0], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                  className="absolute text-[8px] font-mono text-[var(--text-muted)] font-black uppercase tracking-widest pointer-events-none hidden lg:block"
                  style={{
                    top: `${10 + i * 25}%`,
                    left: i % 2 === 0 ? '-15%' : 'auto',
                    right: i % 2 !== 0 ? '-15%' : 'auto',
                  }}
                >
                  {term}
                </motion.div>
              ))}

              {/* Dynamic Orbital Rings */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-10 border border-dashed border-[var(--accent-purple)]/10 rounded-full" 
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-16 border border-dotted border-[var(--accent-blue)]/10 rounded-full" 
              />
              
              {/* Profile Canvas */}
              <div className="relative w-full h-full rounded-full p-2 bg-gradient-to-br from-[var(--accent-purple)]/40 via-blue-500/40 to-[var(--accent-blue)]/40 shadow-2xl">
                <div className="w-full h-full rounded-full bg-[var(--bg-primary)] p-1 relative overflow-hidden group">
                  {/* Clean Image Rendering */}
                  <img 
                    src="/mohamed-lahlah.jpeg" 
                    alt="محمد لحلح" 
                    className="w-full h-full object-cover rounded-full transition-all duration-1000 scale-105 group-hover:scale-100"
                  />
                  
                  {/* Subtle Tech Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent-purple)]/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Floating Identity Badge */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all bg-black/40 backdrop-blur-md">
                    <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 bg-white/5 text-[11px] font-black text-white uppercase tracking-[0.3em] shadow-2xl">
                      <Network size={14} className="text-[var(--accent-blue)]" /> Deep Intelligence
                    </div>
                  </div>
                </div>
              </div>

              {/* Discovery Indicator with Tech Icon */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -start-6 p-5 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl z-20 flex items-center gap-3"
              >
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                  <Binary size={12} className="absolute -top-4 -left-4 text-emerald-500/40" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-black text-white uppercase tracking-widest">Exploring</span>
                  <span className="text-[7px] font-bold text-[var(--text-muted)] uppercase">Neural Archs</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
