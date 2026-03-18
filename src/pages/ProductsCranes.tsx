import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { craneProducts } from "@/data/products";

const ProductsCranes = () => {
  return (
    <Layout>
      <Helmet>
        <title>Industrial Cranes | Crane Manufacturers in India – Linkwel</title>
        <meta
          name="description"
          content="Explore industrial cranes by Linkwel Engineers. EOT, single & double girder, gantry, goliath, jib cranes & electric hoists. Crane manufacturers in Delhi, India."
        />
        <link rel="canonical" href="https://linkwelengineers.com/products/cranes" />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-20 navy-gradient">
        <div className="container mx-auto section-padding text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3"
          >
            Material Handling
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-heading font-bold text-gold-light mb-6"
          >
            Industrial <span className="text-gold-gradient">Cranes</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gold-light/60 font-body text-lg max-w-3xl mx-auto"
          >
            Heavy-duty crane solutions for steel plants, warehouses, manufacturing, and power plants.
            Engineered for precision, durability, and safety. Serving Delhi, Noida, Gurgaon and across India.
          </motion.p>
        </div>
      </section>

      {/* Cranes Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {craneProducts.map((product, i) => (
              <ScrollReveal key={product.slug} delay={i * 80}>
                <Link to={`/products/${product.slug}`} className="block group">
                  <div className="glass-card rounded-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={`${product.title} by Linkwel Engineers - crane manufacturers in India`}
                        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-muted-foreground font-body text-sm leading-relaxed mb-5">
                        {product.shortDesc}
                      </p>
                      <span className="inline-flex items-center gap-2 text-primary font-body font-semibold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                        Read More <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-link to Lifts */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto section-padding text-center">
          <ScrollReveal>
            <p className="text-muted-foreground font-body mb-4">
              Also explore our range of elevators and lifts for vertical transportation solutions.
            </p>
            <Link
              to="/products/lifts"
              className="inline-flex items-center gap-2 text-accent font-body font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all"
            >
              View Elevators & Lifts <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 navy-gradient">
        <div className="container mx-auto section-padding text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gold-light mb-4">
              Looking for Cranes in India?
            </h2>
            <p className="text-gold-light/60 font-body text-lg max-w-2xl mx-auto mb-4">
              Whether you need an EOT crane, gantry crane, or custom material handling solution,
              Linkwel Engineers has you covered. Contact us for a free consultation and quote.
            </p>
            <p className="text-gold-light/40 font-body text-sm mb-8">
              Serving Delhi, Noida, Gurgaon and across India
            </p>
            <Link
              to="/contact"
              className="gold-gradient text-white font-body font-semibold text-sm px-8 py-3 rounded-sm uppercase tracking-wider hover:opacity-90 transition-opacity inline-block"
            >
              Get a Free Quote
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default ProductsCranes;
