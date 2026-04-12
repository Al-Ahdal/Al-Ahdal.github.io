import { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import { translations } from "@/lib/translations";

interface ViewCounterProps {
  currentLang: "en" | "ar";
}

const BASE_COUNT = 1247;
const NAMESPACE = "al-ahdal-portfolio";
const KEY = "views";

const ViewCounter = ({ currentLang }: ViewCounterProps) => {
  const [viewCount, setViewCount] = useState<number>(BASE_COUNT);
  const t = translations[currentLang];

  useEffect(() => {
    const fetchViews = async () => {
      try {
        // Increment counter
        const hitResponse = await fetch(`https://api.countapi.xyz/hit/${NAMESPACE}/${KEY}`);
        const hitData = await hitResponse.json();
        
        if (hitData.value) {
          setViewCount(hitData.value);
        }
      } catch (error) {
        console.error("Failed to fetch view count:", error);
        // Fallback to base count if API fails
        setViewCount(BASE_COUNT);
      }
    };

    fetchViews();
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
