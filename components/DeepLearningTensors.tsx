import React from 'react';
import { motion } from 'framer-motion';

const DeepLearningTensors = () => (
  <section id="deep-learning" className="py-20 md:py-40 px-6 relative bg-[var(--bg-primary)] overflow-hidden border-t border-[var(--border-subtle)] transition-colors duration-300">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
      <div className="order-2 md:order-1 relative h-[300px] md:h-[400px] flex items-center justify-center">
        <div className="relative w-40 h-40 md:w-64 md:h-64 transform rotate-x-12 rotate-y-12 rotate-z-12 group">
          {[0, 15, 30, 45].map((offset) => (
            <motion.div
              key={offset}
              animate={{ translateZ: [offset, offset + 10, offset], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, delay: offset / 20 }}
              className="absolute inset-0 border border-[var(--accent-blue)]/30 bg-[var(--accent-blue)]/5 backdrop-blur-sm rounded-lg"
              style={{ transform: `translateZ(${offset}px) translateY(${offset/2}px)` }}
            >
              <div className="grid grid-cols-8 grid-rows-8 h-full w-full p-2 gap-0.5 md:gap-1">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div key={i} className="w-0.5 h-0.5 md:w-1 md:h-1 bg-[var(--accent-blue)]/20 rounded-full" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="order-1 md:order-2 text-center md:text-right">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-[var(--text-primary)]">التعلّم العميق: أبعاد متعددة</h2>
        <p className="text-[var(--text-secondary)] text-sm md:text-lg leading-relaxed mb-6 md:mb-8 font-medium">
          كيف يتم تحويل "الصورة" أو "الكلمة" إلى أرقام تفهمها الآلة؟ الموقع يشرح لك رحلة البيانات عبر مصفوفات الأرقام الضخمة.
        </p>
        <div className="flex gap-3 justify-center md:justify-end">
          <div className="px-3 py-1.5 bg-[var(--accent-blue)]/10 border border-[var(--accent-blue)]/20 rounded-lg text-[var(--accent-blue)] text-[10px] font-bold">الموترات (Tensors)</div>
          <div className="px-3 py-1.5 bg-[var(--accent-purple)]/10 border border-[var(--accent-purple)]/20 rounded-lg text-[var(--accent-purple)] text-[10px] font-bold">متعدد الأبعاد</div>
        </div>
      </div>
    </div>
  </section>
);

export default DeepLearningTensors;
