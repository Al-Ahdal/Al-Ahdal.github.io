import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LanguageSwitcherProps {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
}

const LanguageSwitcher = ({ currentLang, onLanguageChange }: LanguageSwitcherProps) => {
  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-muted-foreground" />
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onLanguageChange(currentLang === "en" ? "ar" : "en")}
        className="font-mono text-xs hover:text-primary"
      >
        {currentLang === "en" ? "العربية" : "English"}
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
