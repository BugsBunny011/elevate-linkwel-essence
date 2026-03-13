import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { products } from "@/data/products";

const Products = () => {
  return (
    <Layout>
      <Helmet>
        <title>Elevator Products | Best Lift Manufacturers in India – Linkwel Engineers</title>
        <meta
          name="description"
          content="Explore premium elevators & lifts by Linkwel Engineers — passenger, home, goods, hospital, capsule & car elevators. Leading elevator manufacturers in India."
        />
        <link rel="canonical" href="https://linkwelengineers.com/products" />
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
            Our Products
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-heading font-bold text-gold-light mb-6"
          >
            Premium <span className="text-gold-gradient">Elevator Solutions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gold-light/60 font-body text-lg max-w-3xl mx-auto"
          >
            Discover our comprehensive range of elevators and lifts, engineered for safety,
            efficiency, and elegance by one of the best elevator manufacturers in India.
          </motion.p>
        </div>
      </section>

      {/* Product Cards */}
      <section className="py-24 bg-background">
        <div className="container mx-auto section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <ScrollReveal key={product.slug} delay={i * 80}>
                <Link to={`/products/${product.slug}`} className="block group">
                  <div className="glass-card rounded-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={`${product.title} by Linkwel Engineers — leading lift manufacturer in India`}
                        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent" />
                    </div>
                    <div className="p-6">
                      <h2 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {product.title}
                      </h2>
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

      {/* CTA */}
      <section className="py-20 navy-gradient">
        <div className="container mx-auto section-padding text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gold-light mb-4">
              Looking for the Best Lifts in India?
            </h2>
            <p className="text-gold-light/60 font-body text-lg max-w-2xl mx-auto mb-8">
              Whether you need a passenger lift, home elevator, or industrial goods lift — Linkwel
              Engineers has the perfect solution. Contact us for a free consultation and quote.
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

export default Products;
