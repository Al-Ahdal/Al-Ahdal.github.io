import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  if (!show) return null;

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={scrollUp}
      className="fixed bottom-6 start-6 z-50 h-10 w-10 rounded-full border-primary text-primary bg-card/80 backdrop-blur-md shadow-glow hover:bg-primary hover:text-primary-foreground transition-smooth animate-fade-in-up"
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
};

export default ScrollToTop;
