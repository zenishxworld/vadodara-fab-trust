import { useState } from "react";
import { Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";

const PHONE = "098986 81143";
const PHONE_LINK = "tel:+919898681143";
const WHATSAPP_LINK = "https://wa.me/919898681143?text=Hi%20Brahmani%20Engineering%2C%20I%20need%20fabrication%20work%20done.";
const ADDRESS = "GF-11, Aadhya Aangan, TP-4, Sardar Chok, Bhayli, Vadodara, Gujarat";
const MAP_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.5!2d73.1!3d22.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBhayli%2C+Vadodara!5e0!3m2!1sen!2sin!4v1";

const workTypes = ["Sliding Gate", "Railing", "Staircase", "Custom Fabrication", "Flag Pole", "Structural Work", "Other"];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", location: "", workType: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please fill in your name and phone number.");
      return;
    }
    setSending(true);
    // Build WhatsApp message as fallback
    const msg = `Hi Brahmani Engineering,%0A%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0ALocation: ${encodeURIComponent(form.location)}%0AWork Type: ${encodeURIComponent(form.workType)}%0AMessage: ${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/919898681143?text=${msg}`, "_blank");
    toast.success("Redirecting to WhatsApp with your details!");
    setSending(false);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-spark mb-3 block">Contact</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground">Ready to start your project? Reach out today.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5 bg-secondary p-8 rounded-xl shadow-trust">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Name *</label>
              <input type="text" required maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-spark focus:border-transparent outline-none transition" placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Phone *</label>
              <input type="tel" required maxLength={15} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-spark focus:border-transparent outline-none transition" placeholder="Your phone number" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Location</label>
              <input type="text" maxLength={100} value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-spark focus:border-transparent outline-none transition" placeholder="Area / Society in Vadodara" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Work Type</label>
              <select value={form.workType} onChange={(e) => setForm({ ...form, workType: e.target.value })} className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:ring-2 focus:ring-spark focus:border-transparent outline-none transition">
                <option value="">Select type of work</option>
                {workTypes.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
              <textarea maxLength={1000} rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-spark focus:border-transparent outline-none transition resize-none" placeholder="Tell us about your project..." />
            </div>
            <button type="submit" disabled={sending} className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-spark px-6 py-4 text-base font-bold text-accent-foreground hover:bg-spark-glow transition-colors disabled:opacity-50">
              <Send className="h-4 w-4" />
              Send via WhatsApp
            </button>
          </form>

          {/* Contact info + map */}
          <div className="space-y-6">
            <div className="space-y-4">
              <a href={PHONE_LINK} className="flex items-center gap-4 p-4 rounded-xl bg-secondary hover:shadow-trust transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-spark/10 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-spark" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call us</p>
                  <p className="text-lg font-semibold text-foreground">{PHONE}</p>
                </div>
              </a>

              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-secondary hover:shadow-trust transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-[hsl(142,70%,40%)]/10 flex items-center justify-center shrink-0">
                  <MessageCircle className="h-5 w-5 text-[hsl(142,70%,40%)]" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">WhatsApp</p>
                  <p className="text-lg font-semibold text-foreground">{PHONE}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary">
                <div className="w-12 h-12 rounded-lg bg-spark/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-spark" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Visit us</p>
                  <p className="text-sm font-medium text-foreground">{ADDRESS}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary">
                <div className="w-12 h-12 rounded-lg bg-spark/10 flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-spark" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Business Hours</p>
                  <p className="text-sm font-medium text-foreground">Open until 7:00 PM · LGBTQ+ Friendly</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-trust aspect-video">
              <iframe
                src={MAP_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Brahmani Engineering Location in Bhayli, Vadodara"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
