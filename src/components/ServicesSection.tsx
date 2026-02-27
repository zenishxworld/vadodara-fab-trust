import gatesImg from "@/assets/service-gates.jpg";
import railingsImg from "@/assets/service-railings.jpg";
import staircasesImg from "@/assets/service-staircases.jpg";
import customImg from "@/assets/service-custom.jpg";
import flagpoleImg from "@/assets/service-flagpole.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const WHATSAPP_LINK = "https://wa.me/919898681143?text=Hi%2C%20I%20need%20a%20quote%20for%20fabrication%20work.";

const services = [
  {
    title: "Sliding Gates",
    image: gatesImg,
    desc: "Custom-designed sliding gates for homes, societies, and commercial properties.",
    benefits: ["Smooth operation & durable build", "Modern & traditional designs", "Corrosion-resistant finish"],
  },
  {
    title: "Railings",
    image: railingsImg,
    desc: "Elegant stainless steel and iron railings for balconies, terraces, and staircases.",
    benefits: ["Safety-compliant designs", "Stainless steel & MS options", "Sleek modern aesthetics"],
  },
  {
    title: "Staircases",
    image: staircasesImg,
    desc: "Spiral, straight, and custom metal staircases built for strength and style.",
    benefits: ["Structural engineering expertise", "Space-saving designs", "Premium finish quality"],
  },
  {
    title: "Custom Metal Fabrication",
    image: customImg,
    desc: "Bespoke metalwork solutions for any residential or commercial requirement.",
    benefits: ["Tailored to your specifications", "Wide range of metals", "Prototype to production"],
  },
  {
    title: "Flag Poles",
    image: flagpoleImg,
    desc: "Sturdy, professionally installed flag poles for institutions and residences.",
    benefits: ["Galvanized for longevity", "Professional installation", "Multiple height options"],
  },
  {
    title: "Structural Fabrication",
    image: gallery3,
    desc: "Heavy-duty structural steel fabrication for builders and construction projects.",
    benefits: ["Load-bearing precision", "On-site welding available", "Timely project delivery"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-gradient-steel">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-spark mb-3 block">Our Services</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Fabrication Services in Vadodara
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From residential gates to large-scale structural work — quality fabrication for every need.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.title} className="group bg-card rounded-xl overflow-hidden shadow-trust hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={s.image} alt={`${s.title} fabrication in Vadodara`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
                <ul className="space-y-1 mb-5">
                  {s.benefits.map((b) => (
                    <li key={b} className="text-sm text-foreground/80 flex items-start gap-2">
                      <span className="text-spark mt-1">✓</span> {b}
                    </li>
                  ))}
                </ul>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-spark hover:text-spark-glow transition-colors">
                  Request Quote →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
