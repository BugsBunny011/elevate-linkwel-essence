import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import catVillas from "@/assets/category-villas.jpg";
import catFarmhouse from "@/assets/category-farmhouse.jpg";
import catApartments from "@/assets/category-apartments.jpg";
import catCorporate from "@/assets/category-corporate.jpg";
import catHospital from "@/assets/category-hospital.jpg";
import catParking from "@/assets/category-parking.jpg";

const projects = [
  { img: catVillas, name: "Private Villas & Independent Homes" },
  { img: catFarmhouse, name: "Farmhouses & Luxury Residences" },
  { img: catApartments, name: "Residential Apartment Buildings" },
  { img: catCorporate, name: "Corporate Offices & Commercial Buildings" },
  { img: catHospital, name: "Hospitals & Healthcare Facilities" },
  { img: catParking, name: "Multi-Level Parking Garages" },
];

const Projects = () => {
  return (
    <Layout>
      <Helmet>
        <title>Our Projects | Elevator Installations Across India</title>
        <meta name="description" content="View Linkwel Engineers' portfolio — premium elevator installations in villas, apartments, hospitals, corporate offices & parking facilities across India." />
        <meta name="keywords" content="elevator installations India, lift projects, commercial elevator suppliers, elevator company in India" />
        <link rel="canonical" href="https://linkwelengineers.com/projects" />
        <meta property="og:title" content="Our Projects | Elevator Installations Across India" />
        <meta property="og:description" content="Premium elevator installations in villas, apartments, hospitals & commercial buildings." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://linkwelengineers.com/projects" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Projects | Elevator Installations Across India" />
        <meta name="twitter:description" content="Premium elevator installations across India by Linkwel Engineers." />
      </Helmet>
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
