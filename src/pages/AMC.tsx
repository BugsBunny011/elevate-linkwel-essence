import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CheckCircle2, Shield, Clock, Wrench, Award, Send } from "lucide-react";
import { toast } from "sonner";
import Layout from "@/components/Layout";
import MarqueeStrip from "@/components/MarqueeStrip";
import SeoBreadcrumbs from "@/components/SeoBreadcrumbs";
import ScrollReveal from "@/components/ScrollReveal";

const PRODUCT_TYPES = [
  "Passenger Elevator",
  "Home Elevator",
  "Goods Elevator",
  "Hospital Elevator",
  "Capsule Elevator",
  "Car Elevator",
  "EOT Crane",
  "Gantry Crane",
  "Goliath Crane",
  "Jib Crane",
  "Electric Hoist",
];

const coverage = [
  "Routine inspection and safety checks",
  "Emergency breakdown support",
  "Lubrication and spare parts replacement",
  "Compliance with IS and safety standards",
  "Priority response time for AMC clients",
];

const benefits = [
  { icon: Shield, title: "Safety First", desc: "Every visit follows strict IS and international safety protocols, protecting users and your liability." },
  { icon: Clock, title: "Priority Response", desc: "AMC clients receive priority dispatch and faster turnaround on breakdown calls." },
  { icon: Wrench, title: "OEM Spare Parts", desc: "Genuine, manufacturer-grade spares to extend equipment life and avoid recurring faults." },
  { icon: Award, title: "35+ Years Expertise", desc: "Three decades of engineering know-how across lifts, EOT, gantry, jib cranes and hoists." },
];

const AMC = () => {
  const [form, setForm] = useState({ name: "", phone: "", productType: "", city: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const data = new URLSearchParams();
      data.append("form-name", "amc");
      Object.entries(form).forEach(([k, v]) => data.append(k, v));
      await fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: data.toString() });
      toast.success("Thank you! Our AMC team will get back to you shortly.");
      setForm({ name: "", phone: "", productType: "", city: "" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Annual Maintenance Contract (AMC) for Lifts & Cranes | Linkwel Engineers</title>
        <meta name="description" content="Annual Maintenance Contracts for elevators, lifts and industrial cranes by Linkwel Engineers. Routine inspections, emergency support, genuine spares and priority response across Delhi NCR." />
        <link rel="canonical" href="https://linkwelengineers.com/services/amc" />
        <meta property="og:title" content="Annual Maintenance Contract (AMC) for Lifts & Cranes | Linkwel Engineers" />
        <meta property="og:description" content="Keep your lifts and cranes running perfectly with Linkwel Engineers' AMC programs." />
        <meta property="og:url" content="https://linkwelengineers.com/services/amc" />
      </Helmet>
      <SeoBreadcrumbs items={[{ name: "Services", path: "/services" }, { name: "AMC", path: "/services/amc" }]} hidden />

      {/* Hero */}
      <section className="pt-32 pb-20 navy-gradient">
        <div className="container mx-auto section-padding text-center">
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">Annual Maintenance Contract</p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-gold-light mb-6">
            Keep Your Lifts & Cranes <span className="text-gold-gradient">Running Perfectly</span>
          </h1>
          <p className="text-gold-light/70 font-body text-lg max-w-3xl mx-auto leading-relaxed">
            Regular maintenance is the single most important factor in safety, reliability and the long-term value of your elevators and industrial cranes. Linkwel Engineers' AMC programs ensure your equipment stays compliant, downtime stays low and your team stays focused on the work that matters.
          </p>
        </div>
      </section>
      <MarqueeStrip />

      {/* What AMC Covers */}
      <section className="py-24 bg-background">
        <div className="container mx-auto section-padding">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-3">Scope of Service</p>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">What Our AMC Covers</h2>
              <div className="w-16 h-0.5 bg-accent mx-auto mt-4" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {coverage.map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="flex items-start gap-4 glass-card rounded-lg p-6">
                  <CheckCircle2 className="text-accent shrink-0 mt-0.5" size={22} />
                  <p className="text-foreground font-body text-base leading-relaxed">{item}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Linkwel for AMC */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto section-padding">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-3">Why Linkwel</p>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">Why Choose Linkwel for AMC</h2>
              <div className="w-16 h-0.5 bg-accent mx-auto mt-4" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="glass-card rounded-lg p-8 text-center hover:premium-shadow transition-all duration-500 group">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <b.icon className="text-accent" size={28} />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-3">{b.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{b.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* AMC Form */}
      <section className="py-24 bg-background">
        <div className="container mx-auto section-padding max-w-2xl">
          <ScrollReveal>
            <div className="glass-card rounded-lg p-10">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-2">Request an AMC Quote</h2>
              <p className="text-muted-foreground font-body text-sm mb-6">
                Share a few details and our maintenance team will get in touch. Prefer to talk first? <Link to="/contact" className="text-accent hover:underline">Contact us</Link>.
              </p>
              <form name="amc" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-5">
                <input type="hidden" name="form-name" value="amc" />
                <div>
                  <label className="block text-sm font-body font-medium text-foreground mb-1.5">Name</label>
                  <input type="text" name="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-sm border border-border bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-foreground mb-1.5">Phone Number</label>
                  <input type="tel" name="phone" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 rounded-sm border border-border bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="+91 98185 11177" />
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-foreground mb-1.5">Product Type</label>
                  <select name="productType" required value={form.productType} onChange={(e) => setForm({ ...form, productType: e.target.value })} className="w-full px-4 py-3 rounded-sm border border-border bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50">
                    <option value="" disabled>Select a product</option>
                    {PRODUCT_TYPES.map((p) => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-foreground mb-1.5">City</label>
                  <input type="text" name="city" required value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className="w-full px-4 py-3 rounded-sm border border-border bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="e.g. New Delhi" />
                </div>
                <button type="submit" disabled={submitting} className="gold-gradient text-white font-body font-semibold px-8 py-3.5 rounded-sm tracking-wider uppercase text-sm hover:opacity-90 transition-opacity inline-flex items-center gap-2 w-full justify-center disabled:opacity-60">
                  <Send size={16} /> {submitting ? "Sending..." : "Request AMC Quote"}
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default AMC;
