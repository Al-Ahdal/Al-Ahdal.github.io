import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Translations } from "@/types/translations";

interface ContactSectionProps {
  t: Translations;
}

const ContactSection = ({ t }: ContactSectionProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="font-mono text-primary">06.</span> {t.contactTitle}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.contactSubtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6 bg-card border-border shadow-card">
              <h3 className="text-xl font-bold mb-6">{t.getInTouch}</h3>
              
              <div className="space-y-4">
                <a 
                  href="mailto:ahmed.alahdal21@gmail.com"
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted transition-smooth group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Email</div>
                    <div className="text-sm text-muted-foreground">ahmed.alahdal21@gmail.com</div>
                  </div>
                </a>

                <a 
                  href="https://www.linkedin.com/in/ahmed-al-ahdal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted transition-smooth group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">LinkedIn</div>
                    <div className="text-sm text-muted-foreground">ahmed-al-ahdal</div>
                  </div>
                </a>

                <a 
                  href="https://github.com/Al-Ahdal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted transition-smooth group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Github className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">GitHub</div>
                    <div className="text-sm text-muted-foreground">Al-Ahdal</div>
                  </div>
                </a>
              </div>
            </Card>

            <div className="p-6 rounded-lg border border-border bg-card/50">
              <h4 className="font-semibold mb-2">Open to opportunities</h4>
              <p className="text-sm text-muted-foreground">
                Currently available for freelance projects and full-time positions. 
                Specializing in Odoo ERP implementations and custom development.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-6 bg-card border-border shadow-card">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input 
                  placeholder={t.nameLabel}
                  required
                  className="bg-background border-border"
                />
              </div>
              
              <div>
                <Input 
                  type="email"
                  placeholder={t.emailLabel}
                  required
                  className="bg-background border-border"
                />
              </div>

              <div>
                <Textarea 
                  placeholder={t.messageLabel}
                  required
                  rows={6}
                  className="bg-background border-border resize-none"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full gradient-primary text-primary-foreground shadow-glow group"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : t.sendMessage}
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
