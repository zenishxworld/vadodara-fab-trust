import { Phone, Star } from "lucide-react";

const PHONE_LINK = "tel:+919898681143";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-primary pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="container">
        <div className="max-w-2xl">
          {/* Rating badge */}
          <div className="flex items-center gap-2 mb-6 animate-fade-in-up">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-sm font-medium text-primary-foreground/70">5.0 Google Rating (69+ Reviews)</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-[1.1] mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Trusted Fabrication
          </h1>

          <p className="text-base sm:text-lg text-primary-foreground/60 max-w-lg mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            High-quality gates, railings, and custom metal fabrication with honest pricing and on-time delivery.
            Backed by Nileshbhai's decades of craftsmanship.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <button onClick={scrollToForm} className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors">
              Get Free Quote
            </button>
            <a href={PHONE_LINK} className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/20 px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/5 transition-colors">
              <Phone className="h-4 w-4" />
              Call 098986 81143
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
