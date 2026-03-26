import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Shield,
  Settings,
  Building2,
  Award,
  ArrowRight,
  ChevronRight,
  Factory,
  HelpCircle,
} from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { products } from "@/data/products";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);

  if (!product) return <Navigate to="/products" replace />;

  // Smart related products: mix of same category + cross-category
  const sameCategoryProducts = products.filter((p) => p.slug !== slug && p.category === product.category).slice(0, 2);
  const crossCategoryProducts = products.filter((p) => p.category !== product.category).slice(0, 1);
  const otherProducts = [...sameCategoryProducts, ...crossCategoryProducts];

  const isCrane = product.category === "cranes";
  const categoryLabel = isCrane ? "Industrial Cranes" : "Elevators & Lifts";

  // FAQ Schema JSON-LD
  const faqSchema = product.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": product.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  } : null;

  return (
    <Layout>
      <Helmet>
        <title>{product.metaTitle}</title>
        <meta name="description" content={product.metaDesc} />
        <meta name="keywords" content={`${product.title}, ${isCrane ? 'crane manufacturers in India, crane manufacturers near me, crane manufacturers in Delhi, industrial crane manufacturers' : 'elevator manufacturers in India, lift manufacturers near me, lift manufacturers in Delhi, best lifts in India'}, ${product.title.toLowerCase()} manufacturer`} />
        <link rel="canonical" href={`https://linkwelengineers.com/products/${product.slug}`} />
        <meta property="og:title" content={product.metaTitle} />
        <meta property="og:description" content={product.metaDesc} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={`https://linkwelengineers.com/products/${product.slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={product.metaTitle} />
        <meta name="twitter:description" content={product.metaDesc} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": product.title,
            "description": product.description,
            "brand": { "@type": "Brand", "name": "Linkwel Engineers" },
            "manufacturer": { "@type": "Organization", "name": "Linkwel Engineers" },
            "url": `https://linkwelengineers.com/products/${product.slug}`,
            "category": categoryLabel,
            "offers": {
              "@type": "Offer",
              "priceCurrency": "INR",
              "price": "0",
              "priceValidUntil": "2027-12-31",
              "availability": "https://schema.org/InStock",
              "seller": { "@type": "Organization", "name": "Linkwel Engineers" },
              "url": `https://linkwelengineers.com/contact`,
            },
          })}
        </script>
        {faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}
      </Helmet>

      {/* Breadcrumb */}
      <div className="pt-24 pb-0 navy-gradient">
        <div className="container mx-auto section-padding">
          <nav className="flex items-center gap-2 text-sm font-body text-gold-light/50">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/products" className="hover:text-gold transition-colors">Products</Link>
            <ChevronRight size={14} />
            <Link to={`/products#${isCrane ? 'cranes' : 'lifts'}`} className="hover:text-gold transition-colors">{isCrane ? 'Cranes' : 'Lifts'}</Link>
            <ChevronRight size={14} />
            <span className="text-gold">{product.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-8 pb-20 navy-gradient">
        <div className="container mx-auto section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">
                Linkwel Engineers
              </p>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-gold-light mb-6">
                {product.title}
              </h1>
              <p className="text-gold-light/70 font-body text-lg leading-relaxed mb-8">
                {product.heroDesc}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="gold-gradient text-white font-body font-semibold text-sm px-8 py-3 rounded-sm uppercase tracking-wider hover:opacity-90 transition-opacity inline-block"
                >
                  Get a Quote
                </Link>
                <Link
                  to={`/products#${isCrane ? 'cranes' : 'lifts'}`}
                  className="border border-gold/40 text-gold font-body font-medium text-sm px-8 py-3 rounded-sm uppercase tracking-wider hover:bg-gold/10 transition-colors inline-block"
                >
                  All {isCrane ? 'Cranes' : 'Lifts'}
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src={product.image}
                alt={`${product.title} - Linkwel Engineers, ${isCrane ? 'crane manufacturers in India' : 'elevator manufacturers in India'}`}
                className="w-full h-[400px] object-cover rounded-lg premium-shadow"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-navy-dark/30 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 bg-background">
        <div className="container mx-auto section-padding">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                About Our {product.title}
              </h2>
              <p className="text-muted-foreground font-body text-lg leading-relaxed">
                {product.description}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto section-padding">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">
                Why Choose Us
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Key Features
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {product.features.map((feature, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="glass-card rounded-lg p-6 h-full hover:shadow-lg transition-shadow duration-300">
                  <CheckCircle2 className="text-primary mb-3" size={24} />
                  <p className="text-foreground font-body text-sm font-medium">{feature}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto section-padding">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Settings className="text-primary" size={28} />
                <h2 className="text-3xl font-heading font-bold text-foreground">
                  Technical Specifications
                </h2>
              </div>
              <div className="glass-card rounded-lg overflow-hidden">
                {product.specifications.map((spec, i) => (
                  <div
                    key={i}
                    className={`flex justify-between items-center px-6 py-4 ${
                      i % 2 === 0 ? "bg-muted/30" : ""
                    }`}
                  >
                    <span className="text-foreground font-body font-medium text-sm">
                      {spec.label}
                    </span>
                    <span className="text-muted-foreground font-body text-sm">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Applications, Industries & Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="text-primary" size={24} />
                <h2 className="text-2xl font-heading font-bold text-foreground">Applications</h2>
              </div>
              <ul className="space-y-3">
                {product.applications.map((app, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ArrowRight className="text-primary mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-muted-foreground font-body text-sm">{app}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-primary" size={24} />
                <h2 className="text-2xl font-heading font-bold text-foreground">Benefits</h2>
              </div>
              <ul className="space-y-3">
                {product.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-muted-foreground font-body text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          {/* Used In Industries */}
          {product.industries && product.industries.length > 0 && (
            <ScrollReveal delay={200}>
              <div className="max-w-6xl mx-auto mt-12">
                <div className="flex items-center gap-3 mb-6">
                  <Factory className="text-primary" size={24} />
                  <h2 className="text-2xl font-heading font-bold text-foreground">Used In Industries</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.industries.map((industry, i) => (
                    <span
                      key={i}
                      className="glass-card rounded-full px-5 py-2 text-sm font-body text-foreground font-medium"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto section-padding">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Shield className="text-primary" size={28} />
                <h2 className="text-3xl font-heading font-bold text-foreground">
                  Safety Features
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.safety.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 glass-card rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <Shield className="text-primary mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-foreground font-body text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQs */}
      {product.faqs.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto section-padding">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                  <HelpCircle className="text-primary" size={28} />
                  <h2 className="text-3xl font-heading font-bold text-foreground">
                    Frequently Asked Questions
                  </h2>
                </div>
                <Accordion type="single" collapsible className="space-y-3">
                  {product.faqs.map((faq, i) => (
                    <AccordionItem
                      key={i}
                      value={`faq-${i}`}
                      className="border border-border rounded-lg px-6 bg-background"
                    >
                      <AccordionTrigger className="text-left font-body font-semibold text-foreground hover:no-underline py-5 text-sm md:text-base">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground font-body text-sm leading-relaxed pb-2">
                          {faq.answer}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 navy-gradient">
        <div className="container mx-auto section-padding text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gold-light mb-4">
              Interested in {product.title}?
            </h2>
            <p className="text-gold-light/60 font-body text-lg max-w-2xl mx-auto mb-4">
              Get in touch with Linkwel Engineers for a customised quote and free site consultation.
            </p>
            <p className="text-gold-light/40 font-body text-sm mb-8">
              Serving Delhi, Noida, Gurgaon and across India
            </p>
            <Link
              to="/contact"
              className="gold-gradient text-white font-body font-semibold text-sm px-8 py-3 rounded-sm uppercase tracking-wider hover:opacity-90 transition-opacity inline-block"
            >
              Request a Quote
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Related Products - Cross-linked */}
      <section className="py-20 bg-background">
        <div className="container mx-auto section-padding">
          <ScrollReveal>
            <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-4">
              Explore More Products
            </h2>
            <p className="text-muted-foreground font-body text-center text-sm mb-12">
              Discover our complete range of {isCrane ? 'cranes and elevators' : 'elevators and industrial cranes'}
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {otherProducts.map((p, i) => (
              <ScrollReveal key={p.slug} delay={i * 100}>
                <Link to={`/products/${p.slug}`} className="block group">
                  <div className="glass-card rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <img
                      src={p.image}
                      alt={`${p.title} by Linkwel Engineers`}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="p-5">
                      <span className="text-xs font-body text-primary uppercase tracking-wider">
                        {p.category === "cranes" ? "Crane" : "Lift"}
                      </span>
                      <h3 className="font-heading font-semibold text-foreground text-lg group-hover:text-primary transition-colors mt-1">
                        {p.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
