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
    // This component previously used localStorage only (client-side count).
    // To provide a global count, call a simple public counter API (CountAPI).
    // We still only increment once per day per visitor (controlled by lastVisit).
    const namespace = "alahdal-portfolio"; // change if you prefer a different namespace
    const key = "portfolio-views";

    const syncCount = async () => {
      const lastVisit = localStorage.getItem("lastVisit");
      const today = new Date().toDateString();

      try {
        if (lastVisit !== today) {
          // Increment the global counter
          const res = await fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`);
          const data = await res.json();
          const value = typeof data.value === "number" ? data.value : 0;
          localStorage.setItem("lastVisit", today);
          localStorage.setItem("portfolioViews", value.toString());
          setViewCount(value);
        } else {
          // Just read the current global value
          const res = await fetch(`https://api.countapi.xyz/get/${namespace}/${key}`);
          const data = await res.json();
          const value = typeof data.value === "number" ? data.value : parseInt(localStorage.getItem("portfolioViews") || "0");
          setViewCount(value);
        }
      } catch (err) {
        // Network failed — fall back to localStorage-only behavior
        const currentCount = parseInt(localStorage.getItem("portfolioViews") || "0");
        const last = localStorage.getItem("lastVisit");
        const today = new Date().toDateString();
        if (last !== today) {
          const newCount = currentCount + 1;
          localStorage.setItem("portfolioViews", newCount.toString());
          localStorage.setItem("lastVisit", today);
          setViewCount(newCount);
        } else {
          setViewCount(currentCount);
        }
      }
    };

    void syncCount();
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
