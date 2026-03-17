import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Award, Wrench, Building2, Star, Quote, ChevronRight, Phone, Crane } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import heroFallback from "@/assets/hero-fallback.jpg";
import installImg from "@/assets/elevator-installation.jpg";
import catVillas from "@/assets/category-villas.jpg";
import catApartments from "@/assets/category-apartments.jpg";
import catCorporate from "@/assets/category-corporate.jpg";
import eotCraneImg from "@/assets/product-eot-crane.jpg";

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "35+", label: "Years Experience" },
  { value: "500+", label: "Happy Clients" },
];

const expertise = [
  { icon: Building2, title: "Elevator Solutions", desc: "State-of-the-art elevator and lift solutions for commercial, residential, and industrial buildings." },
  { icon: Crane, title: "Industrial Cranes", desc: "EOT, gantry, and jib cranes engineered for precision material handling across industries." },
  { icon: Shield, title: "Safety First", desc: "Rigorous safety standards and compliance with international regulations." },
  { icon: Award, title: "Certified Excellence", desc: "Industry-leading engineering practices with rigorous quality standards." },
];

const projects = [
  { img: catVillas, name: "Private Villas & Independent Homes" },
  { img: catApartments, name: "Residential Apartment Buildings" },
  { img: catCorporate, name: "Corporate Offices & Commercial Buildings" },
];

