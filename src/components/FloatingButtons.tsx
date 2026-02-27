import { Phone, MessageCircle } from "lucide-react";

const PHONE_LINK = "tel:+919898681143";
const WHATSAPP_LINK = "https://wa.me/919898681143?text=Hi%20Brahmani%20Engineering%2C%20I%20need%20fabrication%20work%20done.";

const FloatingButtons = () => {
  return (
    <>
      {/* WhatsApp floating button - desktop & mobile */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-5 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,40%)] flex items-center justify-center shadow-lg hover:bg-[hsl(142,70%,35%)] transition-colors lg:bottom-6"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6 text-primary-foreground" />
      </a>

      {/* Sticky bottom bar on mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-primary flex">
        <a href={PHONE_LINK} className="flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-primary-foreground border-r border-primary-foreground/10">
          <Phone className="h-4 w-4" />
          Call Now
        </a>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-primary-foreground">
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </>
  );
};

export default FloatingButtons;
