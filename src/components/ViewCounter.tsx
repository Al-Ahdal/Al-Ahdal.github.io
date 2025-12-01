import { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import { translations } from "@/lib/translations";

interface ViewCounterProps {
  currentLang: "en" | "ar";
}

const ViewCounter = ({ currentLang }: ViewCounterProps) => {
  const [viewCount, setViewCount] = useState<number>(0);
  const t = translations[currentLang];

  useEffect(() => {
    // Get current count from localStorage
    const currentCount = parseInt(localStorage.getItem("portfolioViews") || "0");
    const lastVisit = localStorage.getItem("lastVisit");
    const today = new Date().toDateString();

    // Only increment if it's a new day or first visit
    if (lastVisit !== today) {
      const newCount = currentCount + 1;
      localStorage.setItem("portfolioViews", newCount.toString());
      localStorage.setItem("lastVisit", today);
      setViewCount(newCount);
    } else {
      setViewCount(currentCount);
    }
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-card border border-border rounded-lg px-4 py-2 shadow-glow backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <Eye className="h-4 w-4 text-primary" />
          <span className="text-sm font-mono text-muted-foreground">
            <span className="text-primary font-bold">{viewCount.toLocaleString()}</span> {t.views}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ViewCounter;
