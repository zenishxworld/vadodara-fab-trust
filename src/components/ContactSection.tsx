import { useState } from "react";
import { Phone, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner";
import ScrollReveal from "./ScrollReveal";

const PHONE = "098986 81143";
const PHONE_LINK = "tel:+919898681143";
const ADDRESS_LINE1 = "GF-11, Aadhya Aangan, TP-4,";
const ADDRESS_LINE2 = "Sardar Chok, Bhayli, Vadodara, Gujarat";
const MAP_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.5!2d73.1!3d22.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBhayli%2C+Vadodara!5e0!3m2!1sen!2sin!4v1";

const workTypes = [
  "Sliding & Main Gates",
  "Staircase & Balcony Railings",
  "Structural Fabrication",
  "Flag Poles",
  "Other Custom Metal Work",
];

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
    const msg = `Hi Brahmani Engineering,%0A%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0ALocation: ${encodeURIComponent(form.location)}%0AWork Type: ${encodeURIComponent(form.workType)}%0AMessage: ${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/919898681143?text=${msg}`, "_blank");
    toast.success("Redirecting to WhatsApp with your details!");
    setSending(false);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Info */}
          <div>
            <ScrollReveal>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Let's Discuss Your Project
              </h2>
              <p className="text-muted-foreground mb-8">
                Visit our workshop in Bhayli or call us directly. We are ready to provide a detailed, honest quote for your fabrication needs.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="h-4 w-4 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Workshop Address</p>
                    <p className="text-sm text-muted-foreground">{ADDRESS_LINE1}</p>
                    <p className="text-sm text-muted-foreground">{ADDRESS_LINE2}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="h-4 w-4 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Contact Details</p>
                    <a href={PHONE_LINK} className="text-sm text-muted-foreground hover:text-accent transition-colors">Phone: {PHONE}</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="h-4 w-4 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Working Hours</p>
                    <p className="text-sm text-muted-foreground">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                    <p className="text-sm text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="rounded-xl overflow-hidden border border-border aspect-video">
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
            </ScrollReveal>
          </div>

          {/* Right - Form */}
          <ScrollReveal delay={0.15}>
            <div className="bg-secondary p-8 rounded-xl">
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Get a Free Quote</h3>
              <p className="text-sm text-muted-foreground mb-6">Fill out the form below and Nileshbhai will get back to you shortly.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name</label>
                  <input type="text" required maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition" placeholder="Jane Doe" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Phone Number</label>
                    <input type="tel" required maxLength={15} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition" placeholder="+91 98986 81143" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Location in Vadodara</label>
                    <input type="text" maxLength={100} value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition" placeholder="e.g. Bhayli, Gotri" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Type of Work</label>
                  <select value={form.workType} onChange={(e) => setForm({ ...form, workType: e.target.value })} className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition">
                    <option value="">Select service needed</option>
                    {workTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Project Details</label>
                  <textarea maxLength={1000} rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition resize-none" placeholder="Tell us a bit about your requirement..." />
                </div>
                <button type="submit" disabled={sending} className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50">
                  <Send className="h-4 w-4" />
                  Submit Request
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
