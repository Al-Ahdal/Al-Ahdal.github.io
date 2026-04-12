import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Translations } from "@/types/translations";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface ExperienceSectionProps {
  t: Translations;
}

const experiences = [
  {
    role: "Senior Odoo Full Stack Developer",
    roleAr: "مطور Odoo Full Stack أول",
    company: "CityArt IT Solutions",
    period: "Apr. 2022 – Apr. 2024",
    location: "Saudi Arabia",
    locationAr: "المملكة العربية السعودية",
    description: "Led the full lifecycle development of Odoo ERP solutions by designing custom workflows and scalable modules. My responsibilities included implementing complex backend logic (Python/PostgreSQL) and frontend customizations (JS/OWL/XML). I also oversaw the system architecture, managed RESTful API integrations and server deployments (Linux/Docker), complex data migration and ensured code quality through consistent use of automated testing.",
    descriptionAr: "قيادة تطوير حلول Odoo ERP بدورة حياة كاملة من خلال تصميم سير عمل مخصص ووحدات قابلة للتطوير. شملت مسؤولياتي تنفيذ المنطق الخلفي المعقد (Python/PostgreSQL) وتخصيصات الواجهة الأمامية (JS/OWL/XML). كما أشرفت على هيكل النظام وأدرت تكاملات RESTful API ونشر الخوادم (Linux/Docker) وترحيل البيانات المعقد وضمان جودة الكود من خلال الاستخدام المستمر للاختبار الآلي.",
    highlights: [
      { en: "Designed and developed custom Odoo modules for enterprise clients", ar: "تصميم وتطوير وحدات Odoo مخصصة لعملاء المؤسسات" },
      { en: "Implemented complex backend logic with Python and PostgreSQL", ar: "تنفيذ المنطق الخلفي المعقد باستخدام Python وPostgreSQL" },
      { en: "Created responsive frontend interfaces using JavaScript, OWL, and XML", ar: "إنشاء واجهات أمامية متجاوبة باستخدام JavaScript وOWL وXML" },
      { en: "Managed RESTful API integrations and microservices architecture", ar: "إدارة تكاملات RESTful API وبنية الخدمات المصغرة" },
      { en: "Orchestrated server deployments using Linux and Docker containers", ar: "تنظيم نشر الخوادم باستخدام Linux وDocker" },
      { en: "Led complex data migration projects with zero downtime", ar: "قيادة مشاريع ترحيل البيانات المعقدة بدون توقف" },
      { en: "Established automated testing pipelines for quality assurance", ar: "إنشاء خطوط اختبار آلية لضمان الجودة" }
    ]
  },
  {
    role: "Odoo Developer",
    roleAr: "مطور Odoo",
    company: "Smart Mind",
    period: "Mar. 2022 – Present",
    location: "Dubai, UAE",
    locationAr: "دبي، الإمارات",
    description: "Deep expertise in Python for backend development and Odoo customization across Enterprise, Community, and Odoo.sh platforms. Integrated Odoo with various third-party systems, created Q-Web reports, and developed robust APIs.",
    descriptionAr: "خبرة عميقة في Python لتطوير الخلفية وتخصيص Odoo عبر منصات Enterprise و Community و Odoo.sh. تكامل Odoo مع أنظمة خارجية متعددة وإنشاء تقارير Q-Web وتطوير APIs قوية.",
    highlights: [
      { en: "Customized Odoo modules for Warehouse, Accounting, HR, Payroll, and Fleet Management", ar: "تخصيص وحدات Odoo للمستودعات والمحاسبة والموارد البشرية والرواتب وإدارة الأسطول" },
      { en: "Integrated third-party systems via RESTful APIs", ar: "تكامل الأنظمة الخارجية عبر RESTful APIs" },
      { en: "Developed custom Q-Web reports and dashboards", ar: "تطوير تقارير Q-Web ولوحات معلومات مخصصة" },
      { en: "Managed multi-company environments and access rights", ar: "إدارة بيئات متعددة الشركات وصلاحيات الوصول" },
      { en: "Conducted Odoo version migrations and upgrades", ar: "إجراء ترحيلات وترقيات إصدارات Odoo" },
      { en: "Provided client training and technical support", ar: "تقديم تدريب العملاء والدعم التقني" }
    ]
  },
  {
    role: "ML & Data Science Developer",
    roleAr: "مطور تعلم آلي وعلم بيانات",
    company: "INFOWIZ",
    period: "May 2021 – Apr. 2022",
    location: "Chandigarh, India",
    locationAr: "شانديغار، الهند",
    description: "Developed machine learning solutions for product recommendations and image classification systems.",
    descriptionAr: "تطوير حلول التعلم الآلي لأنظمة توصية المنتجات وتصنيف الصور.",
    highlights: [
      { en: "Built product recommendation engine increasing engagement by 15%", ar: "بناء محرك توصية منتجات زاد التفاعل بنسبة 15%" },
      { en: "Developed deep learning model for image classification with 95% accuracy", ar: "تطوير نموذج تعلم عميق لتصنيف الصور بدقة 95%" },
      { en: "Implemented data pipelines for real-time processing", ar: "تنفيذ خطوط بيانات للمعالجة الفورية" },
      { en: "Optimized ML models for production deployment", ar: "تحسين نماذج التعلم الآلي للنشر الإنتاجي" }
    ]
  }
];

const ExperienceSection = ({ t }: ExperienceSectionProps) => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  const isAr = t.name === "أحمد الأهدل";

  return (
    <section id="experience" className="py-16 md:py-24 relative" ref={ref}>
      <div className={`container mx-auto px-6 ${isVisible ? "scroll-visible" : "scroll-hidden"}`}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t.experienceTitle}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            {t.experienceSubtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card border-border hover:border-primary transition-smooth group shadow-card hover:shadow-glow relative overflow-hidden"
            >
              {/* Accent line */}
              <div className="absolute top-0 left-0 w-1 h-full gradient-primary" />
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {isAr ? exp.roleAr : exp.role}
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
                      {isAr ? exp.locationAr : exp.location}
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {isAr ? exp.descriptionAr : exp.description}
              </p>

              <div className="space-y-2">
                {exp.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{isAr ? highlight.ar : highlight.en}</span>
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
