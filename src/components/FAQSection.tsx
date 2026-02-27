import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "What types of fabrication work does Brahmani Engineering handle?",
    a: "We specialize in sliding gates, railings, staircases, flag poles, custom metal fabrication, and structural steel work for residential, society, and commercial projects across Vadodara.",
  },
  {
    q: "Do you provide free site visits and quotations?",
    a: "Yes! We offer free site visits within Vadodara. Just call us at 098986 81143 or send a WhatsApp message and we'll schedule a visit at your convenience.",
  },
  {
    q: "What materials do you use for fabrication?",
    a: "We work with stainless steel (SS), mild steel (MS), iron, and aluminium. We only use high-quality, corrosion-resistant materials to ensure long-lasting results.",
  },
  {
    q: "How long does a typical fabrication project take?",
    a: "Project timelines vary based on complexity. A standard gate takes 5-7 days, while larger structural projects may take 2-3 weeks. We always deliver on the committed timeline.",
  },
  {
    q: "Do you serve areas outside Bhayli?",
    a: "Absolutely! While we're based in Bhayli, we serve all areas of Vadodara including Gotri, Manjalpur, Alkapuri, Waghodia Road, and surrounding regions.",
  },
  {
    q: "Is there any warranty on your fabrication work?",
    a: "Yes, we stand behind our work. We provide warranty on materials and workmanship, and our after-service support is always just a phone call away.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-gradient-steel">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold tracking-widest uppercase text-spark mb-3 block">FAQ</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl px-6 border border-border shadow-sm">
              <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
