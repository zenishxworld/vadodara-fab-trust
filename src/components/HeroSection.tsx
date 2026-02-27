import { Phone, MessageCircle, Star, CheckCircle, Clock, IndianRupee } from "lucide-react";
import heroImg from "@/assets/hero-fabrication.jpg";

const PHONE = "098986 81143";
const PHONE_LINK = "tel:+919898681143";
const WHATSAPP_LINK = "https://wa.me/919898681143?text=Hi%20Brahmani%20Engineering%2C%20I%20need%20fabrication%20work%20done.";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Professional metal fabrication at Brahmani Engineering Vadodara" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-dark opacity-80" />
      </div>

      <div className="container relative z-10 py-20 lg:py-32">
        <div className="max-w-3xl">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-spark/20 px-4 py-2 mb-6 animate-fade-in-up">
            <Star className="h-4 w-4 fill-spark text-spark" />
            <span className="text-sm font-medium text-spark">5.0 Rated — 69+ Verified Google Reviews</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Trusted Fabrication Experts in{" "}
            <span className="text-gradient-spark">Vadodara</span>
          </h1>

          <p className="text-lg sm:text-xl text-steel-foreground/80 max-w-xl mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            High-quality gates, railings and custom metal fabrication with honest pricing and on-time delivery.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <a href={PHONE_LINK} className="inline-flex items-center gap-2 rounded-lg bg-spark px-6 py-4 text-lg font-semibold text-accent-foreground hover:bg-spark-glow transition-colors shadow-lg">
              <Phone className="h-5 w-5" />
              Call Now
            </a>
            <button onClick={scrollToForm} className="inline-flex items-center gap-2 rounded-lg border-2 border-primary-foreground/30 bg-primary-foreground/10 px-6 py-4 text-lg font-semibold text-primary-foreground hover:bg-primary-foreground/20 transition-colors backdrop-blur">
              Get Free Quote
            </button>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-[hsl(142,70%,40%)] px-6 py-4 text-lg font-semibold text-primary-foreground hover:bg-[hsl(142,70%,35%)] transition-colors">
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </a>
          </div>

          {/* Trust signals row */}
          <div className="flex flex-wrap gap-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            {[
              { icon: CheckCircle, text: "On-Time Delivery" },
              { icon: IndianRupee, text: "Honest Pricing" },
              { icon: Clock, text: "Open until 7 PM" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-primary-foreground/70">
                <Icon className="h-4 w-4 text-spark" />
                <span className="text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
