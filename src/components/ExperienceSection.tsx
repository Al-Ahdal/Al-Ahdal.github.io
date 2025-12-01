import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Translations } from "@/types/translations";

interface ExperienceSectionProps {
  t: Translations;
}

const experiences = [
  {
    role: "Senior Odoo Full Stack Developer",
    company: "CityArt IT Solutions",
    period: "Apr. 2022 – April 2024",
    location: "Saudi Arabia",
    description: "Led the full lifecycle development of Odoo ERP solutions by designing custom workflows and scalable modules. My responsibilities included implementing complex backend logic (Python/PostgreSQL) and frontend customizations (JS/OWL/XML). I also oversaw the system architecture, managed RESTful API integrations and server deployments (Linux/Docker), complex data migration and ensured code quality through consistent use of automated testing.",
    highlights: [
      "Designed and developed custom Odoo modules for enterprise clients",
      "Implemented complex backend logic with Python and PostgreSQL",
      "Created responsive frontend interfaces using JavaScript, OWL, and XML",
      "Managed RESTful API integrations and microservices architecture",
      "Orchestrated server deployments using Linux and Docker containers",
      "Led complex data migration projects with zero downtime",
      "Established automated testing pipelines for quality assurance"
    ]
  },
  {
    role: "Odoo Developer",
    company: "Smart Mind",
    period: "Mar. 2022 – Present",
    location: "Dubai, UAE",
    description: "Deep expertise in Python for backend development and Odoo customization across Enterprise, Community, and Odoo.sh platforms. Integrated Odoo with various third-party systems, created Q-Web reports, and developed robust APIs.",
    highlights: [
      "Customized Odoo modules for Warehouse, Accounting, HR, Payroll, and Fleet Management",
      "Integrated third-party systems via RESTful APIs",
      "Developed custom Q-Web reports and dashboards",
      "Managed multi-company environments and access rights",
      "Conducted Odoo version migrations and upgrades",
      "Provided client training and technical support"
    ]
  },
  {
    role: "ML & Data Science Developer",
    company: "INFOWIZ",
    period: "May 2021 – Apr. 2022",
    location: "Chandigarh, India",
    description: "Developed machine learning solutions for product recommendations and image classification systems.",
    highlights: [
      "Built product recommendation engine increasing engagement by 15%",
      "Developed deep learning model for image classification with 95% accuracy",
      "Implemented data pipelines for real-time processing",
      "Optimized ML models for production deployment"
    ]
  }
];

const ExperienceSection = ({ t }: ExperienceSectionProps) => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="font-mono text-primary">03.</span> {t.experienceTitle}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.experienceSubtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card border-border hover:border-primary transition-smooth group shadow-card hover:shadow-glow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-lg font-semibold text-primary mb-3">
                    <Briefcase className="h-5 w-5" />
                    {exp.company}
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div className="space-y-2">
                {exp.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
