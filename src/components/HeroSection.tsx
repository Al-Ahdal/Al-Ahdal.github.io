import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { Translations } from "@/types/translations";

interface HeroSectionProps {
  t: Translations;
}

const HeroSection = ({ t }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-8 animate-fade-in">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-mono text-muted-foreground">{t.availableForProjects}</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              {t.name}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in-up animation-delay-200 max-w-3xl mx-auto">
            {t.title}
          </p>

          <p className="text-lg text-muted-foreground mb-12 animate-fade-in-up animation-delay-400 max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
            <Button 
              size="lg" 
              className="gradient-primary text-primary-foreground shadow-glow hover:scale-105 transition-smooth group"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t.viewWork}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-border hover:bg-card group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              {t.downloadCV}
            </Button>
          </div>

          {/* Tech stack icons */}
          <div className="mt-20 animate-fade-in animation-delay-800">
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {['Python', 'JavaScript', 'PostgreSQL', 'Docker', 'AWS', 'Odoo'].map((tech) => (
                <span 
                  key={tech} 
                  className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2" />
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;
