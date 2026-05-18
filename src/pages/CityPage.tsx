import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Shield, Award, Building2, Settings, ChevronRight, MapPin, Wrench, Factory } from "lucide-react";
import Layout from "@/components/Layout";
import MarqueeStrip from "@/components/MarqueeStrip";
import SeoBreadcrumbs from "@/components/SeoBreadcrumbs";
import ScrollReveal from "@/components/ScrollReveal";
import { liftProducts, craneProducts } from "@/data/products";

interface CityConfig {
  slug: "delhi" | "noida" | "gurgaon";
  city: string;
  intro?: string;
}

interface CityData {
  intro: string;
  localities: string[];
  industries: string[];
  keywords: string[];
  faqs: { q: string; a: string }[];
}

const cityData: Record<string, CityData> = {
  delhi: {
    intro:
      "Headquartered in Okhla, New Delhi, Linkwel Engineers is a leading elevator manufacturer and industrial crane supplier in Delhi since 1989. With 35+ years of engineering experience, we design, install and maintain passenger lifts, home elevators, goods lifts, hospital lifts, capsule lifts, EOT cranes, gantry cranes and jib cranes across residential towers, commercial buildings, hospitals, factories and warehouses throughout the capital.",
    localities: [
      "South Delhi", "North Delhi", "East Delhi", "West Delhi", "Central Delhi",
      "Dwarka", "Rohini", "Saket", "Vasant Kunj", "Karol Bagh",
      "Connaught Place", "Pitampura", "Janakpuri", "Mayur Vihar", "Okhla",
    ],
    industries: ["Residential High-Rises", "Hospitals & Healthcare", "Hotels & Hospitality", "Shopping Malls", "Warehouses & Logistics", "Manufacturing Plants"],
    keywords: [
      "Elevator manufacturer in Delhi",
      "Lift company in Delhi",
      "Passenger lift dealers in Delhi",
      "Home elevator price in Delhi",
      "Hospital lift suppliers in Delhi",
      "EOT crane manufacturer in Delhi",
      "Goods lift installation Delhi",
      "Capsule lift suppliers in Delhi",
      "Lift AMC services Delhi",
      "Industrial crane company in Delhi NCR",
    ],
    faqs: [
      { q: "Who is the best elevator manufacturer in Delhi?", a: "Linkwel Engineers, headquartered in Okhla, has been a trusted elevator manufacturer in Delhi since 1989, with 35+ years of experience installing and maintaining lifts across the capital." },
      { q: "Do you provide lift installation in residential buildings in Delhi?", a: "Yes. We design and install passenger lifts, home elevators and capsule lifts for villas, apartments and high-rise residential projects across all zones of Delhi." },
      { q: "What types of cranes do you manufacture in Delhi?", a: "We manufacture and supply EOT cranes, single & double girder cranes, gantry cranes, goliath cranes, jib cranes and electric hoists for industries across Delhi NCR." },
      { q: "Do you offer AMC and maintenance for lifts in Delhi?", a: "Yes. We offer comprehensive Annual Maintenance Contracts (AMC) covering safety checks, repairs and emergency support for elevators and cranes anywhere in Delhi." },
    ],
  },
  noida: {
    intro:
      "Linkwel Engineers proudly serves Noida, Greater Noida and Noida Extension with end-to-end elevator and industrial crane solutions. Backed by 35+ years of expertise, we deliver passenger lifts, home elevators, goods lifts, hospital elevators, EOT cranes and gantry cranes engineered for Noida's fast-growing residential complexes, IT parks, hospitals and manufacturing units.",
    localities: [
      "Sector 18", "Sector 62", "Sector 63", "Sector 75", "Sector 137",
      "Greater Noida West", "Noida Extension", "Knowledge Park", "Pari Chowk",
      "Sector 16", "Sector 50", "Sector 128", "Yamuna Expressway", "Surajpur",
    ],
    industries: ["IT Parks & SEZs", "Residential Townships", "Hospitals", "Hotels", "Warehousing & Logistics", "Electronics & Manufacturing"],
    keywords: [
      "Elevator manufacturer in Noida",
      "Lift dealers in Noida",
      "Home lift price in Noida",
      "Passenger lift suppliers in Greater Noida",
      "Hospital elevator in Noida",
      "EOT crane manufacturer Noida",
      "Goods lift installation Noida Extension",
      "Industrial crane suppliers Greater Noida",
      "Lift AMC services in Noida",
      "Capsule elevator company Noida",
    ],
    faqs: [
      { q: "Who is the best lift manufacturer in Noida?", a: "Linkwel Engineers is a leading lift manufacturer serving Noida, Greater Noida and Noida Extension with premium passenger, home and goods elevators backed by 35+ years of experience." },
      { q: "Do you install home elevators in Noida?", a: "Yes. We design space-saving home elevators for villas, duplexes and independent houses across all sectors of Noida and Greater Noida." },
      { q: "Do you supply industrial cranes in Greater Noida?", a: "Yes. We manufacture EOT cranes, gantry cranes, jib cranes and electric hoists for factories and warehouses across Greater Noida, Yamuna Expressway and Surajpur industrial belts." },
      { q: "Do you offer elevator AMC in Noida?", a: "Yes. Our AMC plans cover preventive maintenance, safety inspections and emergency breakdown support for lifts and cranes throughout Noida and Greater Noida." },
    ],
  },
  gurgaon: {
    intro:
      "From corporate high-rises in Cyber City to industrial hubs in Manesar and Sohna Road, Linkwel Engineers has been a trusted elevator and crane manufacturer in Gurgaon (Gurugram) for over 35 years. We provide premium passenger lifts, home elevators, goods lifts, capsule lifts, EOT cranes, gantry cranes and complete AMC services tailored to Gurgaon's commercial and industrial landscape.",
    localities: [
      "Cyber City", "DLF Phase 1-5", "Golf Course Road", "Sohna Road", "Sector 14",
      "Sector 29", "Sector 44", "Sector 56", "Manesar", "IMT Manesar",
      "Udyog Vihar", "MG Road", "Dwarka Expressway", "New Gurgaon", "Sushant Lok",
    ],
    industries: ["Corporate Offices", "Luxury Residential", "5-Star Hotels", "Auto & Component Plants", "Logistics Parks", "Healthcare"],
    keywords: [
      "Elevator manufacturer in Gurgaon",
      "Lift company in Gurugram",
      "Home elevator price in Gurgaon",
      "Passenger lift dealers Gurgaon",
      "Capsule lift suppliers Gurgaon",
      "EOT crane manufacturer Manesar",
      "Goods lift installation Gurgaon",
      "Industrial crane company Sohna Road",
      "Lift AMC services Gurgaon",
      "Hospital lift suppliers Gurugram",
    ],
    faqs: [
      { q: "Who is the best elevator manufacturer in Gurgaon?", a: "Linkwel Engineers is a leading elevator and crane manufacturer in Gurgaon (Gurugram) with 35+ years of experience serving corporate, residential and industrial projects across DLF, Cyber City, Sohna Road and Manesar." },
      { q: "Do you install capsule elevators in Gurgaon?", a: "Yes. We design and install premium capsule and panoramic elevators for hotels, malls and luxury residences across Gurgaon and Gurugram." },
      { q: "Do you manufacture industrial cranes in Manesar?", a: "Yes. We supply EOT cranes, gantry cranes, jib cranes and electric hoists to automobile plants, component manufacturers and warehouses across Manesar and IMT Manesar." },
      { q: "Do you provide elevator AMC in Gurgaon?", a: "Yes. Our AMC plans cover preventive maintenance, 24-hour breakdown support and safety inspections for lifts and cranes throughout Gurgaon, DLF, Cyber City and Manesar." },
    ],
  },
};

