import { Target, Eye, Shield, Lightbulb, Award, Heart } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import installImg from "@/assets/elevator-installation.jpg";
import maintenanceImg from "@/assets/elevator-maintenance.jpg";

const values = [
  { icon: Shield, title: "Quality", desc: "Uncompromising quality in every installation and service we deliver." },
  { icon: Heart, title: "Safety", desc: "Rigorous safety protocols ensuring the well-being of every user." },
  { icon: Lightbulb, title: "Innovation", desc: "Embracing cutting-edge technology to deliver modern solutions." },
  { icon: Award, title: "Reliability", desc: "Consistent, dependable service you can count on, every time." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 navy-gradient">
        <div className="container mx-auto section-padding text-center">
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">About Us</p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-gold-light mb-6">
            Building Trust, <span className="text-gold-gradient">Floor by Floor</span>
          </h1>
          <p className="text-gold-light/60 font-body text-lg max-w-2xl mx-auto">
            Linkwel Engineers is a premier elevator solutions company committed to excellence in vertical transportation.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <img src={installImg} alt="Our team" className="rounded-lg premium-shadow w-full" />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div>
                <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-3">Our Story</p>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  Engineering Excellence Since Day One
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                  Founded with a vision to transform vertical transportation in India, Linkwel Engineers 
                  has grown from a small engineering firm into a trusted name in the elevator industry. 
                  With over 15 years of experience, we have successfully delivered 500+ projects across 
                  commercial, residential, and healthcare sectors.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Our team of highly skilled engineers and technicians are dedicated to providing 
                  world-class elevator solutions that prioritize safety, reliability, and innovation. 
                  We partner with leading global manufacturers to bring the latest technology to our clients.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollReveal>
              <div className="glass-card rounded-lg p-10">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <Target className="text-accent" size={28} />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  To provide world-class elevator solutions that set the benchmark for safety, 
                  quality, and innovation in vertical transportation, while building lasting 
                  relationships with our clients through exceptional service.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="glass-card rounded-lg p-10">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <Eye className="text-accent" size={28} />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  To be the most trusted and preferred elevator company in India, 
                  recognized for our engineering excellence, commitment to safety, 
                  and relentless pursuit of innovation in vertical mobility solutions.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto section-padding">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-3">What Drives Us</p>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">Our Core Values</h2>
              <div className="w-16 h-0.5 bg-accent mx-auto mt-4" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="text-center p-8">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                    <v.icon className="text-accent" size={28} />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-3">{v.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team image */}
      <section className="py-24 navy-gradient">
        <div className="container mx-auto section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">Our People</p>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gold-light mb-6">
                  Expert Engineers, Dedicated Service
                </h2>
                <p className="text-gold-light/60 font-body leading-relaxed">
                  Our team comprises highly trained engineers and technicians who bring passion 
                  and precision to every project. With continuous training and adherence to 
                  international standards, our professionals ensure that every elevator we 
                  install, maintain, or modernize meets the highest benchmarks of quality and safety.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <img src={maintenanceImg} alt="Engineer at work" className="rounded-lg premium-shadow w-full" />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
