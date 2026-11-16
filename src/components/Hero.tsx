import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { profileData } from '../data/profile';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = translations[lang].hero;

  return (
    <section id="about" className="relative pt-20 pb-28 overflow-hidden bg-transparent">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Profile Avatar */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-emerald-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-250 animate-pulse"></div>
              <img
                src="https://avatars.githubusercontent.com/u/6719938?v=4"
                alt={profileData.name}
                className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-2 border-slate-800 shadow-2xl"
              />
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6 mt-4">
            {t.greeting} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-emerald-200">{profileData.name}</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed">
            {profileData.summary}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#experience"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-medium transition-all"
            >
              <Download className="w-4 h-4 text-brand-400" />
              <span>{t.exploreCareer}</span>
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-medium transition-all shadow-lg shadow-brand-600/20"
            >
              <span>{t.getInTouch}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
