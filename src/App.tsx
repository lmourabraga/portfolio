import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ProjectsGrid } from './components/ProjectsGrid';
import { ArticlesSection } from './components/ArticlesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { updateSeoMeta } from './utils/seo';
import type { Language } from './data/translations';

export function App() {
  const [lang, setLang] = useState<Language>('en');

  useEffect(() => {
    updateSeoMeta({
      title: "Luã Braga — Software Engineer & Frontend Specialist",
      description: "Portfolio of Luã Braga, Software Engineer with 15 years of experience specializing in React, TypeScript, and modern web architectures.",
      canonicalUrl: "https://lmourabraga.com"
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-brand-500 selection:text-white">
      <Navbar currentLang={lang} onLanguageChange={setLang} />
      <main>
        <Hero lang={lang} />
        <ExperienceTimeline lang={lang} />
        <SkillsMatrix lang={lang} />
        <ProjectsGrid lang={lang} />
        <ArticlesSection lang={lang} />
        <ContactSection lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}

export default App;
