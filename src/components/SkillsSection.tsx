import { Card } from "@/components/ui/card";
import { Code2, Database, Leaf, Server } from "lucide-react";
import { Translations } from "@/types/translations";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface SkillsSectionProps {
  t: Translations;
}

const skillCategories = [
  {
    icon: Leaf,
    titleKey: "skillOdooPlatform" as const,
    skills: [
      { name: "Odoo Versions", nameAr: "إصدارات Odoo", value: "14, 15, 16, 17, 18" },
      { name: "Deployment", nameAr: "النشر والتوزيع", value: "Enterprise, Community, Odoo.sh" },
      { name: "Customization", nameAr: "التخصيص", value: "Custom Modules, Workflows" },
      { name: "Integration", nameAr: "التكامل", value: "Third-party APIs, RESTful Services" }
    ]
  },
  {
    icon: Code2,
    titleKey: "skillFrontend" as const,
    skills: [
      { name: "JavaScript", nameAr: "JavaScript", value: "ES6+, OWL Framework" },
      { name: "XML/QWeb", nameAr: "XML/QWeb", value: "Custom Reports, Views" },
      { name: "UI/UX", nameAr: "تصميم الواجهات", value: "Responsive Design, Accessibility" },
      { name: "Frameworks", nameAr: "أُطر العمل", value: "React, Vue.js" }
    ]
  },
  {
    icon: Database,
    titleKey: "skillBackend" as const,
    skills: [
      { name: "Python", nameAr: "Python", value: "Django, Flask, FastAPI" },
      { name: "PostgreSQL", nameAr: "PostgreSQL", value: "Optimization, Migration" },
      { name: "ORM", nameAr: "ORM", value: "Odoo ORM, SQLAlchemy" },
      { name: "Data", nameAr: "البيانات", value: "ETL, Complex Migrations" }
    ]
  },
  {
    icon: Server,
    titleKey: "skillDevops" as const,
    skills: [
      { name: "Cloud", nameAr: "الحوسبة السحابية", value: "AWS, Azure, GCP" },
      { name: "Containers", nameAr: "الحاويات", value: "Docker, Kubernetes" },
      { name: "CI/CD", nameAr: "CI/CD", value: "Jenkins, GitLab CI" },
      { name: "Linux", nameAr: "Linux", value: "Ubuntu, CentOS, Nginx" }
    ]
  }
];

const competencies = [
  { en: "Agile/SCRUM", ar: "أجايل/سكروم" },
  { en: "Project Management", ar: "إدارة المشاريع" },
  { en: "Technical Leadership", ar: "القيادة التقنية" },
  { en: "Code Review", ar: "مراجعة الكود" },
  { en: "Documentation", ar: "التوثيق" },
  { en: "Client Training", ar: "تدريب العملاء" },
  { en: "Problem Solving", ar: "حل المشكلات" },
  { en: "System Architecture", ar: "هندسة الأنظمة" }
];

const SkillsSection = ({ t }: SkillsSectionProps) => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="skills" className="py-16 md:py-24 relative bg-gradient-dark" ref={ref}>
      <div className={`container mx-auto px-6 ${isVisible ? "scroll-visible" : "scroll-hidden"}`}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t.skillsTitle}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            {t.skillsSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary transition-smooth group shadow-card"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">
                    {t[category.titleKey]}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <p className="text-xs text-muted-foreground mt-0.5">{skill.value}</p>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional competencies */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap gap-3 justify-center max-w-4xl">
            {competencies.map((comp) => (
              <span 
                key={comp.en}
                className="px-4 py-2 rounded-full bg-card border border-border text-sm font-mono text-muted-foreground hover:border-primary hover:text-primary transition-smooth cursor-default"
              >
                {comp.en}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
