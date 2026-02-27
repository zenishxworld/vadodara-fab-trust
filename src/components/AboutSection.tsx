import { Clock, IndianRupee } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import workshopImg from "@/assets/workshop.png";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-primary overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text Content */}
          <div>
            <ScrollReveal>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
                Craftsmanship You Can Trust
              </h2>
              <div className="w-16 h-1 bg-accent mb-8 rounded-full" />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-white/65 leading-relaxed mb-10 text-lg">
                Led by Nileshbhai, Brahmani Engineering has established itself as
                Vadodara's premier metal fabrication workshop. We don't just weld
                metal; we engineer solutions that last generations. From heavy-duty
                industrial structures to elegant residential gates, every project
                receives our signature attention to detail.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex flex-wrap gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center shrink-0 bg-white/5">
                    <IndianRupee className="h-5 w-5 text-white/70" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">Honest Pricing</p>
                    <p className="text-sm text-white/45 leading-relaxed">No hidden costs. We provide clear, upfront estimates.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center shrink-0 bg-white/5">
                    <Clock className="h-5 w-5 text-white/70" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">Punctual Delivery</p>
                    <p className="text-sm text-white/45 leading-relaxed">We respect your timeline and deliver as promised.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right - Workshop Image */}
          <ScrollReveal delay={0.15}>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src={workshopImg}
                  alt="Brahmani Engineering workshop"
                  className="w-full object-cover aspect-[4/3]"
                />
              </div>
              {/* 15+ Years Badge */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white text-primary px-10 py-6 rounded-xl text-center shadow-2xl border border-gray-100">
                <span className="font-display text-4xl font-bold block">15+</span>
                <p className="text-sm text-gray-500 mt-1 font-medium">Years of Excellence</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
