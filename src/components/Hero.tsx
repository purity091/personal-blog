import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  Binary,
  Variable,
  FunctionSquare,
  Sigma,
  ArrowUpRight,
  Book as BookIcon
} from 'lucide-react';

const HeroVisualDecorations = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] dark:opacity-20 mix-blend-overlay"></div>

      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] start-[5%] text-[var(--accent-blue)] font-mono text-[80px] font-black opacity-5 hidden lg:block"
      >
        ∑
      </motion.div>

      <motion.div
        animate={{ y: [0, 30, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[40%] end-[5%] text-[var(--accent-purple)] font-mono text-[100px] font-black opacity-5 hidden lg:block"
      >
        λ
      </motion.div>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -end-40 w-[600px] h-[600px] border border-[var(--accent-purple)]/5 rounded-full"
      />

      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0, 0.3, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
          className="absolute w-px h-24 bg-gradient-to-b from-transparent via-[var(--accent-blue)] to-transparent"
          style={{
            top: `${Math.random() * 100}%`,
            insetInlineStart: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 45}deg)`
          }}
        />
      ))}
    </div>
  );
};

const NeuralMesh = () => (
  <div className="absolute inset-0 -z-20 pointer-events-none">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--accent-purple)/0.03,transparent_70%)] dark:hidden" />
    <svg className="w-full h-full opacity-[0.1] dark:opacity-30">
      <defs>
        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="var(--accent-purple)" strokeWidth="0.5" opacity="0.3" />
          <circle cx="0" cy="0" r="1" fill="var(--accent-purple)" opacity="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
    <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] via-transparent to-[var(--bg-primary)]" />
  </div>
);

const Hero = () => {
  const mouseX = useSpring(0, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 50 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) / 30;
    const moveY = (clientY - window.innerHeight / 2) / 30;
    mouseX.set(moveX);
    mouseY.set(moveY);
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative pt-32 md:pt-32 pb-16 px-6 overflow-hidden flex flex-col items-center bg-[var(--bg-primary)] transition-colors duration-500"
      aria-label="القسم الرئيسي - مقدمة الذكاء الاصطناعي"
    >
      <NeuralMesh />
      <HeroVisualDecorations />

      {/* Dynamic Glows */}
      <motion.div
        style={{ x: mouseX, y: mouseY, top: '5%', insetInlineStart: '25%', filter: 'blur(140px)' }}
        className="bg-glow opacity-[0.5] dark:opacity-30 !bg-[var(--accent-purple)]"
      />
      <motion.div
        style={{
          x: useTransform(mouseX, (v) => -v),
          y: useTransform(mouseY, (v) => -v),
          bottom: '15%',
          insetInlineEnd: '25%',
          filter: 'blur(120px)'
        }}
        className="bg-glow !bg-[var(--accent-blue)] opacity-[0.4] dark:opacity-20"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl relative z-10 text-center"
      >

        <div className="mb-6 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-purple)]/10 border border-[var(--accent-purple)]/20 text-[var(--accent-purple)] font-bold text-sm md:text-base shadow-sm" role="status">
          👋 أهلاً، أنا محمد لحلح
        </div>

        <h1 className="text-3xl md:text-6xl lg:text-7xl font-black mb-6 hero-gradient leading-[1.1] tracking-tighter filter drop-shadow-sm">
          أساعدك على فهم الذكاء الاصطناعي <br className="hidden md:block" /> لاستكشاف آفاق المستقبل.
        </h1>

        <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
          أنا مهندس تقني وصانع محتوى. أشارك رحلتي في تفكيك الخوارزميات المعقدة، وأحوّلها إلى شروحات مرئية بسيطة تساعدك على تعلم التكنولوجيا، وتطبيقها في حياتك المهنية لبناء مشاريع حقيقية.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-24">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(124, 58, 237, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative w-full sm:w-auto overflow-hidden bg-[var(--accent-purple)] text-white px-14 py-6 rounded-[2rem] font-black transition-all flex items-center justify-center gap-4 shadow-2xl text-lg"
            aria-label="ابدأ رحلة التعلم - انتقل إلى المحتوى التعليمي"
          >
            <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-[200%] transition-transform duration-[1.5s]" />
            ابدأ رحلة التعلم
            <ArrowUpRight size={24} />
          </motion.button>

          <a href="#book" className="w-full sm:w-auto group flex items-center justify-center gap-5 text-[var(--text-primary)] hover:text-[var(--accent-purple)] transition-all py-5 px-10 border border-[var(--border-medium)] hover:border-[var(--accent-purple)] rounded-[2rem] bg-[var(--card-bg)] shadow-md hover:shadow-xl text-lg" aria-label="استكشف كتاب عقل الآلة">
            <BookIcon size={24} className="group-hover:rotate-12 transition-transform" />
            <span className="font-bold">كتاب عقل الآلة</span>
          </a>
        </div>


      </motion.div>
    </section>
  );
};

export default Hero;
