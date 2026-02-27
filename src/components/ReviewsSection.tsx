import { Star, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const reviews = [
  { name: "Amit P.", time: "2 months ago", text: "Excellent work on our society main gate. Nileshbhai was on time and very professional. The finish is top notch." },
  { name: "Rajesh D.", time: "4 months ago", text: "Nileshbhai and his team did a fantastic job with the staircase railings for our new bungalow. Highly recommended." },
  { name: "Sneha Patel", time: "6 months ago", text: "Honest pricing and superb quality. It's hard to find such reliable fabrication work in Vadodara these days." },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-24 lg:py-32 bg-gray-50">
      <div className="container">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3">
                What Our Clients Say
              </h2>
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-medium text-muted-foreground">5.0 / 5.0 on Google</span>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/place/Brahmani+Engineering"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 sm:mt-0 inline-flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-foreground hover:bg-white hover:shadow-md transition-all duration-300"
            >
              View All Reviews <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <ScrollReveal key={r.name} delay={i * 0.1}>
              <div className="p-7 rounded-2xl bg-white border border-gray-200/80 h-full shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6 text-[15px]">"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-sm font-semibold text-white">{r.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{r.name}</p>
                    <p className="text-xs text-muted-foreground">{r.time}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
