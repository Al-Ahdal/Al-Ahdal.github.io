import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import ViewCounter from "@/components/ViewCounter";
import ScrollToTop from "@/components/ScrollToTop";
import { translations } from "@/lib/translations";
import { Github, Linkedin, Mail } from "lucide-react";

const Index = () => {
  const [currentLang, setCurrentLang] = useState<"en" | "ar">("en");
  const t = translations[currentLang];

  return (
    <div className="min-h-screen bg-background" dir={currentLang === "ar" ? "rtl" : "ltr"}>
      <Navbar currentLang={currentLang} onLanguageChange={setCurrentLang} />
      <ScrollToTop />
      <main>
        <HeroSection t={t} />
        <SkillsSection t={t} />
        <ExperienceSection t={t} />
        <ProjectsSection t={t} />
        <EducationSection t={t} />
        <ContactSection t={t} />
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border py-8 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-5">
              <a 
                href="mailto:ahmed.alahdal21@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/Al-Ahdal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/ahmed-al-ahdal/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <ViewCounter currentLang={currentLang} />
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} {t.name}. {t.crafted}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
