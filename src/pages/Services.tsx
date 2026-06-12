import { Building2, Wrench, RefreshCw, Settings, FileCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import MarqueeStrip from "@/components/MarqueeStrip";
import SeoBreadcrumbs from "@/components/SeoBreadcrumbs";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    icon: Building2,
    title: "Elevator Installation",
    desc: "Complete elevator installation services for residential, commercial, and industrial buildings. We handle everything from design consultation to final commissioning.",
  },
  {
    icon: Wrench,
    title: "Elevator Maintenance",
    desc: "Preventive and predictive maintenance programs to keep your elevators running smoothly. Regular inspections, lubrication, and component testing.",
  },
  {
    icon: RefreshCw,
    title: "Elevator Modernization",
    desc: "Upgrade your existing elevator systems with modern technology, improved safety features, energy efficiency, and aesthetic enhancements.",
  },
  {
    icon: Settings,
    title: "Repair Services",
    desc: "Fast, reliable repair services with rapid emergency response. Our expert technicians diagnose and resolve issues quickly to minimize downtime.",
  },
  {
    icon: FileCheck,
    title: "AMC Contracts",
    desc: "Comprehensive Annual Maintenance Contracts tailored to your needs. Enjoy peace of mind with scheduled maintenance and priority support.",
  },
];

const Services = () => {
  return (
    <Layout>
      <Helmet>
        <title>Lift & Crane Services | Installation & AMC – Linkwel</title>
        <meta name="description" content="Linkwel Engineers offers expert installation, maintenance, modernization & AMC services for elevators, lifts and industrial cranes across Delhi NCR & India." />
        <meta name="keywords" content="lift installation services, elevator maintenance, crane installation services, EOT crane maintenance, elevator modernization, AMC elevator and crane, industrial crane services India" />
        <link rel="canonical" href="https://linkwelengineers.com/services" />
        <meta property="og:title" content="Lift & Crane Services | Installation & AMC – Linkwel" />
        <meta property="og:description" content="Installation, maintenance, modernization & AMC for elevators, lifts and industrial cranes across India since 1989." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://linkwelengineers.com/services" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lift & Crane Services | Installation & AMC – Linkwel" />
        <meta name="twitter:description" content="Expert installation, maintenance & AMC services for lifts and industrial cranes across India." />
        <meta property="og:image" content="https://linkwelengineers.com/og-image.jpg" />
        <meta name="twitter:image" content="https://linkwelengineers.com/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Lift & Crane Services by Linkwel Engineers",
          "itemListElement": services.map((s, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "item": {
              "@type": "Service",
              "name": s.title,
              "description": s.desc,
              "provider": {
                "@type": "Organization",
                "name": "Linkwel Engineers",
                "url": "https://linkwelengineers.com"
              },
              "areaServed": [
                { "@type": "City", "name": "New Delhi" },
                { "@type": "City", "name": "Noida" },
                { "@type": "City", "name": "Gurgaon" }
              ],
              "serviceType": s.title
            }
          }))
        })}</script>
      </Helmet>
      <SeoBreadcrumbs items={[{name: "Services",path: "/services"}]} hidden />
      <section className="pt-32 pb-20 navy-gradient">
        <div className="container mx-auto section-padding text-center">
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">What We Offer</p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-gold-light mb-6">
            Our <span className="text-gold-gradient">Services</span>
          </h1>
          <p className="text-gold-light/60 font-body text-lg max-w-2xl mx-auto">
            Comprehensive elevator solutions from installation to modernization, backed by expert engineering.
          </p>
        </div>
      </section>
      <MarqueeStrip />

      <section className="py-24 bg-background">
        <div className="container mx-auto section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="glass-card rounded-lg p-8 h-full group hover:premium-shadow transition-all duration-500 hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <s.icon className="text-accent" size={26} />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">{s.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">{s.desc}</p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-accent font-body font-semibold text-xs uppercase tracking-wider hover:gap-3 transition-all"
                  >
                    Enquire Now <ArrowRight size={14} />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* In-depth content for SEO */}
      <section className="py-20 bg-card">
        <div className="container mx-auto section-padding max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              End-to-End Lift & Crane Services Across Delhi NCR
            </h2>
            <div className="space-y-5 text-muted-foreground font-body leading-relaxed">
              <p>
                For over 35 years, Linkwel Engineers has delivered turnkey vertical mobility and material
                handling solutions across New Delhi, Noida, Gurgaon and the rest of India. Our service
                portfolio covers the full lifecycle of every installation, from initial site survey and
                load calculation through commissioning, scheduled maintenance, modernization and
                long-term support contracts.
              </p>
              <p>
                We service the complete range of our manufactured equipment, including{" "}
                <Link to="/products/passenger-elevators" className="text-accent underline underline-offset-2 hover:opacity-80">passenger elevators</Link>,{" "}
                <Link to="/products/home-elevators" className="text-accent underline underline-offset-2 hover:opacity-80">home elevators</Link>,{" "}
                <Link to="/products/hospital-elevators" className="text-accent underline underline-offset-2 hover:opacity-80">hospital elevators</Link>,{" "}
                <Link to="/products/goods-elevators" className="text-accent underline underline-offset-2 hover:opacity-80">goods elevators</Link>, and the full{" "}
                <Link to="/products/cranes" className="text-accent underline underline-offset-2 hover:opacity-80">industrial crane line-up</Link> covering EOT, gantry, jib and goliath configurations.
              </p>
              <p>
                Our maintenance and AMC programs are designed to maximize uptime and equipment lifespan.
                Each contract includes scheduled inspections, lubrication, safety-circuit testing,
                wear-component replacement and priority breakdown response by trained technicians based
                out of our Delhi NCR service hubs.
              </p>
              <p>
                Modernization projects upgrade legacy installations with VVVF drives, gearless machines,
                modern landing fixtures, ARD units and contemporary cabin interiors, often without
                requiring major civil work. Read more about industry trends in our{" "}
                <Link to="/blog/india-vertical-mobility-boom-2026" className="text-accent underline underline-offset-2 hover:opacity-80">India vertical mobility report</Link>{" "}
                and our{" "}
                <Link to="/blog/home-elevator-buying-guide-india-2026" className="text-accent underline underline-offset-2 hover:opacity-80">home elevator buying guide</Link>.
              </p>
              <p>
                To request a site visit, scope a new installation or move an existing system onto an
                AMC plan, please <Link to="/contact" className="text-accent underline underline-offset-2 hover:opacity-80">get in touch with our team</Link>.
                You can also explore our full{" "}
                <Link to="/products" className="text-accent underline underline-offset-2 hover:opacity-80">product catalogue</Link> or read about our{" "}
                <Link to="/about" className="text-accent underline underline-offset-2 hover:opacity-80">company story</Link>.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 navy-gradient">
        <div className="container mx-auto section-padding text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gold-light mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-gold-light/60 font-body max-w-xl mx-auto mb-8">
              Our engineers can design a tailored elevator solution for your specific requirements.
            </p>
            <Link
              to="/contact"
              className="gold-gradient text-white font-body font-semibold px-10 py-4 rounded-sm tracking-wider uppercase text-sm hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              Get a Free Quote <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
