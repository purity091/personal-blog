import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ThemeProvider } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'الرئيسية', href: '/#home' },
    { label: 'المدونة', href: '/blog' },
    { label: 'مشاريعي', href: '/projects' },
    { label: 'الكتب', href: '/books' },
    { label: 'تواصل', href: '/#social' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[10000] bg-[var(--navbar-bg)] backdrop-blur-lg border-b border-[var(--border-subtle)] h-16" role="navigation" aria-label="القائمة الرئيسية">
      <div className="max-w-6xl mx-auto px-6 h-full grid grid-cols-2 lg:grid-cols-3 items-center">
        {/* Logo and Name - Right Side */}
        <div className="flex items-center gap-3">
          <img src="/logo1.png" alt="Logo" className="w-10 h-10 object-contain" />
          <a href="/#home" className="font-bold text-lg text-[var(--text-primary)] hover:opacity-80 transition-opacity whitespace-nowrap" aria-label="محمد لحلح - الصفحة الرئيسية">
            محمد لحلح
          </a>
        </div>

        {/* Navigation Links - Centered on Desktop */}
        <div className="hidden lg:flex items-center justify-center gap-8 text-xs font-bold text-[var(--text-secondary)]" role="menubar">
          {navLinks.map((link, i) => (
            <a key={i} href={link.href} className="hover:text-[var(--text-primary)] transition-colors" role="menuitem">
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions - Left Side */}
        <div className="flex items-center justify-end gap-4">
          <ThemeProvider>
            <ThemeToggle />
          </ThemeProvider>
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-[var(--text-primary)] p-2" aria-label="القائمة">
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
            {navLinks.map((link, i) => (
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
