import { Clock, IndianRupee } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-primary">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-2">
              Craftsmanship You Can Trust
            </h2>
            <div className="w-16 h-1 bg-accent mb-8" />
            <p className="text-primary-foreground/70 leading-relaxed mb-10">
              Led by Nileshbhai, Brahmani Engineering has established itself as
              Vadodara's premier metal fabrication workshop. We don't just weld
              metal; we engineer solutions that last generations. From heavy-duty
              industrial structures to elegant residential gates, every project
              receives our signature attention to detail.
            </p>

            <div className="flex flex-wrap gap-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center shrink-0">
                  <IndianRupee className="h-4 w-4 text-primary-foreground/70" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary-foreground">Honest Pricing</p>
                  <p className="text-sm text-primary-foreground/50">No hidden costs. We provide clear, upfront estimates.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center shrink-0">
                  <Clock className="h-4 w-4 text-primary-foreground/70" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary-foreground">Punctual Delivery</p>
                  <p className="text-sm text-primary-foreground/50">We respect your timeline and deliver as promised.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute top-4 left-4 z-10 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-3 py-1">
              <span className="text-xs font-medium text-primary-foreground/70">⚙ Workshop</span>
            </div>
            <img
              src="https://pixabay.com/get/g45747aec1f9b098d1554887fc48f643eee4d29f0c03b87c720d7fc3f5cac1cec308373fbbe83e248dce60abe0d34f85aadb5f65e7d90692345efa99bb7c50283_1280.jpg"
              alt="Brahmani Engineering workshop"
              className="w-full rounded-xl object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-primary border border-primary-foreground/10 text-primary-foreground px-8 py-5 rounded-xl text-center shadow-lg">
              <span className="font-display text-3xl font-bold">15+</span>
              <p className="text-xs text-primary-foreground/60 mt-1">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
