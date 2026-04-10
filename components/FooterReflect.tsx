import React from 'react';
import { 
  Mail, 
  ArrowLeft, 
  ShieldCheck, 
  Twitter, 
  Youtube, 
  Linkedin, 
  Github, 
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import { motion } from 'framer-motion';

const FooterReflect = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Twitter size={18} />, href: "#", label: "Twitter", color: "hover:text-blue-400" },
    { icon: <Youtube size={18} />, href: "#", label: "Youtube", color: "hover:text-red-500" },
    { icon: <Linkedin size={18} />, href: "#", label: "Linkedin", color: "hover:text-blue-600" },
    { icon: <Github size={18} />, href: "#", label: "Github", color: "hover:text-gray-400" },
  ];

  const quickLinks = [
    { name: "الرئيسية", href: "#home" },
    { name: "أحدث الكتب", href: "#book" },
    { name: "تجارب AI", href: "#ecosystem" },
    { name: "قناة اليوتيوب", href: "#youtube" },
  ];

  const legalLinks = [
    { name: "سياسة الخصوصية", href: "#" },
    { name: "شروط الاستخدام", href: "#" },
  ];

  return (
    <footer className="pt-20 pb-10 px-6 bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] relative overflow-hidden transition-colors duration-500">
      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[var(--accent-purple)]/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Newsletter Call to Action */}
        <div className="glass-card rounded-[2.5rem] p-8 md:p-12 mb-20 border-[var(--border-subtle)] shadow-2xl overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-purple)]/5 to-[var(--accent-blue)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-right">
               <h3 className="text-2xl md:text-4xl font-black mb-4 hero-gradient tracking-tight">كن جزءاً من المستقبل التقني</h3>
               <p className="text-[var(--text-secondary)] text-sm md:text-base font-medium leading-relaxed max-w-md ml-auto">
                 انضم إلى النخبة المهتمة بتقنيات الجيل القادم، واحصل على فكرة واحدة معمقة كل يوم سبت.
               </p>
            </div>
            
            <div className="w-full">
              <div className="relative flex flex-col md:flex-row gap-2 bg-[var(--bg-primary)] p-1.5 rounded-2xl md:rounded-full border border-[var(--border-medium)] shadow-inner focus-within:border-[var(--accent-purple)] transition-all">
                <input
                  type="email"
                  placeholder="عنوان بريدك الإلكتروني"
                  className="flex-1 bg-transparent px-6 py-3.5 focus:outline-none text-[var(--text-primary)] text-right placeholder:text-[var(--text-muted)] text-sm font-medium"
                />
                <button className="bg-[var(--text-primary)] text-[var(--bg-primary)] font-black px-8 py-3.5 rounded-xl md:rounded-full hover:bg-[var(--accent-purple)] hover:text-white transition-all shadow-lg flex items-center justify-center gap-2 text-sm">
                   اشترك الآن <ArrowLeft size={16} />
                </button>
              </div>
              <div className="flex justify-end gap-4 mt-4 opacity-50">
                <span className="text-[10px] font-bold flex items-center gap-1 text-[var(--text-muted)]"><ShieldCheck size={10} /> رسائل هادفة</span>
                <span className="text-[10px] font-bold flex items-center gap-1 text-[var(--text-muted)]"><ShieldCheck size={10} /> خصوصية تامة</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 text-right pb-16">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center justify-end gap-3 mb-6">
              <span className="font-bold text-2xl text-[var(--text-primary)]">محمد لحلح</span>
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center font-bold text-white shadow-lg text-xl">م</div>
            </div>
            <p className="text-[var(--text-secondary)] text-sm md:text-base leading-relaxed font-medium max-w-sm ml-auto mb-8">
              أبسط أعقد مفاهيم الذكاء الاصطناعي، لأبني جيلاً يفهم التكنولوجيا ولا يكتفي بمجرد استهلاكها.
            </p>
            <div className="flex gap-3 justify-end">
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
          <div className="lg:col-span-3 lg:pr-12">
            <h4 className="text-[var(--text-primary)] font-black text-sm uppercase tracking-widest mb-6">روابط سريعة</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-[var(--text-secondary)] text-sm font-bold hover:text-[var(--accent-purple)] transition-colors flex items-center justify-end gap-2 group">
                    {link.name} <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4">
            <h4 className="text-[var(--text-primary)] font-black text-sm uppercase tracking-widest mb-6">تواصل مباشر</h4>
            <p className="text-[var(--text-secondary)] text-sm font-medium mb-6">لديك استشارة أو عرض تعاون؟ الباب مفتوح دائماً.</p>
            <a href="mailto:hello@lahlah.ai" className="flex items-center justify-end gap-3 bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] p-4 rounded-2xl group hover:border-[var(--accent-purple)]/50 transition-all">
              <div className="text-right">
                <div className="text-[10px] font-black text-[var(--text-muted)] uppercase">راسلني عبر</div>
                <div className="text-sm font-bold text-[var(--text-primary)]">hello@lahlah.ai</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-[var(--accent-purple)]/10 flex items-center justify-center text-[var(--accent-purple)] group-hover:bg-[var(--accent-purple)] group-hover:text-white transition-all">
                <Mail size={18} />
              </div>
            </a>
          </div>
        </div>

        {/* Copyright Line */}
        <div className="pt-8 border-t border-[var(--border-subtle)] flex flex-col md:flex-row-reverse justify-between items-center gap-6">
          <div className="text-[var(--text-muted)] text-[10px] md:text-xs font-mono tracking-wider text-right">
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
