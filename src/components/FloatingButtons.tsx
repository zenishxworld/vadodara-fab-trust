import { Phone, MessageCircle, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";

const PHONE_LINK = "tel:+919898681143";
const WHATSAPP_LINK = "https://wa.me/919898681143?text=Hi%20Brahmani%20Engineering%2C%20I%20need%20fabrication%20work%20done.";

const FloatingButtons = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* WhatsApp floating button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-5 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,40%)] flex items-center justify-center shadow-lg hover:bg-[hsl(142,70%,35%)] transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6 text-primary-foreground" />
      </a>

      {/* Sticky call bar on mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-spark p-3 flex items-center justify-center gap-3 shadow-lg">
        <Phone className="h-5 w-5 text-accent-foreground" />
        <a href={PHONE_LINK} className="text-base font-bold text-accent-foreground">
          Call Now — 098986 81143
        </a>
      </div>

      {/* Scroll to top */}
      {showScroll && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 left-5 z-50 w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors lg:bottom-6"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-5 w-5 text-primary-foreground" />
        </button>
      )}
    </>
  );
};

export default FloatingButtons;
