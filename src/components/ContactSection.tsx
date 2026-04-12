import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Translations } from "@/types/translations";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface ContactSectionProps {
  t: Translations;
}

const ContactSection = ({ t }: ContactSectionProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const subject = encodeURIComponent(`Portfolio Contact: ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

    window.location.href = `mailto:ahmed.alahdal21@gmail.com?subject=${subject}&body=${body}`;

    toast({
      title: t.messageSent,
      description: t.messageSentDesc,
    });
    setIsSubmitting(false);
    form.reset();
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative" ref={ref}>
      <div className={`container mx-auto px-6 ${isVisible ? "scroll-visible" : "scroll-hidden"}`}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t.contactTitle}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            {t.contactSubtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6 bg-card border-border shadow-card">
              <h3 className="text-xl font-bold mb-6">{t.getInTouch}</h3>
              
              <div className="space-y-4">
                <a 
                  href="mailto:ahmed.alahdal21@gmail.com"
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted transition-smooth group"
                >
                  <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">{t.emailLabel2}</div>
                    <div className="text-sm text-muted-foreground">ahmed.alahdal21@gmail.com</div>
                  </div>
                </a>

                <a 
                  href="https://www.linkedin.com/in/ahmed-al-ahdal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted transition-smooth group"
                >
                  <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">{t.linkedinLabel}</div>
                    <div className="text-sm text-muted-foreground">ahmed-al-ahdal</div>
                  </div>
                </a>

                <a 
                  href="https://github.com/Al-Ahdal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted transition-smooth group"
                >
                  <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Github className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">{t.githubLabel}</div>
                    <div className="text-sm text-muted-foreground">Al-Ahdal</div>
                  </div>
                </a>
              </div>
            </Card>

            <div className="p-6 rounded-lg border border-primary/20 bg-primary/5">
              <h4 className="font-semibold mb-2">{t.openToOpportunities}</h4>
              <p className="text-sm text-muted-foreground">
                {t.openToDesc}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-6 bg-card border-border shadow-card">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input 
                  placeholder={t.nameLabel}
                  name="name"
                  required
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              
              <div>
                <Input 
                  type="email"
                  placeholder={t.emailLabel}
                  name="email"
                  required
                  className="bg-background border-border focus:border-primary"
                />
              </div>

              <div>
                <Textarea 
                  placeholder={t.messageLabel}
                  name="message"
                  required
                  rows={6}
                  className="bg-background border-border focus:border-primary resize-none"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full gradient-primary text-primary-foreground shadow-glow group"
                disabled={isSubmitting}
              >
                {isSubmitting ? t.sending : t.sendMessage}
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
