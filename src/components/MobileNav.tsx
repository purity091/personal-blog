import { motion } from 'framer-motion';
import { Home, BookOpen, Book, Youtube, Share2 } from 'lucide-react';

const MobileNav = () => {
  const navItems = [
    { label: 'الرئيسية', icon: <Home size={20} />, href: '/#home' },
    { label: 'المدونة', icon: <BookOpen size={20} />, href: '/blog' },
    { label: 'كتابي', icon: <Book size={20} />, href: '/#book' },
    { label: 'يوتيوب', icon: <Youtube size={20} />, href: '/#youtube' },
    { label: 'تواصل', icon: <Share2 size={20} />, href: '/#social' },
  ];

  return (
    <div className="lg:hidden fixed bottom-6 left-0 right-0 z-[10001] px-4 pointer-events-none">
      <motion.nav 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
        className="max-w-md mx-auto bg-[var(--navbar-bg)] backdrop-blur-xl border border-[var(--border-subtle)] rounded-2xl shadow-2xl pointer-events-auto overflow-hidden"
      >
        <div className="flex items-center justify-around py-3 px-2">
          {navItems.map((item, index) => (
            <a 
              key={index} 
              href={item.href}
              className="flex flex-col items-center gap-1 text-[var(--text-secondary)] hover:text-[var(--accent-purple)] transition-colors group relative px-3"
            >
              <div className="p-1 rounded-lg group-hover:bg-[var(--accent-purple)]/10 transition-colors">
                {item.icon}
              </div>
              <span className="text-[10px] font-bold">{item.label}</span>
              
              {/* Active Indicator (subtle) */}
              <motion.div 
                className="absolute -bottom-1 w-1 h-1 rounded-full bg-[var(--accent-purple)] opacity-0 group-hover:opacity-100"
                layoutId="activeTab"
              />
            </a>
          ))}
        </div>
      </motion.nav>
    </div>
  );
};

export default MobileNav;
