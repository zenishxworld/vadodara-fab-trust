import { Phone, Menu, X, Hammer } from "lucide-react";
import { useState } from "react";

const PHONE_LINK = "tel:+919898681143";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#reviews" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const scrollToForm = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary border-b border-primary-foreground/10">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
            <Hammer className="h-4 w-4 text-accent-foreground" />
          </div>
          <div className="leading-tight">
            <span className="font-display text-base font-bold text-primary-foreground">Brahmani</span>
            <span className="block text-[10px] uppercase tracking-widest text-primary-foreground/50">Engineering</span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <a href={PHONE_LINK} className="flex items-center gap-2 text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground transition-colors">
            <Phone className="h-4 w-4" />
            098986 81143
          </a>
          <button onClick={scrollToForm} className="rounded-lg bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors">
            Get Quote
          </button>
        </nav>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-primary-foreground" aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-primary-foreground/10 bg-primary pb-4">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="block px-6 py-3 text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <div className="px-6 pt-2 space-y-2">
            <a href={PHONE_LINK} className="flex items-center gap-2 text-sm font-medium text-primary-foreground/70">
              <Phone className="h-4 w-4" />
              098986 81143
            </a>
            <button onClick={scrollToForm} className="w-full rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground">
              Get Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
