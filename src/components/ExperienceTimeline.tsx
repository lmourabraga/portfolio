import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { profileData } from '../data/profile';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';

interface ExperienceTimelineProps {
  lang: Language;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ lang }) => {
  const t = translations[lang].experience;

  return (
    <section id="experience" className="py-24 bg-slate-900/30 border-t border-slate-800/50 backdrop-blur-[2px]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t.title}</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="relative pl-16 sm:pl-28">
          {/* Centralized Timeline Line */}
          <div className="absolute left-[32px] sm:left-[56px] top-4 bottom-4 w-px bg-slate-800" />

          <div className="space-y-12">
            {profileData.experiences.map((exp, index) => {
              const startYear = exp.period.match(/\d{4}/)?.[0] || exp.period;
              return (
                <div key={exp.id} className="relative group">
                  {/* Timeline Year Badge & Pulse on Top */}
                  <div className="absolute -left-16 sm:-left-28 top-6 w-16 sm:w-24 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs font-bold text-brand-400 flex flex-col items-center justify-center gap-1 shadow-xl group-hover:border-brand-500 transition-colors z-10">
                    {index === 0 && (
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                    )}
                    <span>{startYear}</span>
                  </div>

                  <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-slate-700 transition-all shadow-xl backdrop-blur-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        <p className="text-brand-400 font-medium text-lg">{exp.company}</p>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1 text-xs sm:text-sm text-slate-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-brand-500" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-brand-500" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700/60"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
