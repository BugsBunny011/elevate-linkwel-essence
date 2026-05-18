import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Shield, Award, Building2, Settings, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import MarqueeStrip from "@/components/MarqueeStrip";
import SeoBreadcrumbs from "@/components/SeoBreadcrumbs";
import ScrollReveal from "@/components/ScrollReveal";
import { liftProducts, craneProducts } from "@/data/products";

interface CityConfig {
  slug: "delhi" | "noida" | "gurgaon";
  city: string;
  intro: string;
}

const cityCopy: Record<string, string> = {
  delhi:
    "Headquartered in Okhla, New Delhi, Linkwel Engineers has been serving the Delhi market with premium elevators and industrial cranes since 1989. With over 35 years of engineering experience, we have installed and maintained lifts and cranes across residential towers, commercial buildings, hospitals, factories and warehouses throughout the capital.",
  noida:
    "Linkwel Engineers proudly serves clients across Noida and Greater Noida with end-to-end elevator and crane solutions. Backed by 35+ years of expertise, we deliver passenger lifts, home lifts, goods lifts and industrial cranes engineered for the city's growing residential complexes, IT parks, hospitals and manufacturing units.",
  gurgaon:
    "From corporate high-rises in Cyber City to industrial hubs in Manesar and Sohna Road, Linkwel Engineers has been a trusted name in Gurgaon for over 35 years. We provide premium elevators, EOT cranes, gantry cranes and complete maintenance services tailored to Gurgaon's commercial and industrial landscape.",
};

const expertise = [
  { icon: Building2, title: "Elevator Solutions", desc: "State-of-the-art elevator and lift solutions for commercial, residential, and industrial buildings." },
  { icon: Settings, title: "Industrial Cranes", desc: "EOT, gantry, and jib cranes engineered for precision material handling across industries." },
  { icon: Shield, title: "Safety First", desc: "Rigorous safety standards and compliance with international regulations." },
  { icon: Award, title: "Certified Excellence", desc: "Industry-leading engineering practices with rigorous quality standards." },
];

const CityPage = ({ slug, city }: CityConfig) => {
  const intro = cityCopy[slug];
  const canonical = `https://linkwelengineers.com/${slug}`;
  return (
    <Layout>
      <Helmet>
        <title>{`Elevator & Crane Manufacturers in ${city} | Linkwel Engineers`}</title>
        <meta name="description" content={`Linkwel Engineers — leading manufacturer of elevators, lifts and industrial cranes in ${city}. 35+ years of engineering excellence. Get a free quote.`} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={`Elevator & Crane Manufacturers in ${city} | Linkwel Engineers`} />
        <meta property="og:description" content={`Premium lifts and industrial cranes in ${city} by Linkwel Engineers. 35+ years serving Delhi NCR.`} />
        <meta property="og:url" content={canonical} />
      </Helmet>
      <SeoBreadcrumbs items={[{ name: city, path: `/${slug}` }]} hidden />

      {/* Hero */}
      <section className="pt-32 pb-20 navy-gradient">
        <div className="container mx-auto section-padding text-center">
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">Serving {city} Since 1989</p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-gold-light mb-6">
            Elevator & Crane Manufacturers in <span className="text-gold-gradient">{city}</span>
          </h1>
          <p className="text-gold-light/70 font-body text-lg max-w-3xl mx-auto leading-relaxed">
            {intro}
          </p>
        </div>
      </section>
      <MarqueeStrip />

      {/* Products */}
      <section className="py-24 bg-background">
        <div className="container mx-auto section-padding">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-3">Our Range</p>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">Lifts & Cranes in {city}</h2>
              <div className="w-16 h-0.5 bg-accent mx-auto mt-4" />
            </div>
          </ScrollReveal>

          <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">Lifts & Elevators</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {liftProducts.map((p, i) => (
              <ScrollReveal key={p.slug} delay={i * 80}>
                <Link to={`/products/${p.slug}`} className="block group rounded-lg overflow-hidden glass-card hover:premium-shadow transition-all duration-500">
                  <img src={p.image} alt={`${p.title} in ${city}`} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="p-6">
                    <h4 className="font-heading text-lg font-semibold text-foreground mb-2">{p.title}</h4>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed line-clamp-3">{p.shortDesc}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">Industrial Cranes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {craneProducts.map((p, i) => (
              <ScrollReveal key={p.slug} delay={i * 80}>
                <Link to={`/products/${p.slug}`} className="block group rounded-lg overflow-hidden glass-card hover:premium-shadow transition-all duration-500">
                  <img src={p.image} alt={`${p.title} in ${city}`} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="p-6">
                    <h4 className="font-heading text-lg font-semibold text-foreground mb-2">{p.title}</h4>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed line-clamp-3">{p.shortDesc}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto section-padding">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-3">Why Choose Us</p>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">Engineering Excellence in {city}</h2>
              <div className="w-16 h-0.5 bg-accent mx-auto mt-4" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="glass-card rounded-lg p-8 text-center hover:premium-shadow transition-all duration-500 group">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <item.icon className="text-accent" size={28} />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto section-padding text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Need a Lift or Crane in {city}?
            </h2>
            <p className="text-muted-foreground font-body max-w-xl mx-auto mb-8">
              Get in touch with our experts for a free consultation and quote tailored to your project in {city}.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <Link
                to="/contact"
                className="gold-gradient text-white font-body font-semibold px-10 py-4 rounded-sm tracking-wider uppercase text-sm hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                Request a Quote <ArrowRight size={16} />
              </Link>
              <Link
                to="/services/amc"
                className="border border-accent/40 text-foreground font-body font-semibold px-10 py-4 rounded-sm tracking-wider uppercase text-sm hover:bg-accent/10 transition-colors inline-flex items-center gap-2"
              >
                Explore AMC <ChevronRight size={16} />
              </Link>
            </div>

            {/* Cross-city interlinks */}
            <div className="border-t border-border pt-8">
              <p className="text-xs font-body uppercase tracking-[0.3em] text-muted-foreground mb-4">Also Serving</p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {[
                  { slug: "delhi", name: "Delhi" },
                  { slug: "noida", name: "Noida" },
                  { slug: "gurgaon", name: "Gurgaon" },
                ]
                  .filter((c) => c.slug !== slug)
                  .map((c) => (
                    <Link
                      key={c.slug}
                      to={`/${c.slug}`}
                      className="text-sm font-body text-accent hover:underline inline-flex items-center gap-1"
                    >
                      Elevators & Cranes in {c.name} <ChevronRight size={14} />
                    </Link>
                  ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default CityPage;
