import { Phone, MessageCircle, MapPin } from "lucide-react";

const PHONE_LINK = "tel:+919898681143";
const WHATSAPP_LINK = "https://wa.me/919898681143?text=Hi%20Brahmani%20Engineering";

const Footer = () => {
  return (
    <footer className="bg-charcoal py-12 pb-24 lg:pb-12">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="font-display text-xl font-bold text-primary-foreground mb-3">
              Brahmani<span className="text-spark">.</span>
            </h3>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              Trusted fabrication engineers in Vadodara. Quality metalwork with honest pricing since day one.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-primary-foreground uppercase tracking-wider mb-3">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li>Sliding Gates</li>
              <li>Railings</li>
              <li>Staircases</li>
              <li>Custom Fabrication</li>
              <li>Structural Work</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-primary-foreground uppercase tracking-wider mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><a href="#about" className="hover:text-spark transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-spark transition-colors">Services</a></li>
              <li><a href="#reviews" className="hover:text-spark transition-colors">Reviews</a></li>
              <li><a href="#gallery" className="hover:text-spark transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-spark transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-primary-foreground uppercase tracking-wider mb-3">Contact</h4>
            <div className="space-y-3 text-sm text-primary-foreground/60">
              <a href={PHONE_LINK} className="flex items-center gap-2 hover:text-spark transition-colors">
                <Phone className="h-4 w-4" /> 098986 81143
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-spark transition-colors">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" /> 
                <span>Bhayli, Vadodara, Gujarat</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Brahmani Engineering. All rights reserved. | Fabrication Engineer in Vadodara
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
