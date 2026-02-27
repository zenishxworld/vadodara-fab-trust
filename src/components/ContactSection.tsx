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
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-14">
          {/* Left - Info & Map */}
          <div>
            <ScrollReveal>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Let's Discuss Your Project
              </h2>
              <p className="text-muted-foreground text-lg mb-10">
                Visit our workshop in Bhayli or call us directly. We are ready to provide a detailed, honest quote for your fabrication needs.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground mb-1">Workshop Address</p>
                    <p className="text-sm text-muted-foreground">{ADDRESS_LINE1}</p>
                    <p className="text-sm text-muted-foreground">{ADDRESS_LINE2}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground mb-1">Contact Details</p>
                    <a href={PHONE_LINK} className="text-sm text-muted-foreground hover:text-accent transition-colors">Phone: {PHONE}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground mb-1">Working Hours</p>
                    <p className="text-sm text-muted-foreground">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                    <p className="text-sm text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="rounded-2xl overflow-hidden border border-gray-200 aspect-video shadow-sm">
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
            <div className="bg-gray-50 p-8 lg:p-10 rounded-2xl border border-gray-200/80">
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Get a Free Quote</h3>
              <p className="text-sm text-muted-foreground mb-8">Fill out the form below and Nileshbhai will get back to you shortly.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-sm font-semibold text-foreground mb-2 block">Full Name</label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-2 block">Phone Number</label>
                    <input
                      type="tel"
                      required
                      maxLength={15}
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      placeholder="+91 98986 81143"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-2 block">Location in Vadodara</label>
                    <input
                      type="text"
                      maxLength={100}
                      value={form.location}
                      onChange={(e) => setForm({ ...form, location: e.target.value })}
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      placeholder="e.g. Bhayli, Gotri"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-foreground mb-2 block">Type of Work</label>
                  <select
                    value={form.workType}
                    onChange={(e) => setForm({ ...form, workType: e.target.value })}
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  >
                    <option value="">Select service needed</option>
                    {workTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-semibold text-foreground mb-2 block">Project Details</label>
                  <textarea
                    maxLength={1000}
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                    placeholder="Tell us a bit about your requirement..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 shadow-lg hover:shadow-xl"
                >
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
