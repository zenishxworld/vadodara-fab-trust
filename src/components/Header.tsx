import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const PHONE_LINK = "tel:+919898681143";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="font-display text-xl font-bold text-foreground">
          Brahmani<span className="text-spark">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <a href={PHONE_LINK} className="inline-flex items-center gap-2 rounded-lg bg-spark px-4 py-2 text-sm font-semibold text-accent-foreground hover:bg-spark-glow transition-colors">
            <Phone className="h-4 w-4" />
            098986 81143
          </a>
        </nav>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-foreground" aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background pb-4">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="block px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors">
              {l.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <a href={PHONE_LINK} className="inline-flex items-center gap-2 rounded-lg bg-spark px-4 py-2.5 text-sm font-semibold text-accent-foreground w-full justify-center">
              <Phone className="h-4 w-4" />
              Call 098986 81143
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
