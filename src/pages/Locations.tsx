import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, MapPin, ChevronRight, Building2, Factory } from "lucide-react";
import Layout from "@/components/Layout";
import MarqueeStrip from "@/components/MarqueeStrip";
import SeoBreadcrumbs from "@/components/SeoBreadcrumbs";
import ScrollReveal from "@/components/ScrollReveal";

const primaryCities = [
  { slug: "delhi", name: "Delhi", desc: "Full-service elevator & crane manufacturer headquartered in Okhla." },
  { slug: "noida", name: "Noida", desc: "End-to-end lift and industrial crane solutions across Noida & Greater Noida." },
  { slug: "gurgaon", name: "Gurgaon", desc: "Premium elevators and cranes for DLF, Cyber City, Sohna Road and Manesar." },
];

const emergingMarkets = [
  {
    region: "Himachal Pradesh",
    cities: ["Shimla", "Solan", "Baddi", "Parwanoo", "Kasauli", "Manali", "Dharamshala"],
    note: "Serving hotels, resorts, hospitals and hillside residential projects across Himachal with passenger lifts, capsule elevators and goods lifts engineered for hilly terrain.",
  },
  {
    region: "Punjab & Chandigarh Tricity",
    cities: ["Chandigarh", "New Chandigarh", "Mohali", "Panchkula", "Zirakpur", "Ludhiana", "Jalandhar", "Amritsar"],
    note: "Premium elevators for emerging high-rise residential corridors in New Chandigarh and Mohali, plus EOT and gantry cranes for Ludhiana's industrial belt.",
  },
  {
    region: "Haryana (Beyond Gurgaon)",
    cities: ["Faridabad", "Sonipat", "Panipat", "Karnal", "Rohtak", "Hisar", "Bahadurgarh", "Rewari"],
    note: "Industrial cranes and goods lifts for manufacturing clusters in Faridabad, Sonipat and Panipat, plus residential lifts across NCR satellite towns.",
  },
  {
    region: "Uttar Pradesh (NCR & beyond)",
    cities: ["Ghaziabad", "Meerut", "Modinagar", "Hapur", "Bulandshahr", "Agra", "Lucknow", "Kanpur"],
    note: "Passenger lifts, hospital elevators and EOT cranes for fast-growing residential and warehousing projects across Western UP.",
  },
  {
    region: "Uttarakhand",
    cities: ["Dehradun", "Haridwar", "Rishikesh", "Roorkee", "Haldwani", "Nainital"],
    note: "Elevators for hotels, hospitals and residential towers, plus industrial cranes for Haridwar–Roorkee SIDCUL manufacturing zones.",
  },
  {
    region: "Rajasthan",
    cities: ["Jaipur", "Bhiwadi", "Neemrana", "Alwar", "Udaipur", "Jodhpur"],
    note: "EOT cranes, gantry cranes and goods lifts for Bhiwadi–Neemrana auto and component plants; premium lifts for Jaipur and Udaipur hospitality projects.",
  },
];

const Locations = () => {
  const canonical = "https://linkwelengineers.com/locations";
  return (
    <Layout>
      <Helmet>
        <title>Locations We Serve | Elevators & Cranes Across North India | Linkwel Engineers</title>
        <meta name="description" content="Linkwel Engineers delivers elevators, lifts and industrial cranes across Delhi NCR, Himachal, Punjab, Haryana, UP, Uttarakhand and Rajasthan — including Shimla, New Chandigarh, Faridabad, Dehradun, Jaipur and more." />
        <meta name="keywords" content="Elevator manufacturer North India, Lift suppliers Shimla, Elevator company New Chandigarh, Lift dealers Faridabad, EOT crane Bhiwadi, Goods lift Dehradun, Passenger lift Jaipur, Industrial crane Ludhiana, Hospital lift Lucknow, Home elevator Mohali" />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="Locations We Serve | Linkwel Engineers" />
        <meta property="og:description" content="Elevators, lifts and industrial cranes across North India by Linkwel Engineers." />
        <meta property="og:url" content={canonical} />
      </Helmet>
      <SeoBreadcrumbs items={[{ name: "Locations", path: "/locations" }]} hidden />

      {/* Hero */}
      <section className="pt-32 pb-20 navy-gradient">
        <div className="container mx-auto section-padding text-center">
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">Pan-North India</p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-gold-light mb-6">
            Locations We <span className="text-gold-gradient">Serve</span>
          </h1>
          <p className="text-gold-light/70 font-body text-lg max-w-3xl mx-auto leading-relaxed">
            From our headquarters in New Delhi, Linkwel Engineers supplies elevators, lifts and industrial cranes across Delhi NCR and rapidly developing markets in Himachal Pradesh, Punjab, Haryana, Uttar Pradesh, Uttarakhand and Rajasthan.
          </p>
        </div>
      </section>
      <MarqueeStrip />

      {/* Primary cities */}
      <section className="py-20 bg-background">
        <div className="container mx-auto section-padding">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-3">Primary Markets</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Delhi NCR Coverage</h2>
              <div className="w-16 h-0.5 bg-accent mx-auto mt-4" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {primaryCities.map((c, i) => (
              <ScrollReveal key={c.slug} delay={i * 80}>
                <Link to={`/${c.slug}`} className="block glass-card rounded-lg p-8 hover:premium-shadow transition-all duration-500 group">
                  <div className="w-14 h-14 mb-5 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Building2 className="text-accent" size={24} />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">{c.name}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">{c.desc}</p>
                  <span className="text-accent font-body text-sm inline-flex items-center gap-1">
                    Explore {c.name} <ArrowRight size={14} />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Emerging markets */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto section-padding">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-3">Emerging Markets</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Other Locations We Serve</h2>
              <div className="w-16 h-0.5 bg-accent mx-auto mt-4" />
              <p className="text-muted-foreground font-body mt-6 max-w-3xl mx-auto">
                Beyond Delhi NCR, we deliver elevators and industrial cranes to fast-developing cities across North India. Get in touch for projects in any of the regions below.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {emergingMarkets.map((m, i) => (
              <ScrollReveal key={m.region} delay={i * 60}>
                <div className="glass-card rounded-lg p-7 h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <Factory size={20} className="text-accent" />
                    <h3 className="font-heading text-xl font-semibold text-foreground">{m.region}</h3>
                  </div>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed mb-5">{m.note}</p>
                  <div className="flex flex-wrap gap-2">
                    {m.cities.map((city) => (
                      <span key={city} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 text-foreground text-xs font-body">
                        <MapPin size={12} className="text-accent" /> {city}
                      </span>
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
              Have a Project Outside Delhi NCR?
            </h2>
            <p className="text-muted-foreground font-body max-w-xl mx-auto mb-8">
              We take on elevator and industrial crane projects across North India. Share your requirement and our team will get back with a tailored proposal.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="gold-gradient text-white font-body font-semibold px-10 py-4 rounded-sm tracking-wider uppercase text-sm hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                Request a Quote <ArrowRight size={16} />
              </Link>
              <Link
                to="/products"
                className="border border-accent/40 text-foreground font-body font-semibold px-10 py-4 rounded-sm tracking-wider uppercase text-sm hover:bg-accent/10 transition-colors inline-flex items-center gap-2"
              >
                Browse Products <ChevronRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Locations;
