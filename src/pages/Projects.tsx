import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import MarqueeStrip from "@/components/MarqueeStrip";
import SeoBreadcrumbs from "@/components/SeoBreadcrumbs";
import ScrollReveal from "@/components/ScrollReveal";
import catVillas from "@/assets/category-villas.jpg";
import catFarmhouse from "@/assets/category-farmhouse.jpg";
import catApartments from "@/assets/category-apartments.jpg";
import catCorporate from "@/assets/category-corporate.jpg";
import catHospital from "@/assets/category-hospital.jpg";
import catParking from "@/assets/category-parking.jpg";

const projects = [
  { img: catVillas, name: "Private Villas & Independent Homes", desc: "Home elevators and compact passenger lifts installed in independent houses, villas and duplexes across Delhi NCR. Designed to blend seamlessly with premium interiors while delivering smooth, silent performance." },
  { img: catFarmhouse, name: "Farmhouses & Luxury Residences", desc: "Custom elevator solutions for farmhouses and luxury residences requiring bespoke cabin finishes and low-footprint installations. Serving clients across Delhi NCR and beyond." },
  { img: catApartments, name: "Residential Apartment Buildings", desc: "Passenger and goods elevators installed in mid-rise and high-rise apartment complexes across Delhi, Noida and Gurgaon. Built for high-traffic, round-the-clock reliability." },
  { img: catCorporate, name: "Corporate Offices & Commercial Buildings", desc: "High-speed passenger elevators and goods lifts for commercial towers, IT parks and retail centres. Engineered for peak-hour performance and minimal downtime." },
  { img: catHospital, name: "Hospitals & Healthcare Facilities", desc: "Spacious, hygienic hospital elevators designed for stretcher and bed transport with smooth levelling accuracy. Compliant with healthcare safety standards across India." },
  { img: catParking, name: "Multi-Level Parking Garages", desc: "Heavy-duty car elevators and platform lifts for multi-storey parking structures, showrooms and residential complexes requiring vehicle vertical transport." },
];

const Projects = () => {
  return (
    <Layout>
      <Helmet>
        <title>Our Projects | Lift & Crane Installations Across India</title>
        <meta name="description" content="Explore Linkwel Engineers' portfolio of premium elevator and industrial crane installations in villas, apartments, hospitals, factories and corporate buildings across India." />
        <meta name="keywords" content="elevator installations India, lift projects, EOT crane installations, gantry crane projects, industrial crane suppliers, elevator and crane company in India" />
        <link rel="canonical" href="https://linkwelengineers.com/projects" />
        <meta property="og:title" content="Our Projects | Lift & Crane Installations Across India" />
        <meta property="og:description" content="Premium elevator and industrial crane installations across villas, apartments, hospitals, factories and commercial buildings in India." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://linkwelengineers.com/projects" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Projects | Lift & Crane Installations Across India" />
        <meta name="twitter:description" content="Premium elevator and industrial crane installations across India by Linkwel Engineers." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": projects.map((proj, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "name": proj.name,
            "description": proj.desc,
          })),
        })}</script>
      </Helmet>
      <SeoBreadcrumbs items={[{name: "Projects",path: "/projects"}]} hidden />
      <section className="pt-32 pb-20 navy-gradient">
        <div className="container mx-auto section-padding text-center">
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">Our Portfolio</p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-gold-light mb-6">
            Featured <span className="text-gold-gradient">Projects</span>
          </h1>
          <p className="text-gold-light/60 font-body text-lg max-w-2xl mx-auto">
            Showcasing our finest installations across India's most prestigious buildings.
          </p>
        </div>
      </section>
      <MarqueeStrip />

      <section className="py-24 bg-background">
        <div className="container mx-auto section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((proj, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="group relative overflow-hidden rounded-lg cursor-pointer">
                  <img
                    src={proj.img}
                    alt={proj.name}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-gold-light font-heading text-xl font-semibold">{proj.name}</h3>
                    <p className="text-gold-light/70 font-body text-sm leading-relaxed mt-2">{proj.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
