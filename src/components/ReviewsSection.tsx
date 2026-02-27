import { Star } from "lucide-react";

const reviews = [
  { name: "Rajesh Patel", text: "Fantastic work by Nileshbhai! The sliding gate is sturdy and beautifully designed. Very professional team.", rating: 5 },
  { name: "Priya Sharma", text: "Reasonable rates and excellent craftsmanship. The railing work was completed on time with perfect finishing.", rating: 5 },
  { name: "Mehul Desai", text: "Nileshbhai's knowledge is superb. He understood exactly what we needed and delivered beyond expectations.", rating: 5 },
  { name: "Anita Joshi", text: "Very professional service. Honest pricing with no hidden charges. The staircase railing looks amazing!", rating: 5 },
  { name: "Kiran Modi", text: "Best fabrication engineer in Bhayli area. Quality materials and punctual delivery. Highly recommended!", rating: 5 },
  { name: "Suresh Bhatt", text: "Our society gate was done perfectly. Strong build quality and modern design. Everyone in the society loved it.", rating: 5 },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-spark mb-3 block">Reviews</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-spark text-spark" />
            ))}
          </div>
          <p className="text-lg text-muted-foreground">5.0 Rating from 69+ Google Reviews</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="p-6 rounded-xl bg-secondary shadow-trust">
              <div className="flex gap-1 mb-3">
                {[...Array(r.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-spark text-spark" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-4">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary-foreground">{r.name[0]}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground">Google Review</p>
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
