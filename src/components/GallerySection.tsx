import ScrollReveal from "./ScrollReveal";
import gateImg from "@/assets/project-gate.png";
import railingImg from "@/assets/project-railing.png";
import structuralImg from "@/assets/project-structural.png";
import flagpoleImg from "@/assets/project-flagpole.png";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";

const images = [
  { src: gateImg, alt: "Decorative main gate fabrication" },
  { src: railingImg, alt: "Stainless steel staircase railing" },
  { src: structuralImg, alt: "Industrial structural steel work" },
  { src: flagpoleImg, alt: "National flag pole installation" },
  { src: gallery1, alt: "Before and after gate project" },
  { src: gallery2, alt: "Balcony railing installation" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 lg:py-32 bg-white">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Our Craft in Action
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              See the craftsmanship and quality that goes into every Brahmani Engineering project.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <div className="group relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-medium">{img.alt}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
