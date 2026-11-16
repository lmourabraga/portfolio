import React from 'react';
import { Code2 } from 'lucide-react';
import { profileData } from '../data/profile';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = translations[lang].footer;

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-2 text-white font-bold">
          <Code2 className="w-5 h-5 text-brand-500" />
          <span>{profileData.name}</span>
          <span className="text-xs text-slate-500 font-normal">© {new Date().getFullYear()} {t.rights}</span>
        </div>

        <div className="flex items-center gap-1 text-sm text-slate-400">
          <span>{t.builtWith}</span>
        </div>

      </div>
    </footer>
  );
};
