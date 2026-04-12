import { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import { translations } from "@/lib/translations";

interface ViewCounterProps {
  currentLang: "en" | "ar";
}

const BASE_COUNT = 1247;
const STORAGE_KEY = "portfolioViews";
const VISIT_KEY = "lastVisit";

const ViewCounter = ({ currentLang }: ViewCounterProps) => {
  const [viewCount, setViewCount] = useState<number>(0);
  const t = translations[currentLang];

  useEffect(() => {
    const lastVisit = localStorage.getItem(VISIT_KEY);
    const today = new Date().toDateString();
    const stored = parseInt(localStorage.getItem(STORAGE_KEY) || "0");

    if (lastVisit !== today) {
      const newCount = (stored || BASE_COUNT) + 1;
      localStorage.setItem(STORAGE_KEY, newCount.toString());
      localStorage.setItem(VISIT_KEY, today);
      setViewCount(newCount);
    } else {
      setViewCount(stored || BASE_COUNT);
    }
  }, []);

  return (
    <div className="flex items-center gap-2">
      <Eye className="h-4 w-4 text-primary" />
      <span className="text-sm text-muted-foreground">
        <span className="text-primary font-bold">{viewCount.toLocaleString()}</span> {t.views}
      </span>
    </div>
  );
};

export default ViewCounter;
