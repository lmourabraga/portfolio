import React from 'react';
import { ExternalLink } from 'lucide-react';
import { profileData } from '../data/profile';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';

interface ProjectsGridProps {
  lang: Language;
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ lang }) => {
  const t = translations[lang].projects;

  return (
    <section id="projects" className="py-24 bg-slate-900/20 border-t border-slate-800/50 backdrop-blur-[2px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t.title}</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {profileData.projects.map((project) => (
            <div key={project.id} className="bg-slate-900/70 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between hover:border-slate-700 transition-all shadow-xl group backdrop-blur-sm">
              <div>
                <h3 className="text-xl font-bold text-white mb-3 pt-2">{project.title}</h3>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-0.5 rounded-md bg-slate-950/50 text-slate-400 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-sm">
                  <span className="text-slate-400 font-medium">{t.enterprise}</span>
                  <span className="text-brand-400 flex items-center gap-1 font-medium group-hover:translate-x-1 transition-transform">
                    <span>{t.explore}</span>
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
