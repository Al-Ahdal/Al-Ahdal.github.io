import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";
import { Translations } from "@/types/translations";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface ProjectsSectionProps {
  t: Translations;
}

const projects = [
  {
    title: "Reayt: Medical Services Platform",
    titleAr: "ريت: منصة الخدمات الطبية",
    description: "An integrated platform connecting patients with a network of medical service providers, featuring appointment scheduling, EMR integration, and telemedicine capabilities.",
    descriptionAr: "منصة متكاملة تربط المرضى بشبكة من مقدمي الخدمات الطبية، مع ميزات حجز المواعيد وتكامل السجلات الطبية والاستشارات عن بُعد.",
    tags: ["Odoo", "Healthcare", "Platform", "API Integration"],
    tagsAr: ["Odoo", "رعاية صحية", "منصة", "تكامل API"],
    link: "http://reayt.com/",
    category: "Healthcare",
    categoryAr: "رعاية صحية",
    details: {
      overview: "Reayt is a comprehensive medical services platform that bridges the gap between patients and healthcare providers through a unified digital ecosystem.",
      overviewAr: "ريت منصة خدمات طبية شاملة تسد الفجوة بين المرضى ومقدمي الرعاية الصحية من خلال منظومة رقمية موحدة.",
      features: [
        "Multi-provider network integration",
        "Real-time appointment scheduling",
        "Electronic Medical Records (EMR) system",
        "Telemedicine video consultations",
        "Prescription management",
        "Insurance claim processing"
      ],
      featuresAr: [
        "تكامل شبكة متعددة مقدمي الخدمة",
        "حجز المواعيد الفوري",
        "نظام السجلات الطبية الإلكترونية",
        "استشارات طبية بالفيديو",
        "إدارة الوصفات الطبية",
        "معالجة مطالبات التأمين"
      ],
      technologies: ["Odoo 16 Enterprise", "Python", "PostgreSQL", "WebRTC", "REST APIs"],
    }
  },
  {
    title: "Glob-Care: Hospital Management",
    titleAr: "جلوب كير: إدارة المستشفيات",
    description: "A comprehensive Odoo-powered Hospital Management System covering EMR, billing, pharmacy, laboratory, and patient management with real-time reporting.",
    descriptionAr: "نظام شامل لإدارة المستشفيات مدعوم بـ Odoo يغطي السجلات الطبية والفوترة والصيدلية والمختبر وإدارة المرضى مع تقارير فورية.",
    tags: ["Odoo", "ERP", "Healthcare", "EMR"],
    tagsAr: ["Odoo", "ERP", "رعاية صحية", "سجلات طبية"],
    link: "https://glob-care.com/",
    category: "Healthcare",
    categoryAr: "رعاية صحية",
    details: {
      overview: "Glob-Care is a full-featured hospital management system designed to streamline operations across all departments of modern healthcare facilities.",
      overviewAr: "جلوب كير نظام إدارة مستشفيات متكامل مصمم لتبسيط العمليات عبر جميع أقسام المنشآت الصحية الحديثة.",
      features: [
        "Integrated Electronic Medical Records",
        "Automated billing and insurance management",
        "Pharmacy inventory and prescription tracking",
        "Laboratory information system (LIS)",
        "Staff scheduling and payroll",
        "Real-time analytics and reporting dashboards"
      ],
      featuresAr: [
        "سجلات طبية إلكترونية متكاملة",
        "إدارة الفوترة والتأمين الآلية",
        "تتبع مخزون الصيدلية والوصفات",
        "نظام معلومات المختبر",
        "جدولة الموظفين والرواتب",
        "لوحات تحليلات وتقارير فورية"
      ],
      technologies: ["Odoo 17 Enterprise", "Python", "PostgreSQL", "BI Tools", "DICOM Integration"],
    }
  },
  {
    title: "EazyCare: Clinic Management",
    titleAr: "إيزي كير: إدارة العيادات",
    description: "A streamlined clinic management app for appointments, patient records, and simplified billing with mobile-first design approach.",
    descriptionAr: "تطبيق مبسط لإدارة العيادات للمواعيد وسجلات المرضى والفوترة المبسطة بتصميم يركز على الهاتف أولاً.",
    tags: ["Odoo", "SaaS", "EMR", "Mobile"],
    tagsAr: ["Odoo", "SaaS", "سجلات طبية", "موبايل"],
    link: "https://eazycare.app/",
    category: "Healthcare",
    categoryAr: "رعاية صحية",
    details: {
      overview: "EazyCare is a cloud-based SaaS solution designed specifically for small to medium-sized clinics, offering essential management features with an intuitive mobile interface.",
      overviewAr: "إيزي كير حل سحابي SaaS مصمم خصيصاً للعيادات الصغيرة والمتوسطة يقدم ميزات إدارة أساسية بواجهة موبايل بديهية.",
      features: [
        "Mobile-first appointment booking",
        "Patient records management",
        "Simplified billing system",
        "SMS and email notifications",
        "Multi-clinic support",
        "Cloud backup and sync"
      ],
      featuresAr: [
        "حجز مواعيد بتصميم موبايل أولاً",
        "إدارة سجلات المرضى",
        "نظام فوترة مبسط",
        "إشعارات رسائل وبريد إلكتروني",
        "دعم متعدد العيادات",
        "نسخ احتياطي ومزامنة سحابية"
      ],
      technologies: ["Odoo 15 Community", "Progressive Web App", "Mobile SDK", "Cloud Infrastructure"],
    }
  },
  {
    title: "Sami-Care: Men's Grooming Salon",
    titleAr: "عناية سامي: صالون حلاقة رجالي",
    description: "A men's grooming and relaxation salon offering barber services, skincare, massage, and Moroccan bath with an integrated booking and management system.",
    descriptionAr: "صالون حلاقة رجالي واسترخاء يقدم خدمات الحلاقة والعناية بالبشرة والمساج والحمام المغربي مع نظام حجز وإدارة متكامل.",
    tags: ["Odoo", "Booking", "Salon", "POS"],
    tagsAr: ["Odoo", "حجز", "صالون", "POS"],
    link: "https://www.sami-care.com/",
    category: "Services",
    categoryAr: "خدمات",
    details: {
      overview: "Sami-Care is a men's grooming salon in Jeddah offering barber services, beard styling, skincare treatments, massage, and Moroccan bath. The Odoo-based system manages bookings, POS, and customer records.",
      overviewAr: "عناية سامي صالون حلاقة رجالي في جدة يقدم خدمات الحلاقة وتصفيف اللحى والعناية بالبشرة والمساج والحمام المغربي. نظام Odoo يدير الحجز ونقاط البيع وسجلات العملاء.",
      features: [
        "Haircut and beard styling booking",
        "Skincare treatments scheduling",
        "Massage and Moroccan bath reservations",
        "Point of sale integration",
        "Customer loyalty and records",
        "Staff scheduling and management"
      ],
      featuresAr: [
        "حجز الحلاقة وتصفيف اللحى",
        "جدولة جلسات العناية بالبشرة",
        "حجز المساج والحمام المغربي",
        "تكامل نقطة البيع",
        "ولاء العملاء والسجلات",
        "جدولة الموظفين وإدارتهم"
      ],
      technologies: ["Odoo 17", "Python", "PostgreSQL", "POS Module", "Booking System"],
    }
  },
  {
    title: "Fomco: Furniture Manufacturing ERP",
    titleAr: "فومكو: ERP تصنيع الأثاث",
    description: "An end-to-end ERP for furniture manufacturing, from raw materials management to production planning and sales analytics.",
    descriptionAr: "نظام ERP شامل لتصنيع الأثاث من إدارة المواد الخام إلى تخطيط الإنتاج وتحليلات المبيعات.",
    tags: ["Odoo", "Manufacturing", "Production", "Supply Chain"],
    tagsAr: ["Odoo", "تصنيع", "إنتاج", "سلسلة توريد"],
    link: "#",
    category: "Industrial",
    categoryAr: "صناعي",
    details: {
      overview: "Fomco is a comprehensive manufacturing ERP system tailored for the furniture industry, managing the entire production lifecycle from raw materials to finished goods.",
      overviewAr: "فومكو نظام ERP تصنيعي شامل مخصص لصناعة الأثاث يدير دورة الإنتاج الكاملة من المواد الخام إلى المنتجات النهائية.",
      features: [
        "Bill of Materials (BOM) management",
        "Production planning and scheduling",
        "Inventory and warehouse management",
        "Quality control checkpoints",
        "Sales order processing",
        "Financial reporting and analytics"
      ],
      featuresAr: [
        "إدارة قائمة المواد (BOM)",
        "تخطيط وجدولة الإنتاج",
        "إدارة المخزون والمستودعات",
        "نقاط مراقبة الجودة",
        "معالجة أوامر البيع",
        "التقارير المالية والتحليلات"
      ],
      technologies: ["Odoo 16 Enterprise", "Manufacturing Module", "Advanced Inventory", "MRP"],
    }
  },
  {
    title: "Jo-Spa: Beauty Center Management",
    titleAr: "جو سبا: إدارة مراكز التجميل",
    description: "A custom solution for managing appointments, staff scheduling, inventory, and client relations for beauty spas and wellness centers.",
    descriptionAr: "حل مخصص لإدارة المواعيد وجدولة الموظفين والمخزون وعلاقات العملاء لمراكز التجميل والسبا.",
    tags: ["Odoo", "Services", "Booking", "CRM"],
    tagsAr: ["Odoo", "خدمات", "حجز", "CRM"],
    link: "https://jospa-sa.com/",
    category: "Services",
    categoryAr: "خدمات",
    details: {
      overview: "Jo-Spa is a specialized management system for beauty spas and wellness centers, combining appointment scheduling, inventory management, and customer relationship tools.",
      overviewAr: "جو سبا نظام إدارة متخصص لمراكز التجميل والسبا يجمع بين حجز المواعيد وإدارة المخزون وأدوات علاقات العملاء.",
      features: [
        "Online appointment booking",
        "Staff calendar and commission tracking",
        "Membership and package management",
        "Inventory management for products",
        "Customer loyalty programs",
        "Marketing automation"
      ],
      featuresAr: [
        "حجز مواعيد إلكتروني",
        "تقويم الموظفين وتتبع العمولات",
        "إدارة العضويات والباقات",
        "إدارة مخزون المنتجات",
        "برامج ولاء العملاء",
        "أتمتة التسويق"
      ],
      technologies: ["Odoo 15 Enterprise", "Website Integration", "POS Module", "CRM"],
    }
  },
  {
    title: "Real Estate & Construction ERP",
    titleAr: "ERP العقارات والإنشاءات",
    description: "Comprehensive system managing properties, sales, leases, and construction project lifecycles within Odoo.",
    descriptionAr: "نظام شامل لإدارة العقارات والمبيعات والإيجارات ودورة حياة مشاريع البناء ضمن Odoo.",
    tags: ["Odoo", "Real Estate", "Construction", "Project Management"],
    tagsAr: ["Odoo", "عقارات", "إنشاءات", "إدارة مشاريع"],
    link: "#",
    category: "Industrial",
    categoryAr: "صناعي",
    details: {
      overview: "A complete real estate management system handling property listings, sales contracts, lease management, and construction project tracking.",
      overviewAr: "نظام إدارة عقارية كامل يتعامل مع قوائم العقارات وعقود البيع وإدارة الإيجارات وتتبع مشاريع البناء.",
      features: [
        "Property portfolio management",
        "Sales and lease contract automation",
        "Construction project tracking",
        "Budget and cost management",
        "Document management system",
        "Client portal for property viewing"
      ],
      featuresAr: [
        "إدارة محفظة العقارات",
        "أتمتة عقود البيع والإيجار",
        "تتبع مشاريع البناء",
        "إدارة الميزانية والتكاليف",
        "نظام إدارة المستندات",
        "بوابة العملاء لعرض العقارات"
      ],
      technologies: ["Odoo 17 Enterprise", "Project Module", "Document Management", "Portal"],
    }
  },
  {
    title: "Legal Case Management System",
    titleAr: "نظام إدارة القضايا القانونية",
    description: "Integrated system for managing legal cases, court sessions, power of attorney, and billing for law firms.",
    descriptionAr: "نظام متكامل لإدارة القضايا القانونية والجلسات والتوكيلات والفواتير للمكاتب القانونية.",
    tags: ["Odoo", "Legal", "Case Management", "Billing"],
    tagsAr: ["Odoo", "قانوني", "إدارة القضايا", "فوترة"],
    link: "#",
    category: "Specialized",
    categoryAr: "متخصص",
    details: {
      overview: "A specialized legal practice management system designed for law firms to track cases, manage client relationships, and handle billing.",
      overviewAr: "نظام متخصص لإدارة الممارسة القانونية مصمم للمكاتب القانونية لتتبع القضايا وإدارة علاقات العملاء والفوترة.",
      features: [
        "Case and matter management",
        "Court session scheduling",
        "Power of attorney tracking",
        "Time and billing management",
        "Document templates and storage",
        "Client communication portal"
      ],
      featuresAr: [
        "إدارة القضايا والملفات",
        "جدولة جلسات المحكمة",
        "تتبع التوكيلات",
        "إدارة الوقت والفوترة",
        "قوالب وتخزين المستندات",
        "بوابة التواصل مع العملاء"
      ],
      technologies: ["Odoo 16 Enterprise", "Document Management", "Custom Workflows", "Portal"],
    }
  },
  {
    title: "Import & Export Logistics System",
    titleAr: "نظام لوجستيات الاستيراد والتصدير",
    description: "Solutions for managing shipping operations, customs clearance, and inventory for import-export companies.",
    descriptionAr: "حلول لإدارة عمليات الشحن، التخليص الجمركي، والمخزون لشركات الاستيراد والتصدير.",
    tags: ["Odoo", "Logistics", "Import/Export", "Customs"],
    tagsAr: ["Odoo", "لوجستيات", "استيراد/تصدير", "جمارك"],
    link: "#",
    category: "Industrial",
    categoryAr: "صناعي",
    details: {
      overview: "A comprehensive logistics management system for import-export businesses, handling shipments, customs documentation, and inventory across multiple warehouses.",
      overviewAr: "نظام شامل لإدارة اللوجستيات لشركات الاستيراد والتصدير، يتعامل مع الشحنات ووثائق الجمارك والمخزون عبر مستودعات متعددة.",
      features: [
        "Shipment tracking and management",
        "Customs clearance documentation",
        "Multi-warehouse inventory",
        "Freight cost calculation",
        "Container management",
        "International shipping integrations"
      ],
      featuresAr: [
        "تتبع وإدارة الشحنات",
        "وثائق التخليص الجمركي",
        "مخزون متعدد المستودعات",
        "حساب تكاليف الشحن",
        "إدارة الحاويات",
        "تكامل الشحن الدولي"
      ],
      technologies: ["Odoo 17 Enterprise", "Advanced Inventory", "API Integrations", "Multi-warehouse"],
    }
  }
];

