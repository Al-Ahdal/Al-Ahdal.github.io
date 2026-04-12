import { Button } from "@/components/ui/button";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { Translations } from "@/types/translations";

interface HeroSectionProps {
  t: Translations;
}

const techStack = [
  { name: "Python" },
  { name: "JavaScript" },
  { name: "PostgreSQL" },
  { name: "Docker" },
  { name: "AWS" },
  { name: "Odoo" },
];

const HeroSection = ({ t }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-12">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse animation-delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-8 animate-fade-in">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-mono text-muted-foreground">{t.availableForProjects}</span>
          </div>

          {/* Main heading */}
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-200">
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              {t.name}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-2xl text-foreground font-semibold mb-4 animate-fade-in-up animation-delay-300 max-w-3xl mx-auto">
            {t.title}
          </p>

          <p className="text-base md:text-lg text-muted-foreground mb-10 md:mb-12 animate-fade-in-up animation-delay-400 max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-500">
            <Button 
              size="lg" 
              className="gradient-primary text-primary-foreground shadow-glow hover:scale-105 transition-smooth group"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t.viewWork}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a 
              href="/cv.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary/30 hover:border-primary hover:bg-primary/5 group"
              >
                <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                {t.downloadCV}
              </Button>
            </a>
          </div>

          {/* Tech stack */}
          <div className="mt-12 md:mt-20 animate-fade-in animation-delay-700">
            <p className="text-xs text-muted-foreground mb-4 uppercase tracking-widest">Tech Stack</p>
            <div className="flex flex-wrap justify-center items-center gap-3">
              {techStack.map((tech) => (
                <span 
                  key={tech.name}
                  className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors cursor-default"
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <ChevronDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
