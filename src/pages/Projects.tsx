import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import proj1 from "@/assets/project-1.jpg";
import proj2 from "@/assets/project-2.jpg";
import proj3 from "@/assets/project-3.jpg";
import heroImg from "@/assets/hero-elevator.jpg";
import installImg from "@/assets/elevator-installation.jpg";
import maintenanceImg from "@/assets/elevator-maintenance.jpg";

const projects = [
  { img: proj1, name: "Skyline Tower", location: "Mumbai", type: "Commercial", elevators: 12 },
  { img: proj2, name: "Grand Residences", location: "Delhi", type: "Residential", elevators: 8 },
  { img: proj3, name: "City Hospital Complex", location: "Bangalore", type: "Healthcare", elevators: 6 },
  { img: heroImg, name: "Metro Business Park", location: "Pune", type: "Commercial", elevators: 10 },
  { img: installImg, name: "Royal Apartments", location: "Hyderabad", type: "Residential", elevators: 4 },
  { img: maintenanceImg, name: "Tech Hub Center", location: "Chennai", type: "Commercial", elevators: 14 },
];

const Projects = () => {
  return (
    <Layout>
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
                    <span className="text-gold text-xs font-body uppercase tracking-wider">{proj.type}</span>
                    <h3 className="text-gold-light font-heading text-xl font-semibold mt-1">{proj.name}</h3>
                    <p className="text-gold-light/60 font-body text-sm">{proj.location} · {proj.elevators} Elevators</p>
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
