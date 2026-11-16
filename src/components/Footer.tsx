import React from 'react';
import { Code2, ExternalLink } from 'lucide-react';
import { profileData } from '../data/profile';
import { GithubIcon } from './SocialIcons';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';

interface FooterProps {
  lang: Language;
}

const currentYear = new Date().getFullYear();

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = translations[lang].footer;

  return (
    <footer className="bg-slate-950/80 backdrop-blur-md border-t border-slate-800 py-6 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
        
        <div className="flex items-center gap-2 text-white font-bold">
          <Code2 className="w-4 h-4 text-brand-500" />
          <span>{profileData.name}</span>
          <span className="text-xs text-slate-400 font-normal">© {currentYear}</span>
        </div>

        <div className="flex items-center gap-2 text-slate-300">
          <GithubIcon className="w-4 h-4 text-brand-400" />
          <a
            href="https://github.com/lmourabraga/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-400 transition-colors inline-flex items-center gap-1 font-medium"
          >
            <span>{t.cloneMsg}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </footer>
  );
};
