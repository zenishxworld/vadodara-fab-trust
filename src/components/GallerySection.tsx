import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gatesImg from "@/assets/service-gates.jpg";
import railingsImg from "@/assets/service-railings.jpg";
import staircasesImg from "@/assets/service-staircases.jpg";

const images = [
  { src: gallery1, alt: "Before and after gate fabrication project" },
  { src: gallery2, alt: "Decorative balcony railing installed in Vadodara" },
  { src: gallery3, alt: "Structural steel fabrication work" },
  { src: gatesImg, alt: "Modern sliding gate fabrication" },
  { src: railingsImg, alt: "Stainless steel railing installation" },
  { src: staircasesImg, alt: "Metal spiral staircase fabrication" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 lg:py-28 bg-gradient-steel">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-spark mb-3 block">Our Work</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Project Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See the craftsmanship and quality that goes into every Brahmani Engineering project.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div key={i} className="group relative aspect-square rounded-xl overflow-hidden shadow-trust">
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
