import { Phone, Star } from "lucide-react";

const PHONE_LINK = "tel:+919898681143";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center pt-16">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&q=80"
          alt="Metal Fabrication Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="container relative z-10 py-20 lg:py-28">
        <div className="max-w-2xl">
          {/* Rating badge */}
          <div className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-sm font-medium text-foreground">5.0 Google Rating (69+ Reviews)</span>
          </div>

          {/* Headline with dark block */}
          <div className="mb-8">
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.05]">
              Trusted Fabrication
            </h1>
            <div className="bg-primary inline-block px-4 py-3 mt-2">
              <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-foreground">
                Experts in Vadodara
              </span>
            </div>
          </div>

          <p className="text-base sm:text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
            High-quality gates, railings, and custom metal fabrication with honest pricing and on-time delivery.
            Backed by Nileshbhai's decades of craftsmanship.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button onClick={scrollToForm} className="rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
              Get Free Quote
            </button>
            <a href={PHONE_LINK} className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-7 py-3.5 text-sm font-semibold text-foreground hover:bg-secondary transition-colors">
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
