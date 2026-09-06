import { type MouseEvent } from 'react';
import { motion, useSpring } from 'framer-motion';
import {
  Binary,
  Target,
  Cpu,
  Network,
  Sparkles
} from 'lucide-react';

const FullWidthDecor = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    {/* Atmospheric Glows */}
    <div className="absolute top-[-10%] start-[-5%] w-[30%] h-[30%] bg-purple-500/5 blur-[100px] rounded-full animate-pulse" />
    <div className="absolute bottom-[0%] end-[-5%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />

    {/* Tech Texture */}
    <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#8b5cf6_0.5px,transparent_0.5px)] [background-size:24px_24px]" />

    {/* Subtle Vector Lines */}
    <svg className="absolute inset-0 w-full h-full opacity-[0.05]" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path d="M 0 50 Q 25 45 50 50 T 100 50" fill="none" stroke="currentColor" strokeWidth="0.1" className="text-purple-500" />
      <path d="M 0 80 Q 50 85 100 80" fill="none" stroke="currentColor" strokeWidth="0.05" className="text-blue-500" />
    </svg>
  </div>
);

const Hero = () => {
  const mouseX = useSpring(0, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 50 });

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) / 100;
    const moveY = (clientY - window.innerHeight / 2) / 100;
    mouseX.set(moveX);
    mouseY.set(moveY);
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-[var(--bg-primary)] transition-colors duration-500"
      dir="rtl"
    >
      <FullWidthDecor />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Content Section */}
          <div className="space-y-10">

            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl lg:text-5xl font-black text-[var(--text-primary)] leading-[1.2] tracking-tight"
              >
                أفكّك <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500">مفاهيم الذكاء الصنعي</span> في محاولة لبناء الأثر.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-[var(--text-secondary)] font-medium leading-relaxed max-w-xl"
              >
                أنا <span className="text-[var(--text-primary)] font-black">محمد لحلح</span>، طالب علم ومهندس برمجيات، مهتم في الذكاء الاصطناعي وأحب مشاركة رحتلي في هذا المجال.
              </motion.p>
            </div>

            {/* Strategic Goal Card - Medium Size */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative group max-w-md"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
              <div className="relative flex items-center gap-5 p-6 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-subtle)] backdrop-blur-xl shadow-xl">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <Target size={24} />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[9px] font-black text-purple-600 uppercase tracking-widest">الرؤية الاستراتيجية</span>
                  <p className="text-lg md:text-xl font-black text-[var(--text-primary)] leading-tight">
                    هدفي الوصول إلى <span className="text-purple-600">100 ألف</span> متعلم عربي
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Visual Showcase - Medium Size */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]">

              {/* Dynamic Aura */}
              <div className="absolute inset-[10%] bg-gradient-to-br from-purple-500/10 to-blue-500/10 blur-[80px] rounded-full" />

              {/* Profile Orb */}
              <div className="relative w-full h-full rounded-full p-4 bg-[var(--card-bg)] backdrop-blur-3xl border border-[var(--border-subtle)] shadow-2xl overflow-hidden ring-[8px] ring-[var(--bg-secondary)]">
                <div className="w-full h-full rounded-full overflow-hidden bg-[var(--bg-tertiary)] grayscale-[10%] hover:grayscale-0 transition-all duration-700">
                  <img
                    src="/mohamed-lahlah.jpeg"
                    alt="محمد لحلح"
                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                  />
                </div>
              </div>

              {/* Floating Badges - Medium */}
              {[
                { icon: Cpu, pos: 'top-[0%] start-[0%]', delay: 0.5 },
                { icon: Network, pos: 'top-[10%] end-[-5%]', delay: 0.7 },
                { icon: Binary, pos: 'bottom-[15%] end-[0%]', delay: 0.9 },
                { icon: Sparkles, pos: 'bottom-[5%] start-[10%]', delay: 1.1 }
              ].map((badge, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: badge.delay, type: 'spring' }}
                  className={`absolute ${badge.pos} z-20`}
                >
                  <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-2xl bg-[var(--card-bg)] shadow-xl border border-[var(--border-subtle)] flex items-center justify-center text-purple-500">
                    <badge.icon size={20} />
                  </div>
                </motion.div>
              ))}

              {/* Scanning Orbit */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-4%] border border-[var(--border-medium)] rounded-full pointer-events-none"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)]" />
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
