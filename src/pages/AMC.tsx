import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  CheckCircle2,
  Shield,
  Clock,
  Wrench,
  Settings,
  Building2,
  Factory,
  Hospital,
  Briefcase,
  Home,
  ArrowRight,
} from "lucide-react";
import Layout from "@/components/Layout";
import MarqueeStrip from "@/components/MarqueeStrip";
import SeoBreadcrumbs from "@/components/SeoBreadcrumbs";
import ScrollReveal from "@/components/ScrollReveal";

const coverageItems = [
  "Preventive maintenance visits",
  "Lubrication & adjustments",
  "Emergency breakdown support",
  "Safety inspections",
  "Spare parts priority",
];

const tiers = [
  {
    name: "Basic AMC",
    subtitle: "Scheduled visits, no parts included",
    points: [
      "Scheduled preventive maintenance visits",
      "Lubrication, adjustments & alignment",
      "Safety inspection & compliance checks",
      "Emergency breakdown support (call-out charges apply)",
      "Detailed service report after every visit",
    ],
  },
  {
    name: "Comprehensive AMC",
    subtitle: "Parts + labour included",
    points: [
      "Everything in Basic AMC",
      "Genuine OEM spare parts included",
      "Labour for repairs & replacements covered",
      "Priority 24/7 breakdown response",
      "Remote diagnostics & uptime monitoring",
    ],
  },
];

const audiences = [
  { icon: Home, label: "Residential Buildings" },
  { icon: Factory, label: "Factories & Warehouses" },
  { icon: Hospital, label: "Hospitals & Clinics" },
  { icon: Briefcase, label: "Commercial Offices" },
];

const benefits = [
  { icon: Shield, title: "Safety First", desc: "Every visit follows strict IS and international safety protocols, protecting users and your liability." },
  { icon: Clock, title: "Priority Response", desc: "AMC clients receive priority dispatch and faster turnaround on breakdown calls." },
  { icon: Wrench, title: "OEM Spare Parts", desc: "Genuine, manufacturer-grade spares to extend equipment life and avoid recurring faults." },
  { icon: Settings, title: "Certified Technicians", desc: "Trained engineers with decades of hands-on experience across elevators and lifts of all makes and models." },
];

const AMC = () => {
  return (
    <Layout>
      <Helmet>
        <title>Elevator AMC Services | Annual Maintenance Contract – Linkwel Engineers</title>
        <meta name="description" content="Linkwel Engineers offers comprehensive AMC for elevators and lifts in Delhi NCR. Preventive maintenance, 24/7 breakdown support, and certified technicians." />
        <meta name="keywords" content="elevator AMC Delhi NCR, lift AMC services, elevator annual maintenance contract, elevator preventive maintenance, lift maintenance Delhi NCR" />
        <link rel="canonical" href="https://linkwelengineers.com/services/amc" />
        <meta property="og:title" content="Elevator AMC Services | Annual Maintenance Contract – Linkwel Engineers" />
        <meta property="og:description" content="Comprehensive AMC for elevators and lifts in Delhi NCR. Preventive maintenance, 24/7 breakdown support, and certified technicians." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://linkwelengineers.com/services/amc" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Elevator AMC Services | Annual Maintenance Contract – Linkwel Engineers" />
        <meta name="twitter:description" content="Comprehensive AMC for elevators and lifts in Delhi NCR. Preventive maintenance, 24/7 breakdown support, and certified technicians." />
        <meta property="og:image" content="https://linkwelengineers.com/og-image.jpg" />
        <meta name="twitter:image" content="https://linkwelengineers.com/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Elevator Annual Maintenance Contract",
          "description": "Linkwel Engineers offers comprehensive AMC for elevators and lifts in Delhi NCR. Preventive maintenance, 24/7 breakdown support, and certified technicians.",
          "provider": {
            "@type": "Organization",
            "name": "Linkwel Engineers",
            "url": "https://linkwelengineers.com",
            "telephone": "+91-9818511177",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "62, DSIDC Complex, Okhla Phase I",
              "addressLocality": "New Delhi",
              "addressRegion": "Delhi",
              "postalCode": "110020",
              "addressCountry": "IN"
            }
          },
          "areaServed": [
            { "@type": "City", "name": "New Delhi" },
            { "@type": "City", "name": "Noida" },
            { "@type": "City", "name": "Gurgaon" }
          ],
          "serviceType": "Annual Maintenance Contract",
          "url": "https://linkwelengineers.com/services/amc"
        })}</script>
      </Helmet>

      <SeoBreadcrumbs items={[{ name: "Services", path: "/services" }, { name: "AMC", path: "/services/amc" }]} />

      {/* Hero */}
      <section className="pt-32 pb-20 navy-gradient">
        <div className="container mx-auto section-padding text-center">
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">Annual Maintenance Contract</p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-gold-light mb-6">
            Annual Maintenance Contract <span className="text-gold-gradient">(AMC)</span>
          </h1>
          <p className="text-gold-light/70 font-body text-lg max-w-3xl mx-auto leading-relaxed">
            Guaranteed uptime, certified technicians, and genuine spare parts — so you can focus on your business while we keep your elevators and lifts running flawlessly.
          </p>
        </div>
      </section>
      <MarqueeStrip />

      {/* What's Covered */}
      <section className="py-24 bg-background">
        <div className="container mx-auto section-padding">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-3">Scope of Service</p>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">What's Covered</h2>
              <div className="w-16 h-0.5 bg-accent mx-auto mt-4" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {coverageItems.map((item, i) => (
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

      {/* Two Tiers */}
      <section className="py-24 bg-card">
        <div className="container mx-auto section-padding">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-3">Choose Your Plan</p>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">AMC Tiers</h2>
              <div className="w-16 h-0.5 bg-accent mx-auto mt-4" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {tiers.map((tier, i) => (
              <ScrollReveal key={i} delay={i * 120}>
                <div className="glass-card rounded-lg p-8 h-full hover:premium-shadow transition-all duration-500 hover:-translate-y-1">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2">{tier.name}</h3>
                  <p className="text-muted-foreground font-body text-sm mb-8">{tier.subtitle}</p>
                  <ul className="space-y-4">
                    {tier.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2 className="text-accent mt-0.5 shrink-0" size={18} />
                        <span className="text-foreground font-body text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 bg-background">
        <div className="container mx-auto section-padding">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-3">Industries We Serve</p>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">Who It's For</h2>
              <div className="w-16 h-0.5 bg-accent mx-auto mt-4" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {audiences.map((a, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="glass-card rounded-lg p-8 text-center hover:premium-shadow transition-all duration-500 group">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <a.icon className="text-accent" size={28} />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground">{a.label}</h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Linkwel */}
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

      {/* CTA */}
      <section className="py-20 navy-gradient">
        <div className="container mx-auto section-padding text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gold-light mb-4">
              Protect Your Investment
            </h2>
            <p className="text-gold-light/60 font-body max-w-xl mx-auto mb-8">
              Get a tailored Annual Maintenance Contract for your elevators and lifts. Our team will scope your site and recommend the right plan.
            </p>
            <Link
              to="/contact"
              className="gold-gradient text-white font-body font-semibold px-10 py-4 rounded-sm tracking-wider uppercase text-sm hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              Get AMC Quote <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default AMC;
