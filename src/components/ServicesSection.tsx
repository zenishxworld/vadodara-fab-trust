import { DoorOpen, Fence, Wrench, Building2, Flag, Building } from "lucide-react";

const services = [
  {
    icon: DoorOpen,
    title: "Sliding & Main Gates",
    desc: "Heavy-duty, perfectly balanced sliding and swing gates.",
  },
  {
    icon: Fence,
    title: "Staircase Railings",
    desc: "Elegant and sturdy SS & MS railings for homes and societies.",
  },
  {
    icon: Wrench,
    title: "Custom Metal Fabrication",
    desc: "Bespoke metal components fabricated to exact specifications.",
  },
  {
    icon: Building2,
    title: "Structural Fabrication",
    desc: "Sheds, roofing, and heavy industrial structures.",
  },
  {
    icon: Flag,
    title: "Flag Poles",
    desc: "Durable, weather-resistant national and corporate flag poles.",
  },
  {
    icon: Building,
    title: "Society Work",
    desc: "Bulk orders for residential complexes and building developments.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Our Fabrication Services
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Precision engineering for residential, commercial, and industrial requirements across Gujarat.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group p-6 rounded-xl border border-border bg-card hover:shadow-card-hover transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                <s.icon className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
