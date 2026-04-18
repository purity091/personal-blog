import {
  Mail,
  ExternalLink
} from 'lucide-react';
import { motion } from 'framer-motion';

const FooterReflect = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>, href: "https://twitter.com/MohLahlah", label: "Twitter", color: "hover:text-blue-400" },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 8-6 4 6 4V8Z" /><rect width="14" height="12" x="2" y="6" rx="2" ry="2" /></svg>, href: "https://youtube.com/@MohLahlah", label: "Youtube", color: "hover:text-red-500" },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>, href: "https://linkedin.com/in/MohLahlah", label: "Linkedin", color: "hover:text-blue-600" },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>, href: "https://github.com/MohLahlah", label: "Github", color: "hover:text-gray-400" },
  ];

  const quickLinks = [
    { name: "الرئيسية", href: "/#home" },
    { name: "أحدث الكتب", href: "/#book" },
    { name: "قناة اليوتيوب", href: "/#youtube" },
  ];

  const legalLinks = [
    { name: "سياسة الخصوصية", href: "/privacy" },
    { name: "شروط الاستخدام", href: "/terms" },
  ];

  return (
    <footer dir="rtl" className="footer-reflect-section pt-20 pb-10 px-6 bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] relative overflow-hidden transition-colors duration-500">
      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[var(--accent-purple)]/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto  relative z-10">
        {/* Main Footer Grid */}
        <div className="footer-main-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          {/* Brand Column */}
          <div className="footer-column-brand lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center font-bold text-white shadow-lg text-xl">م</div>
              <span className="font-bold text-2xl text-[var(--text-primary)]">محمد لحلح</span>
            </div>
            <p className="text-[var(--text-secondary)] text-sm md:text-base leading-relaxed font-medium max-w-sm mb-8">
              أبسط أعقد مفاهيم الذكاء الاصطناعي، لأبني جيلاً يفهم التكنولوجيا ولا يكتفي بمجرد استهلاكها.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -3 }}
                  className={`w-10 h-10 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)] transition-all ${social.color}`}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-column-links lg:col-span-3 lg:pr-12">
            <h4 className="text-[var(--text-primary)] font-black text-sm uppercase tracking-widest mb-6">روابط سريعة</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-[var(--text-secondary)] text-sm font-bold hover:text-[var(--accent-purple)] transition-colors flex items-center gap-2 group">
                    {link.name} <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-column-contact lg:col-span-4">
            <h4 className="text-[var(--text-primary)] font-black text-sm uppercase tracking-widest mb-6">تواصل مباشر</h4>
            <p className="text-[var(--text-secondary)] text-sm font-medium mb-6">لديك استشارة أو عرض تعاون؟ الباب مفتوح دائماً.</p>
            <a href="mailto:hello@lahlah.ai" className="flex items-center gap-3 bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] p-4 rounded-2xl group hover:border-[var(--accent-purple)]/50 transition-all">
              <div className="w-10 h-10 rounded-full bg-[var(--accent-purple)]/10 flex items-center justify-center text-[var(--accent-purple)] group-hover:bg-[var(--accent-purple)] group-hover:text-white transition-all">
                <Mail size={18} />
              </div>
              <div>
                <div className="text-[10px] font-black text-[var(--text-muted)] uppercase">راسلني عبر</div>
                <div className="text-sm font-bold text-[var(--text-primary)]">hello@lahlah.ai</div>
              </div>
            </a>
          </div>
        </div>

        {/* Copyright Line */}
        <div className="footer-copyright-bar pt-8 border-t border-[var(--border-subtle)] flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[var(--text-muted)] text-[10px] md:text-xs font-mono tracking-wider">
            © {currentYear} جميع الحقوق محفوظة • تم التطوير بكلات وشغف بالذكاء الاصطناعي
          </div>
          <div className="flex gap-6">
            {legalLinks.map((link, i) => (
              <a key={i} href={link.href} className="text-[var(--text-muted)] text-[10px] md:text-xs font-bold hover:text-[var(--text-primary)] transition-colors">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterReflect;
