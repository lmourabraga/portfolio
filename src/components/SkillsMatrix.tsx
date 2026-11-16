import React from 'react';
import { Cpu, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/profile';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';

interface SkillsMatrixProps {
  lang: Language;
}

export const SkillsMatrix: React.FC<SkillsMatrixProps> = ({ lang }) => {
  const t = translations[lang].skills;

  return (
    <section id="skills" className="py-24 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t.title}</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {profileData.skills.map((cat) => (
            <div key={cat.category} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">{cat.category}</h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {cat.items.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-slate-300 bg-slate-950/50 px-3 py-2 rounded-lg border border-slate-800/80">
                    <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
