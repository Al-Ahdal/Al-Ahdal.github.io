import { Card } from "@/components/ui/card";
import { Code2, Database, Leaf, Server } from "lucide-react";
import { Translations } from "@/types/translations";

interface SkillsSectionProps {
  t: Translations;
}

const skillCategories = [
  {
    icon: Leaf,
    title: "Odoo Platform Expertise",
    skills: [
      { name: "Odoo Versions", value: "14, 15, 16, 17, 18" },
      { name: "Deployment", value: "Enterprise, Community, Odoo.sh" },
      { name: "Customization", value: "Custom Modules, Workflows" },
      { name: "Integration", value: "Third-party APIs, RESTful Services" }
    ]
  },
  {
    icon: Code2,
    title: "Frontend Development",
    skills: [
      { name: "JavaScript", value: "ES6+, OWL Framework" },
      { name: "XML/QWeb", value: "Custom Reports, Views" },
      { name: "UI/UX", value: "Responsive Design, Accessibility" },
      { name: "Frameworks", value: "React, Vue.js" }
    ]
  },
  {
    icon: Database,
    title: "Backend & Database",
    skills: [
      { name: "Python", value: "Django, Flask, FastAPI" },
      { name: "PostgreSQL", value: "Optimization, Migration" },
      { name: "ORM", value: "Odoo ORM, SQLAlchemy" },
      { name: "Data", value: "ETL, Complex Migrations" }
    ]
  },
  {
    icon: Server,
    title: "DevOps & Infrastructure",
    skills: [
      { name: "Cloud", value: "AWS, Azure, GCP" },
      { name: "Containers", value: "Docker, Kubernetes" },
      { name: "CI/CD", value: "Jenkins, GitLab CI" },
      { name: "Linux", value: "Ubuntu, CentOS, Nginx" }
    ]
  }
];

const SkillsSection = ({ t }: SkillsSectionProps) => {
  return (
    <section id="skills" className="py-24 relative bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="font-mono text-primary">02.</span> {t.skillsTitle}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.skillsSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary transition-smooth group shadow-card"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{skill.value}</p>
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
            {[
              "Agile/SCRUM",
              "Project Management",
              "Technical Leadership",
              "Code Review",
              "Documentation",
              "Client Training",
              "Problem Solving",
              "System Architecture"
            ].map((competency) => (
              <span 
                key={competency}
                className="px-4 py-2 rounded-full bg-card border border-border text-sm font-mono text-muted-foreground hover:border-primary hover:text-primary transition-smooth"
              >
                {competency}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
