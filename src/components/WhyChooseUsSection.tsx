import { Star, Shield, Clock, IndianRupee, Headphones, Hammer } from "lucide-react";

const reasons = [
  { icon: Star, title: "5.0 Rated by 69+ Customers", desc: "Perfect rating backed by genuine Google reviews from happy clients across Vadodara." },
  { icon: IndianRupee, title: "Honest & Transparent Pricing", desc: "No hidden costs. Get a clear quote upfront with no surprises at delivery." },
  { icon: Hammer, title: "Modern Design + Strong Build", desc: "We combine contemporary aesthetics with industrial-grade strength in every project." },
  { icon: Clock, title: "Punctual Delivery", desc: "We respect your timelines. Projects delivered on schedule, every time." },
  { icon: Headphones, title: "Excellent After-Service", desc: "Our relationship doesn't end at installation. We're always a call away." },
  { icon: Shield, title: "Quality Materials Only", desc: "We never compromise on materials — only the best steel and metals go into your project." },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-dark">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-spark mb-3 block">Why Us</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Why Vadodara Trusts Brahmani Engineering
          </h2>
          <p className="text-lg text-primary-foreground/60 max-w-2xl mx-auto">
            Our 5-star reputation is built on consistent quality, honest dealings, and customer satisfaction.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur hover:bg-primary-foreground/10 transition-colors">
              <Icon className="h-8 w-8 text-spark mb-4" />
              <h3 className="font-display text-lg font-semibold text-primary-foreground mb-2">{title}</h3>
              <p className="text-sm text-primary-foreground/60 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
