import { Building2, Wrench, RefreshCw, Settings, FileCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
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
