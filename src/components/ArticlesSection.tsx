import React, { useEffect, useState } from 'react';
import { Calendar, ArrowRight, Rss, ChevronLeft, ChevronRight } from 'lucide-react';
import type { ArticleItem } from '../types';
import { fetchWordPressPosts } from '../services/wordpressService';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';

interface ArticlesSectionProps {
  lang: Language;
}

export const ArticlesSection: React.FC<ArticlesSectionProps> = ({ lang }) => {
  const [articles, setArticles] = useState<ArticleItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const t = translations[lang].articles;

  const itemsPerPage = 3;

  useEffect(() => {
    fetchWordPressPosts()
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load articles:", err);
        setLoading(false);
      });
  }, []);

  const totalPages = Math.ceil(articles.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToSlide = (pageIndex: number) => {
    setCurrentIndex(pageIndex);
  };

  // Group articles into pages for the sliding effect
  const pages = [];
  for (let i = 0; i < articles.length; i += itemsPerPage) {
    pages.push(articles.slice(i, i + itemsPerPage));
  }

  return (
    <section id="articles" className="py-24 bg-transparent border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t.title}</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12 text-slate-400">{t.loading}</div>
        ) : (
          <div className="relative px-0 sm:px-12">
            {/* Navigation Arrows - Outside the overflow hidden container */}
            {articles.length > itemsPerPage && (
              <>
                <button
                  onClick={prevSlide}
                  aria-label="Previous articles"
                  className="hidden sm:flex absolute -left-2 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-slate-900 border border-slate-700 items-center justify-center text-white hover:bg-slate-800 hover:border-brand-500 transition-all shadow-xl"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next articles"
                  className="hidden sm:flex absolute -right-2 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-slate-900 border border-slate-700 items-center justify-center text-white hover:bg-slate-800 hover:border-brand-500 transition-all shadow-xl"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Carousel Content Wrapper with proper overflow */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {pages.map((page, pageIdx) => (
                  <div key={pageIdx} className="grid grid-cols-1 md:grid-cols-3 gap-8 min-w-full px-1">
                    {page.map((article) => (
                      <article key={article.id} className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-all shadow-xl group h-full backdrop-blur-sm">
                        <div>
                          {/* Featured Thumbnail Placeholder above title */}
                          <div className="relative h-44 w-full bg-slate-950 rounded-xl overflow-hidden mb-6 border border-slate-800/80 group-hover:border-slate-700 transition-colors flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-slate-950 to-emerald-500/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-brand-400 shadow-inner">
                                <Rss className="w-5 h-5" />
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                            <div className="flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5 text-brand-500" />
                              <span>{article.date}</span>
                            </div>
                            <span className="px-2.5 py-0.5 rounded-full bg-slate-800/80 text-brand-400 border border-slate-700/60 font-medium text-[11px]">
                              Article
                            </span>
                          </div>

                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors line-clamp-2">
                            {article.title}
                          </h3>
                          <p className="text-slate-300 text-sm mb-6 leading-relaxed line-clamp-3">
                            {article.excerpt}
                          </p>
                        </div>

                        <div className="pt-4 border-t border-slate-800/80 flex justify-end">
                          <a
                            href={article.link || `#article-${article.slug}`}
                            className="inline-flex items-center gap-1.5 text-brand-400 font-medium text-sm group-hover:translate-x-1 transition-transform"
                          >
                            <span>{t.read}</span>
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        </div>
                      </article>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Navigation Buttons */}
            {articles.length > itemsPerPage && (
              <div className="flex sm:hidden items-center justify-center gap-4 mt-6">
                <button
                  onClick={prevSlide}
                  aria-label="Previous articles"
                  className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-white"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next articles"
                  className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-white"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Carousel Pagination Dots */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2.5 mt-12">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-2.5 rounded-full transition-all ${
                      currentIndex === index
                        ? 'w-8 bg-white shadow-md'
                        : 'w-2.5 bg-white/30 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Read More Articles Button */}
        <div className="text-center mt-12">
          <a
            href="#articles"
            onClick={(e) => {
              e.preventDefault();
              alert("Articles history page coming soon!");
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-medium transition-all shadow-lg group hover:border-brand-500"
          >
            <span>{t.readMore}</span>
            <ArrowRight className="w-4 h-4 text-brand-400 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};
