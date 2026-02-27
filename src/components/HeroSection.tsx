import { Phone, Star } from "lucide-react";
import heroImg from "@/assets/hero-welding.png";

const PHONE_LINK = "tel:+919898681143";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-16">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Metal Fabrication Workshop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(222,47%,11%)]/95 via-[hsl(222,47%,11%)]/80 to-[hsl(222,47%,11%)]/40" />
      </div>

      <div className="container relative z-10 py-20 lg:py-32">
        <div className="max-w-2xl">
          {/* Rating badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2.5 mb-8 border border-white/10">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-sm font-medium text-white/90">5.0 Google Rating (69+ Reviews)</span>
          </div>

          {/* Headline */}
          <div className="mb-8">
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05]">
              Trusted Fabrication
            </h1>
            <div className="bg-white/10 backdrop-blur-sm inline-block px-5 py-3 mt-3 rounded-sm">
              <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                Experts in Vadodara
              </span>
            </div>
          </div>

          <p className="text-base sm:text-lg text-white/70 max-w-lg mb-10 leading-relaxed">
            High-quality gates, railings, and custom metal fabrication with honest pricing and on-time delivery.
            Backed by Nileshbhai's decades of craftsmanship.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={scrollToForm}
              className="rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-white hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Get Free Quote
            </button>
            <a
              href={PHONE_LINK}
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/5 backdrop-blur-sm px-8 py-4 text-sm font-semibold text-white hover:bg-white/10 transition-all duration-300"
            >
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
