import { ArrowUpLeft, Calendar, Clock, BookOpen, ChevronLeft, ArrowRight } from 'lucide-react';

interface AstroArticle {
  slug: string;
  data: {
    title: string;
    description: string;
    date: Date;
    category: string;
    tags: string[];
    readingTime?: number;
    featured?: boolean;
    image?: {
      src: string;
      alt: string;
    };
  };
}

const FeaturedArticles = ({ articles = [] }: { articles?: AstroArticle[] }) => {
  const displayArticles = (articles || []).slice(0, 6);

  return (
    <section className="py-12 md:py-16 px-6 relative bg-[var(--bg-primary)]" dir="rtl">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Streamlined Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-[var(--accent-purple)] rounded-full"></div>
            <h2 className="text-xl md:text-2xl font-black text-[var(--text-primary)]">المقالات المختارة</h2>
          </div>
          <a href="/blog" className="text-xs font-black text-[var(--text-muted)] hover:text-[var(--accent-purple)] transition-colors flex items-center gap-2">
            الأرشيف الكامل
            <ChevronLeft size={14} />
          </a>
        </div>

        {/* Magazine Feed Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-2">
          {displayArticles.map((post, i) => (
            <div key={post.slug}>
              <a
                href={`/blog/${post.slug}`}
                className="group flex items-center gap-4 p-2 rounded-xl hover:bg-white/[0.03] transition-all duration-300 border-b border-white/5 last:border-0 lg:border-b-0 lg:py-3"
              >
                {/* Compact Thumbnail */}
                <div className="relative shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden border border-white/10 group-hover:border-[var(--accent-purple)]/50 transition-all duration-500 shadow-lg">
                   <img 
                    src={post.data.image?.src || 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=200'} 
                    alt={post.data.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[8px] font-black text-[var(--accent-purple)] uppercase tracking-widest">{post.data.category}</span>
                    <span className="w-0.5 h-0.5 rounded-full bg-white/20"></span>
                    <span className="text-[8px] font-medium text-[var(--text-muted)] uppercase tracking-tighter">
                       {new Date(post.data.date).toLocaleDateString('ar-EG-u-nu-latn', { month: 'short', day: 'numeric' })}
                    </span>
                  </div>
                  <h3 className="text-sm md:text-base font-black text-[var(--text-primary)] leading-tight group-hover:text-[var(--accent-purple)] transition-colors truncate">
                    {post.data.title}
                  </h3>
                </div>

                <div className="hidden sm:flex w-8 h-8 rounded-full bg-white/5 items-center justify-center opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0">
                  <ArrowUpLeft size={14} className="text-[var(--accent-purple)]" />
                </div>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedArticles;
