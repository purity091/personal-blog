import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--navbar-bg)] backdrop-blur-lg border-b border-[var(--border-subtle)] h-16" role="navigation" aria-label="القائمة الرئيسية">
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg" aria-hidden="true">م</div>
          <a href="#home" className="font-bold text-lg text-[var(--text-primary)] hover:opacity-80 transition-opacity" aria-label="محمد لحلح - الصفحة الرئيسية">
            محمد لحلح
          </a>
        </div>

        <div className="hidden lg:flex items-center gap-8 text-xs font-bold text-[var(--text-secondary)]" role="menubar">
          <a href="#home" className="hover:text-[var(--text-primary)] transition-colors" role="menuitem">الرئيسية</a>
          <a href="#book" className="hover:text-[var(--text-primary)] transition-colors" role="menuitem">كتابي</a>
          <a href="#social" className="hover:text-[var(--text-primary)] transition-colors" role="menuitem">تواصل</a>
          <a href="#deep-learning" className="hover:text-[var(--text-primary)] transition-colors" role="menuitem">العلوم</a>
          <a href="#youtube" className="hover:text-[var(--text-primary)] transition-colors" role="menuitem">يوتيوب</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block bg-[var(--text-primary)] text-[var(--bg-primary)] px-5 py-2 rounded-full text-[10px] font-bold hover:bg-[var(--accent-purple)] hover:text-white transition-all shadow-sm">
            النشرة البريدية
          </button>
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-[var(--text-primary)] p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 right-0 bg-[var(--dropdown-bg)] backdrop-blur-2xl border-b border-[var(--border-subtle)] p-8 lg:hidden flex flex-col gap-6 text-right"
          >
            {[
              { label: 'الرئيسية', href: '#home' },
              { label: 'كتابي', href: '#book' },
              { label: 'تواصل', href: '#social' },
              { label: 'العلوم', href: '#deep-learning' },
              { label: 'يوتيوب', href: '#youtube' }
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold text-[var(--text-secondary)] hover:text-purple-500"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
