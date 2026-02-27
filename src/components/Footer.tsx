import { Phone, MapPin, Hammer } from "lucide-react";

const PHONE_LINK = "tel:+919898681143";

const Footer = () => {
  return (
    <footer className="bg-primary py-12 pb-24 lg:pb-12">
      <div className="container">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-md bg-accent flex items-center justify-center">
                <Hammer className="h-3.5 w-3.5 text-accent-foreground" />
              </div>
              <span className="font-display text-base font-bold text-primary-foreground">Brahmani Engineering</span>
            </div>
            <p className="text-sm text-primary-foreground/50 leading-relaxed">
              Vadodara's trusted destination for high-quality metal fabrication, gates, and railings.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/50">
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Our Services</a></li>
              <li><a href="#reviews" className="hover:text-accent transition-colors">Project Gallery</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-primary-foreground mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-primary-foreground/50">
              <a href={PHONE_LINK} className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="h-4 w-4" /> 098986 81143
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>GF-11, Aadhya Aangan, TP-4, Sardar Chok, Bhayli, Vadodara</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/30">
            © {new Date().getFullYear()} Brahmani Engineering. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/30">
            Designed for Quality ✦
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
