import { DoorOpen, Fence, Wrench, Building2, Flag, Building } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const services = [
  { icon: DoorOpen, title: "Sliding & Main Gates", desc: "Heavy-duty, perfectly balanced sliding and swing gates." },
  { icon: Fence, title: "Staircase Railings", desc: "Elegant and sturdy SS & MS railings for homes and societies." },
  { icon: Wrench, title: "Custom Metal Fabrication", desc: "Bespoke metal components fabricated to exact specifications." },
  { icon: Building2, title: "Structural Fabrication", desc: "Sheds, roofing, and heavy industrial structures." },
  { icon: Flag, title: "Flag Poles", desc: "Durable, weather-resistant national and corporate flag poles." },
  { icon: Building, title: "Society Work", desc: "Bulk orders for residential complexes and building developments." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Our Fabrication Services
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Precision engineering for residential, commercial, and industrial requirements across Gujarat.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.08}>
              <div className="group p-8 rounded-2xl border border-gray-200/80 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                  <s.icon className="h-6 w-6 text-foreground group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
