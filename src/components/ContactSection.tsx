import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, MapPin } from 'lucide-react';
import { profileData } from '../data/profile';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const t = translations[lang].contact;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900/50 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t.title}</h2>
          <p className="text-slate-400">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
          
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl space-y-8">
            <h3 className="text-2xl font-bold text-white">{t.infoTitle}</h3>
            
            <div className="space-y-6 text-slate-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">{t.emailMe}</p>
                  <a href={`mailto:${profileData.email}`} className="text-white font-semibold hover:text-brand-400 transition-colors">
                    {profileData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">{t.location}</p>
                  <p className="text-white font-semibold">{profileData.location}</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800">
              <p className="text-xs text-slate-400 mb-4 font-medium uppercase tracking-wider">{t.socialProfiles}</p>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/lmourabraga/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/lmourabraga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-brand-500/10 border border-brand-500/20 rounded-full flex items-center justify-center text-brand-400 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-white">{t.successTitle}</h4>
                <p className="text-slate-300">
                  {t.successText}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-2">{t.sendMessageTitle}</h3>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">{t.nameLabel}</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">{t.emailLabel}</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">{t.messageLabel}</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors resize-none"
                    placeholder="Hello Luã, let's talk about..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer shadow-lg font-medium"
                >
                  <span>{t.sendButton}</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
