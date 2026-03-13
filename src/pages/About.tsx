import { Target, Eye, Shield, Lightbulb, Award, Heart } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import installImg from "@/assets/elevator-installation.jpg";
import maintenanceImg from "@/assets/elevator-maintenance.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const values = [
  { icon: Shield, title: "Quality", desc: "Uncompromising quality in every installation and service we deliver." },
  { icon: Heart, title: "Safety", desc: "Rigorous safety protocols ensuring the well-being of every user." },
  { icon: Lightbulb, title: "Innovation", desc: "Embracing cutting-edge technology to deliver modern solutions." },
  { icon: Award, title: "Reliability", desc: "Consistent, dependable service you can count on, every time." },
];

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>About Linkwel Engineers | Elevator Company in India</title>
        <meta name="description" content="Learn about Linkwel Engineers — a trusted elevator company in India since 1989. 500+ projects, expert lift installation & maintenance services in Delhi & across India." />
        <meta name="keywords" content="elevator company in India, lift manufacturer near me, elevator manufacturers in India, best lifts in India" />
        <link rel="canonical" href="https://linkwelengineers.com/about" />
        <meta property="og:title" content="About Linkwel Engineers | Elevator Company in India" />
        <meta property="og:description" content="Trusted elevator company in India since 1989 with 500+ projects completed." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://linkwelengineers.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Linkwel Engineers | Elevator Company in India" />
        <meta name="twitter:description" content="Trusted elevator company in India since 1989." />
      </Helmet>
      {/* Hero */}
      <section className="pt-32 pb-20 navy-gradient">
        <div className="container mx-auto section-padding text-center">
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">About Us</p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-gold-light mb-6">
            Building Trust, <span className="text-gold-gradient">Since 1989</span>
          </h1>
          <p className="text-gold-light/60 font-body text-lg max-w-2xl mx-auto">
            Linkwel Engineers is a premier elevator and crane solutions company committed to excellence in vertical transportation and material handling.
          </p>
        </div>
      </section>

      {/* Company Overview & Our Story — Accordion Sections */}
      <section className="py-24 bg-background">
        <div className="container mx-auto section-padding">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-3">Discover Linkwel</p>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">Who We Are</h2>
              <div className="w-16 h-0.5 bg-accent mx-auto mt-4" />
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <Accordion type="multiple" defaultValue={["company-overview"]} className="space-y-4">
              {/* Company Overview */}
              <ScrollReveal>
                <AccordionItem value="company-overview" className="border border-border rounded-lg px-6 bg-surface">
                  <AccordionTrigger className="text-xl font-heading font-bold text-foreground hover:no-underline py-6">
                    Company Overview
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-8 pb-4">
                      {/* Brief History */}
                      <div>
                        <h4 className="text-lg font-heading font-semibold text-foreground mb-3 flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-accent" />
                          Brief History
                        </h4>
                        <p className="text-muted-foreground font-body leading-relaxed">
                          Established in <strong>1989 in Okhla, New Delhi</strong>, Linkwel was founded by visionary entrepreneur <strong>Mr. Suresh Bagga</strong>. Starting as a specialist in crane component manufacturing, the company has since expanded into a comprehensive provider of elevators, cranes, and precision-engineered components, driven by decades of engineering innovation and deep industry expertise.
                        </p>
                      </div>

                      {/* Leadership */}
                      <div>
                        <h4 className="text-lg font-heading font-semibold text-foreground mb-3 flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-accent" />
                          Leadership
                        </h4>
                        <p className="text-muted-foreground font-body leading-relaxed">
                          Today, <strong>Mr. Sunit Bagga</strong>, son of Mr. Suresh Bagga, leads the company as CEO. With deep industry knowledge and a steadfast commitment to innovation, he continues to grow Linkwel while honoring its legacy of engineering excellence.
                        </p>
                      </div>

                      {/* Mission */}
                      <div>
                        <h4 className="text-lg font-heading font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Target className="text-accent shrink-0" size={18} />
                          Mission Statement
                        </h4>
                        <p className="text-muted-foreground font-body leading-relaxed">
                          To design and manufacture high-quality crane components, elevators, and cranes that enhance safety, efficiency, and reliability in material handling and vertical transportation, while exceeding customer expectations through innovative solutions and exceptional service.
                        </p>
                      </div>

                      {/* Vision */}
                      <div>
                        <h4 className="text-lg font-heading font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Eye className="text-accent shrink-0" size={18} />
                          Vision Statement
                        </h4>
                        <p className="text-muted-foreground font-body leading-relaxed">
                          To deliver precision-engineered elevators, cranes, and components known for safety, efficiency, and reliability, while driving innovation and providing solutions that move industries forward.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </ScrollReveal>

              {/* Our Story */}
              <ScrollReveal delay={150}>
                <AccordionItem value="our-story" className="border border-border rounded-lg px-6 bg-surface">
                  <AccordionTrigger className="text-xl font-heading font-bold text-foreground hover:no-underline py-6">
                    Our Story
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6 pb-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        <div>
                          <img src={installImg} alt="Our legacy" className="rounded-lg w-full" />
                        </div>
                        <div className="space-y-4">
                          <p className="text-muted-foreground font-body leading-relaxed">
                            In <strong>1989</strong>, <strong>Mr. Suresh Bagga</strong> founded Linkwel in Okhla, New Delhi, with a clear vision: to build precision-engineered solutions for India's growing industrial landscape.
                          </p>
                          <p className="text-muted-foreground font-body leading-relaxed">
                            The company began by manufacturing <strong>crane components</strong>, quickly earning a reputation for quality and reliability among industrial clients.
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-lg font-heading font-semibold text-foreground">Growth & Expansion</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                            <p className="text-muted-foreground font-body leading-relaxed">
                               In the <strong>early 2000s</strong>, Linkwel expanded into complete elevator systems and full crane manufacturing, responding to India's rapid infrastructure growth.
                            </p>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                            <p className="text-muted-foreground font-body leading-relaxed">
                              Under the leadership of <strong>CEO Mr. Sunit Bagga</strong>, the company has continued to innovate, embracing modern technology, expanding its service portfolio, and strengthening client relationships across India.
                            </p>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                            <p className="text-muted-foreground font-body leading-relaxed">
                              Today, with over <strong>35 years of experience</strong> and 500+ successful projects, Linkwel Engineers remains committed to engineering excellence, innovation, and customer-focused solutions.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </ScrollReveal>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-surface">
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

      {/* Team */}
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
                  international standards, our professionals ensure that every elevator and crane we
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
