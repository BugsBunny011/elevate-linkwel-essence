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

const serviceProcess = [
  {
    title: "Site survey and traffic study",
    desc: "Our engineers measure the shaft or bay, verify headroom, pit depth, power availability and structural clearances, then calculate handling capacity or duty class against the building's actual usage pattern.",
  },
  {
    title: "Specification and drawings",
    desc: "You receive a written specification with general arrangement drawings, load calculations, machine and drive selection, and cabin or crane configuration options before any commercial discussion.",
  },
  {
    title: "Manufacturing and factory testing",
    desc: "Cars, structures, girders and control panels are built at our own works and load tested before dispatch, so site time is spent on erection rather than fabrication.",
  },
  {
    title: "Erection and commissioning",
    desc: "A dedicated site team handles guide rail alignment, wiring, safety gear setting, load trials and statutory inspection support, and hands over documentation and operator training on completion.",
  },
  {
    title: "Maintenance handover",
    desc: "Every completed installation moves onto a scheduled maintenance plan with defined visit frequency, checklists, wear-part replacement and a named escalation contact for breakdown calls.",
  },
];

const serviceFaqs = [
  {
    q: "How often should a lift be serviced in Delhi NCR?",
    a: "Most passenger lifts in Delhi, Noida and Gurgaon are serviced monthly. High-traffic residential towers, hospitals and malls often move to fortnightly visits because dust ingress and heavy usage accelerate wear on door operators and ropes.",
  },
  {
    q: "What is the difference between comprehensive and non-comprehensive AMC?",
    a: "A non-comprehensive contract covers scheduled visits, inspection and labour, while parts are billed separately. A comprehensive contract additionally includes wear-part replacement such as contactors, door components, ropes and rollers within the agreed scope.",
  },
  {
    q: "Can you take over maintenance of a lift installed by another manufacturer?",
    a: "Yes. We take over third-party installations after a technical audit that records the controller type, drive, safety gear condition and spare availability, and we submit a remedial list before the contract begins.",
  },
  {
    q: "Do you modernize old elevators without major civil work?",
    a: "In most cases yes. VVVF drive replacement, gearless machine upgrades, new landing fixtures, ARD units and cabin interiors can usually be fitted in the existing shaft, with civil work needed only when speed or capacity changes materially.",
  },
  {
    q: "How quickly do you respond to a breakdown call?",
    a: "Contracted sites in Delhi NCR are attended by a technician from the nearest service hub, with entrapment calls treated as the highest priority and escalated to the service manager if not cleared on the first visit.",
  },
  {
    q: "Do you service industrial cranes as well as elevators?",
    a: "Yes. The same service organisation maintains EOT, gantry, goliath and jib cranes plus electric hoists, including structural inspection, brake and hoist testing and load trials.",
  },
];


const Services = () => {
  return (
    <Layout>
      <Helmet>
        <title>Elevator Installation & Lift AMC | Linkwel Engineers</title>
        <meta name="description" content="Linkwel Engineers offers professional elevator installation and lift AMC services across Delhi NCR. Reliable maintenance plans built for safety and uptime." />
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
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": serviceFaqs.map((f) => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a }
          }))
        })}</script>

      </Helmet>
      <SeoBreadcrumbs items={[{name: "Services",path: "/services"}]} hidden />
      <section className="pt-32 pb-20 navy-gradient">
        <div className="container mx-auto section-padding text-center">
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">What We Offer</p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-gold-light mb-6">
            Elevator Installation & <span className="text-gold-gradient">Lift AMC Services</span>
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

      {/* Service process — unique to this page */}
      <section className="py-20 bg-background">
        <div className="container mx-auto section-padding max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
              How a Linkwel Service Engagement Works
            </h2>
            <ol className="space-y-6">
              {serviceProcess.map((step, i) => (
                <li key={i} className="flex gap-5">
                  <span className="shrink-0 w-9 h-9 rounded-full bg-accent/10 text-accent font-body font-semibold text-sm flex items-center justify-center">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">{step.title}</h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="text-muted-foreground font-body leading-relaxed mt-8">
              Service teams are dispatched from our hubs covering{" "}
              <Link to="/delhi" className="text-accent underline underline-offset-2 hover:opacity-80">Delhi</Link>,{" "}
              <Link to="/noida" className="text-accent underline underline-offset-2 hover:opacity-80">Noida</Link> and{" "}
              <Link to="/gurgaon" className="text-accent underline underline-offset-2 hover:opacity-80">Gurgaon</Link>, with
              dedicated <Link to="/services/amc" className="text-accent underline underline-offset-2 hover:opacity-80">annual maintenance contracts</Link>{" "}
              available for every system we install or take over.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQs — unique to this page */}
      <section className="py-20 bg-card">
        <div className="container mx-auto section-padding max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
              Lift & Crane Service FAQs
            </h2>
            <div className="space-y-6">
              {serviceFaqs.map((f, i) => (
                <div key={i} className="glass-card rounded-lg p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-2">{f.q}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
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
