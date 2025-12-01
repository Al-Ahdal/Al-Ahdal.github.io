import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";
import { Translations } from "@/types/translations";

interface ProjectsSectionProps {
  t: Translations;
}

const projects = [
  {
    title: "Reayt: Medical Services Platform",
    description: "An integrated platform connecting patients with a network of medical service providers, featuring appointment scheduling, EMR integration, and telemedicine capabilities.",
    tags: ["Odoo", "Healthcare", "Platform", "API Integration"],
    link: "http://reayt.com/",
    category: "Healthcare",
    details: {
      overview: "Reayt is a comprehensive medical services platform that bridges the gap between patients and healthcare providers through a unified digital ecosystem.",
      features: [
        "Multi-provider network integration",
        "Real-time appointment scheduling",
        "Electronic Medical Records (EMR) system",
        "Telemedicine video consultations",
        "Prescription management",
        "Insurance claim processing"
      ],
      technologies: ["Odoo 16 Enterprise", "Python", "PostgreSQL", "WebRTC", "REST APIs"],
      impact: "Served 10,000+ patients across 50+ medical facilities"
    }
  },
  {
    title: "Glob-Care: Hospital Management",
    description: "A comprehensive Odoo-powered Hospital Management System covering EMR, billing, pharmacy, laboratory, and patient management with real-time reporting.",
    tags: ["Odoo", "ERP", "Healthcare", "EMR"],
    link: "https://glob-care.com/",
    category: "Healthcare",
    details: {
      overview: "Glob-Care is a full-featured hospital management system designed to streamline operations across all departments of modern healthcare facilities.",
      features: [
        "Integrated Electronic Medical Records",
        "Automated billing and insurance management",
        "Pharmacy inventory and prescription tracking",
        "Laboratory information system (LIS)",
        "Staff scheduling and payroll",
        "Real-time analytics and reporting dashboards"
      ],
      technologies: ["Odoo 17 Enterprise", "Python", "PostgreSQL", "BI Tools", "DICOM Integration"],
      impact: "Managing operations for 5+ hospitals with 500+ beds capacity"
    }
  },
  {
    title: "EazyCare: Clinic Management",
    description: "A streamlined clinic management app for appointments, patient records, and simplified billing with mobile-first design approach.",
    tags: ["Odoo", "SaaS", "EMR", "Mobile"],
    link: "https://eazycare.app/",
    category: "Healthcare",
    details: {
      overview: "EazyCare is a cloud-based SaaS solution designed specifically for small to medium-sized clinics, offering essential management features with an intuitive mobile interface.",
      features: [
        "Mobile-first appointment booking",
        "Patient records management",
        "Simplified billing system",
        "SMS and email notifications",
        "Multi-clinic support",
        "Cloud backup and sync"
      ],
      technologies: ["Odoo 15 Community", "Progressive Web App", "Mobile SDK", "Cloud Infrastructure"],
      impact: "Used by 100+ clinics serving 50,000+ patients monthly"
    }
  },
  {
    title: "My-Care: Health Monitoring",
    description: "A patient-centric platform for monitoring vital signs, medication reminders, and tele-consultations with real-time data synchronization.",
    tags: ["Odoo Backend", "Patient App", "IoT"],
    link: "https://my-care.io/",
    category: "Healthcare",
    details: {
      overview: "My-Care empowers patients to take control of their health through continuous monitoring, smart reminders, and direct access to healthcare providers.",
      features: [
        "IoT device integration for vital signs",
        "Medication reminder system",
        "Virtual consultations",
        "Health metrics tracking",
        "Emergency alerts",
        "Family sharing features"
      ],
      technologies: ["Odoo Backend API", "React Native", "IoT Integration", "WebSocket"],
      impact: "Monitoring health metrics for 25,000+ active users"
    }
  },
  {
    title: "Fomco: Furniture Manufacturing ERP",
    description: "An end-to-end ERP for furniture manufacturing, from raw materials management to production planning and sales analytics.",
    tags: ["Odoo", "Manufacturing", "Production", "Supply Chain"],
    link: "#",
    category: "Industrial",
    details: {
      overview: "Fomco is a comprehensive manufacturing ERP system tailored for the furniture industry, managing the entire production lifecycle from raw materials to finished goods.",
      features: [
        "Bill of Materials (BOM) management",
        "Production planning and scheduling",
        "Inventory and warehouse management",
        "Quality control checkpoints",
        "Sales order processing",
        "Financial reporting and analytics"
      ],
      technologies: ["Odoo 16 Enterprise", "Manufacturing Module", "Advanced Inventory", "MRP"],
      impact: "Increased production efficiency by 30% and reduced waste by 20%"
    }
  },
  {
    title: "Jo-Spa: Beauty Center Management",
    description: "A custom solution for managing appointments, staff scheduling, inventory, and client relations for beauty spas and wellness centers.",
    tags: ["Odoo", "Services", "Booking", "CRM"],
    link: "https://jospa-sa.com/",
    category: "Services",
    details: {
      overview: "Jo-Spa is a specialized management system for beauty spas and wellness centers, combining appointment scheduling, inventory management, and customer relationship tools.",
      features: [
        "Online appointment booking",
        "Staff calendar and commission tracking",
        "Membership and package management",
        "Inventory management for products",
        "Customer loyalty programs",
        "Marketing automation"
      ],
      technologies: ["Odoo 15 Enterprise", "Website Integration", "POS Module", "CRM"],
      impact: "Serving 15+ spa locations with 10,000+ active members"
    }
  },
  {
    title: "Real Estate & Construction ERP",
    description: "Comprehensive system managing properties, sales, leases, and construction project lifecycles within Odoo.",
    tags: ["Odoo", "Real Estate", "Construction", "Project Management"],
    link: "#",
    category: "Industrial",
    details: {
      overview: "A complete real estate management system handling property listings, sales contracts, lease management, and construction project tracking.",
      features: [
        "Property portfolio management",
        "Sales and lease contract automation",
        "Construction project tracking",
        "Budget and cost management",
        "Document management system",
        "Client portal for property viewing"
      ],
      technologies: ["Odoo 17 Enterprise", "Project Module", "Document Management", "Portal"],
      impact: "Managing 500+ properties and 50+ ongoing construction projects"
    }
  },
  {
    title: "Legal Case Management System",
    titleAr: "نظام إدارة القضايا القانونية",
    description: "Integrated system for managing legal cases, court sessions, power of attorney, and billing for law firms.",
    descriptionAr: "نظام متكامل لإدارة القضايا القانونية، الجلسات، التوكيلات، والفواتير للمكاتب القانونية.",
    tags: ["Odoo", "Legal", "Case Management", "Billing"],
    tagsAr: ["أودو", "قانوني", "إدارة القضايا", "فوترة"],
    link: "#",
    category: "Specialized",
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
      impact: "Supporting 20+ law firms with 5,000+ active cases",
      impactAr: "دعم 20+ مكتب قانوني مع 5,000+ قضية نشطة"
    }
  },
  {
    title: "Import & Export Logistics System",
    titleAr: "نظام لوجستيات الاستيراد والتصدير",
    description: "Solutions for managing shipping operations, customs clearance, and inventory for import-export companies.",
    descriptionAr: "حلول لإدارة عمليات الشحن، التخليص الجمركي، والمخزون لشركات الاستيراد والتصدير.",
    tags: ["Odoo", "Logistics", "Import/Export", "Customs"],
    tagsAr: ["أودو", "لوجستيات", "استيراد/تصدير", "جمارك"],
    link: "#",
    category: "Industrial",
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
      impact: "Processing 1,000+ shipments monthly across 10+ countries",
      impactAr: "معالجة 1,000+ شحنة شهريًا عبر 10+ دول"
    }
  }
];

const ProjectsSection = ({ t }: ProjectsSectionProps) => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <>
      <section id="projects" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="font-mono text-primary">04.</span> {t.projectsTitle}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t.projectsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary transition-smooth group shadow-card hover:shadow-glow overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Category badge */}
                <div className="mb-4">
                  <Badge variant="outline" className="border-primary text-primary">
                    {project.category}
                  </Badge>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-20">
            {[
              { label: t.projectsDelivered, value: "25+" },
              { label: t.industriesServed, value: "10+" },
              { label: t.clientSatisfaction, value: "95%" },
              { label: t.yearsExperience, value: "3+" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold font-mono text-primary mb-2">
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
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <Badge variant="outline" className="border-primary text-primary mb-3">
                      {selectedProject.category}
                    </Badge>
                    <DialogTitle className="text-2xl font-bold mb-2">
                      {selectedProject.title}
                    </DialogTitle>
                    <p className="text-muted-foreground">
                      {selectedProject.description}
                    </p>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-6 mt-6">
                {/* Overview */}
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-3">Overview</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.details.overview}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-3">Key Features</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedProject.details.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.details.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="text-lg font-bold text-foreground mb-2">Impact</h4>
                  <p className="text-muted-foreground">{selectedProject.details.impact}</p>
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
