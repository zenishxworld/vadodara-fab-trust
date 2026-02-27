import { Phone, MessageCircle } from "lucide-react";

const PHONE_LINK = "tel:+919898681143";
const WHATSAPP_LINK = "https://wa.me/919898681143?text=Hi%20Brahmani%20Engineering%2C%20I%20need%20fabrication%20work%20done.";

const CTASection = () => {
  const scrollToForm = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 lg:py-28 bg-gradient-dark relative overflow-hidden">
      {/* Decorative spark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-spark/5 blur-3xl animate-spark-pulse" />

      <div className="container relative z-10 text-center">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
          Need Fabrication Work Done Right?
        </h2>
        <p className="text-lg text-primary-foreground/70 max-w-xl mx-auto mb-10">
          Call now or request a free site visit in Vadodara. No obligation, no hidden charges.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href={PHONE_LINK} className="inline-flex items-center gap-2 rounded-lg bg-spark px-8 py-4 text-lg font-bold text-accent-foreground hover:bg-spark-glow transition-colors shadow-lg">
            <Phone className="h-5 w-5" />
            Call 098986 81143
          </a>
          <button onClick={scrollToForm} className="inline-flex items-center gap-2 rounded-lg border-2 border-primary-foreground/30 px-8 py-4 text-lg font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
            Get Free Quote
          </button>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-[hsl(142,70%,40%)] px-8 py-4 text-lg font-semibold text-primary-foreground hover:bg-[hsl(142,70%,35%)] transition-colors">
            <MessageCircle className="h-5 w-5" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
