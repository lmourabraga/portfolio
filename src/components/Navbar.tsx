import React, { useState } from 'react';
import { Menu, X, Code2, Mail, Globe } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentLang, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[currentLang].nav;

  const navLinks = [
    { name: t.about, href: '#about' },
    { name: t.experience, href: '#experience' },
    { name: t.skills, href: '#skills' },
    { name: t.projects, href: '#projects' },
    { name: t.articles, href: '#articles' },
    { name: t.contact, href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <nav aria-label="Main Navigation" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-brand-500 font-bold text-lg hover:opacity-95 transition-opacity">
          <Code2 className="w-6 h-6" />
          <span className="text-white">Luã Braga</span>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20 text-xs hidden sm:inline-flex">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Porto, PT</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-brand-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Side: Language Switcher & Social Icons Desktop */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language Switcher */}
          <div className="flex items-center gap-1.5 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800 text-xs font-medium text-slate-300">
            <Globe className="w-4 h-4 text-brand-400" />
            <select
              value={currentLang}
              onChange={(e) => onLanguageChange(e.target.value as Language)}
              aria-label="Select Language"
              className="bg-transparent text-white focus:outline-none cursor-pointer"
            >
              <option value="en" className="bg-slate-900 text-white">EN</option>
              <option value="pt" className="bg-slate-900 text-white">PT</option>
              <option value="fr" className="bg-slate-900 text-white">FR</option>
            </select>
          </div>

          <div className="h-4 w-px bg-slate-800" />

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/lmourabraga"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-colors"
            >
              <GithubIcon className="w-4.5 h-4.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/lmourabraga/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-colors"
            >
              <LinkedinIcon className="w-4.5 h-4.5" />
            </a>
            <a
              href="mailto:contato@lmourabraga.com"
              aria-label="Email Contact"
              className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-colors"
            >
              <Mail className="w-4.5 h-4.5" />
            </a>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <div className="flex items-center gap-1 bg-slate-900 px-2 py-1 rounded-lg border border-slate-800 text-xs text-slate-300">
            <Globe className="w-3.5 h-3.5 text-brand-400" />
            <select
              value={currentLang}
              onChange={(e) => onLanguageChange(e.target.value as Language)}
              aria-label="Select Language"
              className="bg-transparent text-white focus:outline-none"
            >
              <option value="en" className="bg-slate-900 text-white">EN</option>
              <option value="pt" className="bg-slate-900 text-white">PT</option>
              <option value="fr" className="bg-slate-900 text-white">FR</option>
            </select>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle Navigation Menu"
            className="text-slate-400 hover:text-white p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-4 border-t border-slate-800 px-3">
            <a href="https://github.com/lmourabraga" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-colors">
              <GithubIcon className="w-4.5 h-4.5" />
            </a>
            <a href="https://www.linkedin.com/in/lmourabraga/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-colors">
              <LinkedinIcon className="w-4.5 h-4.5" />
            </a>
            <a href="mailto:contato@lmourabraga.com" aria-label="Email Contact" className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-colors">
              <Mail className="w-4.5 h-4.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
