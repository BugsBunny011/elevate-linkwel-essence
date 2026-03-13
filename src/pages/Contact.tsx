import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const formData = new URLSearchParams();
      formData.append("form-name", "contact");
      formData.append("name", form.name);
      formData.append("phone", form.phone);
      formData.append("email", form.email);
      formData.append("message", form.message);

      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });

      toast.success("Thank you! We'll get back to you shortly.");
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="pt-32 pb-20 navy-gradient">
        <div className="container mx-auto section-padding text-center">
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">Get In Touch</p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-gold-light mb-6">
            Contact <span className="text-gold-gradient">Us</span>
          </h1>
          <p className="text-gold-light/60 font-body text-lg max-w-2xl mx-auto">
            Reach out for a free consultation and let us engineer the perfect elevator solution for you.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <ScrollReveal>
              <div className="glass-card rounded-lg p-10">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Send Us a Message</h2>
                <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-5">
                  <input type="hidden" name="form-name" value="contact" />
                  <div>
                    <label className="block text-sm font-body font-medium text-foreground mb-1.5">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-sm border border-border bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-body font-medium text-foreground mb-1.5">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-sm border border-border bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
                        placeholder="+91 98185 11177"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-body font-medium text-foreground mb-1.5">Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-sm border border-border bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-body font-medium text-foreground mb-1.5">Message</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-sm border border-border bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow resize-none"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="gold-gradient text-white font-body font-semibold px-8 py-3.5 rounded-sm tracking-wider uppercase text-sm hover:opacity-90 transition-opacity inline-flex items-center gap-2 w-full justify-center disabled:opacity-60"
                  >
                    <Send size={16} /> {submitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal delay={200}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Contact Information</h2>
                  <p className="text-muted-foreground font-body leading-relaxed mb-8">
                    We're here to help you with all your elevator and crane needs. Reach out to us through any of the channels below.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <MapPin className="text-accent" size={20} />
                    </div>
                    <div>
                      <h4 className="font-body font-semibold text-foreground text-sm">Office Address</h4>
                      <p className="text-muted-foreground font-body text-sm mt-1">62, DSIDC Complex, Okhla<br />Okhla Phase I, ND-20<br />New Delhi, Delhi 110020</p>
                      <a href="https://maps.app.goo.gl/CQTwV2ASCZBMGX6W6" target="_blank" rel="noopener noreferrer" className="text-accent font-body text-xs mt-1 inline-block hover:underline">View on Google Maps →</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <Phone className="text-accent" size={20} />
                    </div>
                    <div>
                      <h4 className="font-body font-semibold text-foreground text-sm">Phone</h4>
                      <a href="tel:+919818511177" className="text-muted-foreground font-body text-sm mt-1 block hover:text-accent transition-colors">+91 9818511177</a>
                      <a href="tel:+919810371220" className="text-muted-foreground font-body text-sm block hover:text-accent transition-colors">+91 9810371220</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <Mail className="text-accent" size={20} />
                    </div>
                    <div>
                      <h4 className="font-body font-semibold text-foreground text-sm">Email</h4>
                      <a href="mailto:linkwelengineers@gmail.com" className="text-muted-foreground font-body text-sm mt-1 block hover:text-accent transition-colors">linkwelengineers@gmail.com</a>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="rounded-lg overflow-hidden border border-border h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.7358611498845!2d77.27!3d28.53!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e564dafffb%3A0x3c2680e1c2c0e93d!2sDSIDC%20Complex%2C%20Okhla%20Phase%20I%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Linkwel Engineers Office Location"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
