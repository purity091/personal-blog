import React from 'react';

const FooterReflect = () => (
  <footer className="py-12 md:py-20 px-6 border-t border-[var(--border-subtle)]">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-right">
      <div>
        <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center font-bold text-white">م</div>
          <span className="font-bold text-lg text-[var(--text-primary)]">محمد لحلح</span>
        </div>
        <p className="text-[var(--text-secondary)] text-[10px] md:text-sm max-w-xs leading-relaxed">
          أبسط المفاهيم، لأبني جيلاً يفهم التكنولوجيا ولا يكتفي بمجرد استهلاكها.
        </p>
      </div>
      <div className="text-[var(--text-muted)] text-[10px] font-mono tracking-widest">
        © {new Date().getFullYear()} جميع الحقوق محفوظة
      </div>
    </div>
  </footer>
);

export default FooterReflect;
