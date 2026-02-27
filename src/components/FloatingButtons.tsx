import { Phone, MessageCircle } from "lucide-react";

const PHONE_LINK = "tel:+919898681143";
const WHATSAPP_LINK = "https://wa.me/919898681143?text=Hi%20Brahmani%20Engineering%2C%20I%20need%20fabrication%20work%20done.";

const FloatingButtons = () => {
  return (
    <>
      {/* WhatsApp floating button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-xs font-medium text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors lg:bottom-6"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-4 w-4" />
        <span className="hidden sm:inline">Made with Equity</span>
      </a>

      {/* Sticky call bar on mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-accent p-3 flex items-center justify-center gap-3 shadow-lg">
        <Phone className="h-5 w-5 text-accent-foreground" />
        <a href={PHONE_LINK} className="text-base font-bold text-accent-foreground">
          Call Now — 098986 81143
        </a>
      </div>
    </>
  );
};

export default FloatingButtons;
