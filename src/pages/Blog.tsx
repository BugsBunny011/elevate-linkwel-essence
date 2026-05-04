import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import MarqueeStrip from "@/components/MarqueeStrip";
import ScrollReveal from "@/components/ScrollReveal";
import { blogPosts } from "@/data/blogPosts";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const Blog = () => {
  const sorted = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Linkwel Engineers Blog",
    url: "https://linkwelengineers.com/blog",
    blogPost: sorted.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      datePublished: p.date,
      author: { "@type": "Organization", name: "Linkwel Engineers" },
      image: `https://linkwelengineers.com${p.image}`,
      url: `https://linkwelengineers.com/blog/${p.slug}`,
    })),
  };

  return (
    <Layout>
      <Helmet>
        <title>Blog | Linkwel Engineers — Lift & Crane Industry Insights</title>
        <meta
          name="description"
          content="Industry news, project insights and engineering perspectives on elevators, lifts and industrial cranes across Delhi, Noida and Gurgaon from Linkwel Engineers."
        />
        <meta
          name="keywords"
          content="elevator blog India, lift industry news Delhi, crane industry insights, EOT crane news, high rise construction India, Linkwel Engineers blog"
        />
        <link rel="canonical" href="https://linkwelengineers.com/blog" />
        <meta property="og:title" content="Blog | Linkwel Engineers" />
        <meta
          property="og:description"
          content="Industry news and engineering insights on lifts, elevators and industrial cranes."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://linkwelengineers.com/blog" />
        <script type="application/ld+json">
          {JSON.stringify(itemListSchema)}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-20 navy-gradient">
        <div className="container mx-auto section-padding text-center">
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">
            Insights
          </p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-gold-light mb-6">
            The Linkwel <span className="text-gold-gradient">Blog</span>
          </h1>
          <p className="text-gold-light/60 font-body text-lg max-w-2xl mx-auto">
            Industry news, engineering perspectives and project stories from the
            world of elevators, lifts and industrial cranes.
          </p>
        </div>
      </section>

      <MarqueeStrip />

      {/* Posts */}
      <section className="py-24 bg-background">
        <div className="container mx-auto section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sorted.map((post, idx) => (
              <ScrollReveal key={post.slug} delay={idx * 0.1}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block h-full bg-card border border-border rounded-lg overflow-hidden hover:border-accent/60 transition-all duration-500 hover:shadow-[0_20px_50px_-20px_hsl(var(--accent)/0.35)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      loading="lazy"
                      width={1280}
                      height={720}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-navy-dark/85 backdrop-blur-sm text-gold text-xs font-body uppercase tracking-wider px-3 py-1 rounded-sm border border-gold/20">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col gap-4">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground font-body">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar size={12} className="text-accent" />
                        {formatDate(post.date)}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock size={12} className="text-accent" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-heading font-semibold text-foreground leading-snug group-hover:text-accent transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-accent font-body text-sm uppercase tracking-wider mt-2">
                      Read Article
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
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

export default Blog;
