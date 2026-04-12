import { Card } from "@/components/ui/card";
import { GraduationCap, BookOpen, ExternalLink } from "lucide-react";
import { Translations } from "@/types/translations";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface EducationSectionProps {
  t: Translations;
}

const education = [
  {
    degree: "Master's Degree in Machine Learning & Artificial Intelligence",
    degreeAr: "ماجستير في التعلم الآلي والذكاء الاصطناعي",
    institution: "Lovely Professional University",
    location: "Punjab, India",
    locationAr: "البنجاب، الهند",
    period: "2020 - 2022",
  },
  {
    degree: "Bachelor's Degree in Computer Science & Engineering",
    degreeAr: "بكالوريوس في علوم الحاسوب والهندسة",
    institution: "Lovely Professional University",
    location: "Punjab, India",
    locationAr: "البنجاب، الهند",
    period: "2016 - 2020",
  },
];

const publications = [
  {
    title: "Monitoring Cardiovascular Problems in Heart Patients Using Machine Learning",
    titleAr: "مراقبة مشاكل القلب والأوعية الدموية لدى مرضى القلب باستخدام التعلم الآلي",
    type: "Research Paper",
    typeAr: "ورقة بحثية",
    description: "A comprehensive study on applying machine learning algorithms to monitor and predict cardiovascular issues in heart patients.",
    descriptionAr: "دراسة شاملة حول تطبيق خوارزميات التعلم الآلي لمراقبة والتنبؤ بمشاكل القلب والأوعية الدموية لدى مرضى القلب.",
  },
  {
    title: "Indian Sign Language Recognition System for Dynamic Signs",
    titleAr: "نظام التعرف على لغة الإشارة الهندية للإشارات الديناميكية",
    type: "Research Paper",
    typeAr: "ورقة بحثية",
    description: "Development of a real-time recognition system for dynamic Indian Sign Language gestures using deep learning techniques.",
    descriptionAr: "تطوير نظام تعرف فوري لإشارات لغة الإشارة الهندية الديناميكية باستخدام تقنيات التعلم العميق.",
  },
];

const EducationSection = ({ t }: EducationSectionProps) => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  const isAr = t.name === "أحمد الأهدل";

  return (
    <section id="education" className="py-16 md:py-24 bg-muted/30" ref={ref}>
      <div className={`container mx-auto px-6 ${isVisible ? "scroll-visible" : "scroll-hidden"}`}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t.educationTitle}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            {t.educationSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">{t.educationLabel}</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="p-6 bg-card border-border hover:border-primary transition-smooth group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-foreground mb-2">
                        {isAr ? edu.degreeAr : edu.degree}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-1">
                        {edu.institution}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>{isAr ? edu.locationAr : edu.location}</span>
                        <span className="text-primary font-mono">{edu.period}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">{t.publicationsLabel}</h3>
            </div>
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <Card key={index} className="p-6 bg-card border-border hover:border-accent transition-smooth group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <BookOpen className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="inline-block px-2 py-1 rounded bg-accent/10 text-accent text-xs font-mono mb-3">
                        {isAr ? pub.typeAr : pub.type}
                      </div>
                      <h4 className="text-base font-bold text-foreground mb-2 leading-tight">
                        {isAr ? pub.titleAr : pub.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                        {isAr ? pub.descriptionAr : pub.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
              <a
                href="https://scholar.google.com/citations?user=S1RNmqMAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary font-semibold hover:underline group"
              >
                {t.viewAllPublications}
                <ExternalLink className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