const expertise = [
  { icon: Building2, title: "Elevator Solutions", desc: "State-of-the-art elevator and lift solutions for commercial, residential, and industrial buildings." },
  { icon: Settings, title: "Industrial Cranes", desc: "EOT, gantry, and jib cranes engineered for precision material handling across industries." },
  { icon: Shield, title: "Safety First", desc: "Rigorous safety standards and compliance with international regulations." },
  { icon: Award, title: "Certified Excellence", desc: "Industry-leading engineering practices with rigorous quality standards." },
];

const CityPage = ({ slug, city }: CityConfig) => {
  const data = cityData[slug];
  const canonical = `https://linkwelengineers.com/${slug}`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Linkwel Engineers — ${city}`,
    url: canonical,
    image: "https://linkwelengineers.com/linkwel-logo.png",
    telephone: "+91 9818511177",
    email: "info@linkwelengineers.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "62 DSIDC Complex, Okhla Phase I",
      addressLocality: "New Delhi",
      addressRegion: "Delhi",
      postalCode: "110020",
      addressCountry: "IN",
    },
    areaServed: city,
    description: `Linkwel Engineers — leading manufacturer of elevators, lifts and industrial cranes serving ${city}. 35+ years of engineering excellence.`,
  };

  return (
    <Layout>
      <Helmet>
        <title>{`Elevators, Lifts & Cranes in ${city} | Linkwel Engineers`}</title>
        <meta name="description" content={`Leading elevator & industrial crane manufacturer in ${city}. Passenger lifts, home elevators, goods lifts, EOT & gantry cranes. 35+ years experience. Free quote.`} />
        <meta name="keywords" content={data.keywords.join(", ")} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={`Elevators, Lifts & Cranes in ${city} | Linkwel Engineers`} />
        <meta property="og:description" content={`Premium lifts and industrial cranes in ${city} by Linkwel Engineers.`} />
        <meta property="og:url" content={canonical} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
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
            {data.intro}
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

          <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">Lifts & Elevators in {city}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {liftProducts.map((p, i) => (
              <ScrollReveal key={p.slug} delay={i * 80}>
                <Link to={`/products/${p.slug}`} className="block group rounded-lg overflow-hidden glass-card hover:premium-shadow transition-all duration-500">
                  <img src={p.image} alt={`${p.title} in ${city}`} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="p-6">
                    <h4 className="font-heading text-lg font-semibold text-foreground mb-2">{p.title} in {city}</h4>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed line-clamp-3">{p.shortDesc}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">Industrial Cranes in {city}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {craneProducts.map((p, i) => (
              <ScrollReveal key={p.slug} delay={i * 80}>
                <Link to={`/products/${p.slug}`} className="block group rounded-lg overflow-hidden glass-card hover:premium-shadow transition-all duration-500">
                  <img src={p.image} alt={`${p.title} in ${city}`} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="p-6">
                    <h4 className="font-heading text-lg font-semibold text-foreground mb-2">{p.title} in {city}</h4>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed line-clamp-3">{p.shortDesc}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto section-padding">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-3">Coverage</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Areas We Serve in {city}</h2>
              <div className="w-16 h-0.5 bg-accent mx-auto mt-4" />
            </div>
          </ScrollReveal>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {data.localities.map((loc) => (
              <span key={loc} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-body text-foreground">
                <MapPin size={14} className="text-accent" /> {loc}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-background">
        <div className="container mx-auto section-padding">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-3">Industries</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Industries We Serve in {city}</h2>
              <div className="w-16 h-0.5 bg-accent mx-auto mt-4" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {data.industries.map((ind) => (
              <div key={ind} className="glass-card rounded-lg p-5 flex items-center gap-3">
                <Factory size={20} className="text-accent shrink-0" />
                <span className="font-body text-sm text-foreground">{ind}</span>
              </div>
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

      {/* FAQ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto section-padding max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-3">FAQs</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Lifts & Cranes in {city} — FAQs</h2>
              <div className="w-16 h-0.5 bg-accent mx-auto mt-4" />
            </div>
          </ScrollReveal>
          <div className="space-y-4">
            {data.faqs.map((f, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="glass-card rounded-lg p-6">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{f.q}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{f.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-surface">
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
                <Wrench size={14} /> Explore AMC
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
                <Link to="/locations" className="text-sm font-body text-accent hover:underline inline-flex items-center gap-1">
                  Other Locations We Serve <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default CityPage;
