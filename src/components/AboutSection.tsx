import { Wrench, Users, Eye, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-spark mb-3 block">About Us</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Craftsmanship You Can Trust
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Led by Nileshbhai, Brahmani Engineering has earned the trust of homeowners, builders, and societies across Vadodara. 
            With deep expertise in modern fabrication techniques and an unwavering commitment to quality, 
            we turn your vision into sturdy, beautifully designed metalwork — on time and at honest prices.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Wrench, title: "Expert Craftsmanship", desc: "Years of hands-on experience delivering precise, high-quality metal fabrication work." },
            { icon: Eye, title: "Attention to Detail", desc: "Every weld, every finish is inspected to ensure durability and aesthetic perfection." },
            { icon: Users, title: "Customer-First Approach", desc: "We listen, understand your needs, and deliver exactly what you envision." },
            { icon: Heart, title: "Honest & Transparent", desc: "No hidden charges, no surprises — just fair pricing and quality materials." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group p-6 rounded-xl bg-secondary hover:shadow-trust transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-spark/10 flex items-center justify-center mb-4 group-hover:bg-spark/20 transition-colors">
                <Icon className="h-6 w-6 text-spark" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
