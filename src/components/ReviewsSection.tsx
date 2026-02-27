import { Star, ArrowRight } from "lucide-react";

const reviews = [
  {
    name: "Amit P.",
    time: "2 months ago",
    text: "Excellent work on our society main gate. Nileshbhai was on time and very professional. The finish is top notch.",
  },
  {
    name: "Rajesh D.",
    time: "4 months ago",
    text: "Nileshbhai and his team did a fantastic job with the staircase railings for our new bungalow. Highly recommended.",
  },
  {
    name: "Sneha Patel",
    time: "6 months ago",
    text: "Honest pricing and superb quality. It's hard to find such reliable fabrication work in Vadodara these days.",
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-secondary">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2">
              What Our Clients Say
            </h2>
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">5.0 / 5.0 on Google</span>
            </div>
          </div>
          <a
            href="https://www.google.com/maps/place/Brahmani+Engineering"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 sm:mt-0 inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-background transition-colors"
          >
            View All Reviews <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="p-6 rounded-xl bg-card border border-border">
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed mb-5">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-xs font-semibold text-primary-foreground">{r.name[0]}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
