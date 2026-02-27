import { Phone, MapPin, Hammer } from "lucide-react";

const PHONE_LINK = "tel:+919898681143";

const Footer = () => {
  return (
    <footer className="bg-primary py-14 pb-28 lg:pb-14">
      <div className="container">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <Hammer className="h-4 w-4 text-white" />
              </div>
              <div className="leading-tight">
                <span className="font-display text-base font-bold text-white block">Brahmani</span>
                <span className="text-[10px] uppercase tracking-widest text-white/50">Engineering</span>
              </div>
            </div>
            <p className="text-sm text-white/45 leading-relaxed max-w-xs">
              Vadodara's trusted destination for high-quality metal fabrication, gates, and railings.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li><a href="#about" className="hover:text-accent transition-colors duration-200">About Us</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors duration-200">Our Services</a></li>
              <li><a href="#gallery" className="hover:text-accent transition-colors duration-200">Project Gallery</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5">Contact</h4>
            <div className="space-y-4 text-sm text-white/50">
              <a href={PHONE_LINK} className="flex items-center gap-2.5 hover:text-accent transition-colors duration-200">
                <Phone className="h-4 w-4 shrink-0" /> 098986 81143
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>GF-11, Aadhya Aangan, TP-4, Sardar Chok, Bhayli, Vadodara</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} Brahmani Engineering. All rights reserved.
          </p>
          <p className="text-xs text-white/25">
            Designed for Quality ✦
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
