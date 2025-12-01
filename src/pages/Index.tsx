import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import ViewCounter from "@/components/ViewCounter";
import { translations } from "@/lib/translations";

const Index = () => {
  const [currentLang, setCurrentLang] = useState<"en" | "ar">("en");
  const t = translations[currentLang];

  return (
    <div className="min-h-screen bg-background" dir={currentLang === "ar" ? "rtl" : "ltr"}>
      <Navbar currentLang={currentLang} onLanguageChange={setCurrentLang} />
      <ViewCounter currentLang={currentLang} />
      <main>
        <HeroSection t={t} />
        <SkillsSection t={t} />
        <ExperienceSection t={t} />
        <ProjectsSection t={t} />
        <EducationSection t={t} />
        <ContactSection t={t} />
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground font-mono">
              © 2024 {t.name}. {t.crafted}
            </p>
            <div className="flex items-center gap-6">
              <a 
                href="https://github.com/Al-Ahdal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/ahmed-al-ahdal/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