const testimonials = [
  { name: "Rajesh Patel", role: "Director, Skyline Group", text: "Linkwel Engineers delivered exceptional elevator installations across our building. Their professionalism, reliability, and attention to detail were truly outstanding." },
  { name: "Priya Sharma", role: "Facility Manager, Grand Hotels", text: "The maintenance service from Linkwel is unparalleled. Our elevators run flawlessly and their response time is incredibly fast." },
  { name: "Amit Desai", role: "CEO, Metro Developments", text: "We've trusted Linkwel Engineers for over a decade. Their modernization work transformed our aging elevators into state-of-the-art systems." },
];

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>Linkwel Engineers | Elevator & Crane Manufacturers in India</title>
        <meta name="description" content="Linkwel Engineers - leading elevator & crane manufacturers in India. Premium lifts, EOT cranes, gantry cranes. Installation, maintenance & manufacturing in Delhi." />
        <meta name="keywords" content="elevator manufacturers in India, crane manufacturers in India, lift manufacturers in Delhi, EOT crane manufacturers, gantry crane suppliers, best lifts in India" />
        <link rel="canonical" href="https://linkwelengineers.com/" />
        <meta property="og:title" content="Linkwel Engineers | Elevator & Crane Manufacturers in India" />
        <meta property="og:description" content="Leading elevator & crane manufacturers in India. Premium lifts and industrial cranes for all applications." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://linkwelengineers.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Linkwel Engineers | Elevator & Crane Manufacturers in India" />
        <meta name="twitter:description" content="Leading elevator & crane manufacturers in India offering premium lift and crane solutions." />
      </Helmet>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster={heroFallback}
          >
            <source src="https://assets.mixkit.co/videos/30544/30544-720.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-navy-dark/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-navy-dark/30" />
        </div>

        <div className="relative z-10 text-center section-padding max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-gold font-body text-sm md:text-base tracking-[0.3em] uppercase mb-4">
              Elevator & Crane Manufacturers in India
            </p>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-gold-light leading-tight mb-4"
          >
            Elevating Standards,
            <br />
            <span className="text-gold-gradient">Engineering Trust</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-gold font-heading text-xl md:text-2xl italic tracking-wide mb-6"
          >
            "Sky Is the Limit."
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gold-light/60 font-body text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            Premier elevator and crane solutions backed by over 35 years of engineering excellence.
            Lifts, cranes, installation, and maintenance you can trust.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/products"
              className="gold-gradient text-white font-body font-semibold px-8 py-3.5 rounded-sm tracking-wider uppercase text-sm hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              Our Products <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="border border-gold/40 text-gold font-body font-medium px-8 py-3.5 rounded-sm tracking-wider uppercase text-sm hover:bg-gold/10 transition-colors inline-flex items-center gap-2"
            >
              Get a Quote <ChevronRight size={16} />
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gold/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-gold rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="navy-gradient py-16">
        <div className="container mx-auto section-padding">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-heading font-bold text-gold mb-2">{stat.value}</p>
                  <p className="text-gold-light/60 font-body text-sm uppercase tracking-wider">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24 bg-background">
        <div className="container mx-auto section-padding">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-3">What We Do</p>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">Our Expertise</h2>
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

      {/* Crane Highlight Section */}
      <section className="py-24 navy-gradient">
        <div className="container mx-auto section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">Crane Manufacturing</p>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gold-light mb-6">
                  Industrial Cranes Built for Performance
                </h2>
                <p className="text-gold-light/60 font-body leading-relaxed mb-6">
                  From our roots in crane component manufacturing, Linkwel Engineers has grown into a trusted
                  name among crane manufacturers in India. Our EOT cranes, gantry cranes, and jib cranes are
                  engineered for precision, durability, and safety in demanding industrial environments.
                </p>
                <div className="space-y-3 mb-8">
                  {["EOT Cranes – up to 100-ton capacity", "Gantry Cranes – for outdoor & heavy-duty operations", "Jib Cranes – compact solutions for workstations"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gold shrink-0" />
                      <span className="text-gold-light/80 font-body text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/products#cranes"
                  className="inline-flex items-center gap-2 text-gold font-body font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all"
                >
                  Explore Our Cranes <ArrowRight size={16} />
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="relative">
                <img
                  src={eotCraneImg}
                  alt="EOT crane by Linkwel Engineers - crane manufacturers in India"
                  className="rounded-lg premium-shadow w-full"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-3">Why Choose Us</p>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  Engineering Excellence, Delivered
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed mb-8">
                  Since 1989, Linkwel Engineers has combined cutting-edge technology with deep industry expertise
                  to deliver elevator and crane solutions that exceed expectations. Our commitment to safety, innovation,
                  and client satisfaction sets us apart.
                </p>
                <div className="space-y-4">
                  {["Comprehensive Annual Maintenance Contracts", "State-of-the-art Technology Solutions", "Trusted by 500+ Clients Across India", "Expert Installation & Modernization"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                      <span className="text-foreground font-body text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 mt-8 text-accent font-body font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all"
                >
                  Learn More About Us <ArrowRight size={16} />
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="relative">
                <img
                  src={installImg}
                  alt="Elevator installation engineers at Linkwel Engineers"
                  className="rounded-lg premium-shadow w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-lg">
                  <p className="text-3xl font-heading font-bold">35+</p>
                  <p className="text-sm font-body">Years of Trust</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-background">
        <div className="container mx-auto section-padding">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-3">Our Portfolio</p>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">Featured Projects</h2>
              <div className="w-16 h-0.5 bg-accent mx-auto mt-4" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((proj, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="group relative overflow-hidden rounded-lg cursor-pointer">
                  <img
                    src={proj.img}
                    alt={proj.name}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-gold-light font-heading text-xl font-semibold">{proj.name}</h3>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-accent font-body font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all"
            >
              View All Projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 navy-gradient">
        <div className="container mx-auto section-padding">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">Testimonials</p>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-gold-light">Client Testimonials</h2>
              <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="bg-navy-light/30 backdrop-blur border border-gold/10 rounded-lg p-8">
                  <Quote className="text-gold/30 mb-4" size={32} />
                  <p className="text-gold-light/70 font-body text-sm leading-relaxed mb-6">"{t.text}"</p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={14} className="text-gold fill-gold" />
                    ))}
                  </div>
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
              Ready to Elevate Your Project?
            </h2>
            <p className="text-muted-foreground font-body max-w-xl mx-auto mb-8">
              Get in touch with our experts for a free consultation and quote for lifts, cranes, or any material handling solution.
            </p>
            <Link
              to="/contact"
              className="gold-gradient text-white font-body font-semibold px-10 py-4 rounded-sm tracking-wider uppercase text-sm hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              <Phone size={16} /> Contact Us Today
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
