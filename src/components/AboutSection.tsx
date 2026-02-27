import { Clock, IndianRupee } from "lucide-react";
import heroImg from "@/assets/hero-fabrication.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-secondary">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-accent/10 text-accent text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4">Workshop</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Craftsmanship You Can Trust
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Led by Nileshbhai, Brahmani Engineering has established itself as
              Vadodara's premier metal fabrication workshop. We don't just weld
              metal; we engineer solutions that last generations. From heavy-duty
              industrial structures to elegant residential gates, every project
              receives our signature attention to detail.
            </p>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center shrink-0">
                  <IndianRupee className="h-4 w-4 text-foreground" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">No hidden costs. We provide</p>
                  <p className="text-sm text-muted-foreground">clean, upfront estimates.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center shrink-0">
                  <Clock className="h-4 w-4 text-foreground" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">We respect your timeline and</p>
                  <p className="text-sm text-muted-foreground">deliver as promised.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img src={heroImg} alt="Brahmani Engineering workshop" className="w-full rounded-xl object-cover aspect-[4/3]" />
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-4 rounded-xl text-center shadow-lg">
              <span className="font-display text-3xl font-bold">15+</span>
              <p className="text-xs text-primary-foreground/70">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