const ProjectsSection = ({ t }: ProjectsSectionProps) => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  const isAr = t.name === "أحمد الأهدل";

  return (
    <>
      <section id="projects" className="py-16 md:py-24 relative" ref={ref}>
        <div className={`container mx-auto px-6 ${isVisible ? "scroll-visible" : "scroll-hidden"}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              {t.projectsTitle}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              {t.projectsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary transition-smooth group shadow-card hover:shadow-glow overflow-hidden cursor-pointer relative"
                onClick={() => setSelectedProject(project)}
              >
                {/* Category badge */}
                <div className="mb-4">
                  <Badge variant="outline" className="border-primary text-primary">
                    {isAr ? (project.categoryAr || project.category) : project.category}
                  </Badge>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {isAr ? (project.titleAr || project.title) : project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                  {isAr ? (project.descriptionAr || project.description) : project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {(isAr ? (project.tagsAr || project.tags) : project.tags).map((tag, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-2 py-1 rounded bg-primary/10 text-primary font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                  >
                    {t.viewDetails}
                  </Button>
                  {project.link !== "#" && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:text-primary"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.link, "_blank");
                      }}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mt-12 md:mt-20">
            {[
              { label: t.projectsDelivered, value: "25+" },
              { label: t.industriesServed, value: "10+" },
              { label: t.clientSatisfaction, value: "95%" },
              { label: t.yearsExperience, value: "3+" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-4">
                <div className="text-2xl md:text-4xl font-bold font-mono text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto mx-4 md:mx-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <Badge variant="outline" className="border-primary text-primary mb-3">
                      {isAr ? (selectedProject.categoryAr || selectedProject.category) : selectedProject.category}
                    </Badge>
                    <DialogTitle className="text-2xl font-bold mb-2">
                      {isAr ? (selectedProject.titleAr || selectedProject.title) : selectedProject.title}
                    </DialogTitle>
                    <p className="text-muted-foreground">
                      {isAr ? (selectedProject.descriptionAr || selectedProject.description) : selectedProject.description}
                    </p>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-6 mt-6">
                {/* Overview */}
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-3">{t.overview}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {isAr ? (selectedProject.details.overviewAr || selectedProject.details.overview) : selectedProject.details.overview}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-3">{t.keyFeatures}</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {(isAr ? (selectedProject.details.featuresAr || selectedProject.details.features) : selectedProject.details.features).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-3">{t.technologiesUsed}</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.details.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Link */}
                {selectedProject.link !== "#" && (
                  <div className="flex justify-center pt-4">
                    <Button
                      className="gradient-primary text-primary-foreground shadow-glow"
                      onClick={() => window.open(selectedProject.link, "_blank")}
                    >
                      {t.viewProject}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectsSection;
