import { Link, useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Calendar, Clock, User, ArrowLeft, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import MarqueeStrip from "@/components/MarqueeStrip";
import SeoBreadcrumbs from "@/components/SeoBreadcrumbs";
import ScrollReveal from "@/components/ScrollReveal";
import { blogPosts, getPostBySlug } from "@/data/blogPosts";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  const url = `https://linkwelengineers.com/blog/${post.slug}`;
  const publisher = {
    "@type": "Organization",
    name: "Linkwel Engineers",
    logo: {
      "@type": "ImageObject",
      url: "https://linkwelengineers.com/favicon.png",
    },
  };
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `https://linkwelengineers.com${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: "Linkwel Engineers", url: "https://linkwelengineers.com" },
    publisher,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: post.keywords,
  };
  const faqSchema = post.faqs && post.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  } : null;

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <Layout>
      <Helmet>
        <title>{post.seoTitle ?? `${post.title} | Linkwel Engineers Blog`}</title>
        <meta name="description" content={post.metaDesc ?? post.excerpt} />
        <meta name="keywords" content={post.keywords} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.seoTitle ?? post.title} />
        <meta property="og:description" content={post.metaDesc ?? post.excerpt} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={`https://linkwelengineers.com${post.image}`} />
        <meta property="article:published_time" content={post.date} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.seoTitle ?? post.title} />
        <meta name="twitter:description" content={post.metaDesc ?? post.excerpt} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        {faqSchema && (
          <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        )}
      </Helmet>
      <SeoBreadcrumbs
        items={[
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
        hidden
      />

      {/* Hero */}
      <section className="pt-32 pb-12 navy-gradient">
        <div className="container mx-auto section-padding max-w-4xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-gold-light/60 hover:text-gold font-body text-sm uppercase tracking-wider mb-6 transition-colors"
          >
            <ArrowLeft size={14} /> Back to Blog
          </Link>
          <p className="text-gold font-body text-xs tracking-[0.3em] uppercase mb-3">
            {post.category}
          </p>
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-gold-light leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-5 text-sm text-gold-light/60 font-body">
            <span className="inline-flex items-center gap-1.5">
              <User size={14} className="text-gold" /> {post.author}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={14} className="text-gold" /> {formatDate(post.date)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={14} className="text-gold" /> {post.readTime}
            </span>
          </div>
        </div>
      </section>

      <MarqueeStrip />

      {/* Featured image */}
      <section className="bg-background pt-12">
        <div className="container mx-auto section-padding max-w-4xl">
          <div className="rounded-lg overflow-hidden border border-border">
            <img
              src={post.image}
              alt={post.imageAlt}
              width={1280}
              height={720}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="py-16 bg-background">
        <div className="container mx-auto section-padding max-w-3xl">
          <div className="flex flex-col gap-6">
            {post.content.map((block, i) => {
              switch (block.type) {
                case "h2":
                  return (
                    <h2
                      key={i}
                      className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-6"
                    >
                      {block.text}
                    </h2>
                  );
                case "h3":
                  return (
                    <h3
                      key={i}
                      className="text-xl md:text-2xl font-heading font-semibold text-foreground mt-4"
                    >
                      {block.text}
                    </h3>
                  );
                case "p":
                  return (
                    <p
                      key={i}
                      className="text-base md:text-lg font-body text-muted-foreground leading-relaxed"
                    >
                      {block.text}
                    </p>
                  );
                case "html":
                  return (
                    <p
                      key={i}
                      className="text-base md:text-lg font-body text-muted-foreground leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: block.html }}
                    />
                  );
                case "ul":
                  return (
                    <ul
                      key={i}
                      className="list-disc pl-6 flex flex-col gap-2 text-base md:text-lg font-body text-muted-foreground leading-relaxed marker:text-accent"
                    >
                      {block.items.map((it, j) => (
                        <li key={j}>{it}</li>
                      ))}
                    </ul>
                  );
                case "quote":
                  return (
                    <blockquote
                      key={i}
                      className="border-l-4 border-accent pl-6 py-2 my-4 italic font-heading text-lg md:text-xl text-foreground"
                    >
                      “{block.text}”
                    </blockquote>
                  );
                default:
                  return null;
              }
            })}
          </div>

          {/* FAQ */}
          {post.faqs && post.faqs.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h2>
              <div className="flex flex-col gap-4">
                {post.faqs.map((f, i) => (
                  <div
                    key={i}
                    className="border border-border rounded-lg p-5 bg-card"
                  >
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                      {f.q}
                    </h3>
                    <p className="text-base font-body text-muted-foreground leading-relaxed">
                      {f.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Author bio */}
          {post.authorBio && (
            <div className="mt-12 p-6 rounded-lg border border-border bg-muted/30">
              <p className="text-accent font-body text-xs tracking-[0.3em] uppercase mb-2">
                About the Author
              </p>
              <p className="text-base font-body text-muted-foreground leading-relaxed">
                {post.authorBio}
              </p>
            </div>
          )}

          {/* CTA */}
          <div className="mt-16 p-8 md:p-10 rounded-lg navy-gradient border border-gold/20 text-center">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-gold-light mb-3">
              Planning a project? Let's talk.
            </h3>
            <p className="text-gold-light/60 font-body mb-6 max-w-xl mx-auto">
              From passenger elevators to EOT cranes, our team across Delhi, Noida and Gurgaon is ready to help you specify the right solution.
            </p>
            <Link
              to="/contact"
              className="gold-gradient text-white font-body font-semibold text-sm px-8 py-3 rounded-sm uppercase tracking-wider hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              Get a Quote <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="py-20 bg-muted/30 border-t border-border">
          <div className="container mx-auto section-padding">
            <ScrollReveal>
              <div className="text-center mb-12">
                <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-3">
                  Keep Reading
                </p>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                  More Articles
                </h2>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="group block bg-card border border-border rounded-lg overflow-hidden hover:border-accent/60 transition-all duration-500"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-heading font-semibold text-foreground group-hover:text-accent transition-colors">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default BlogPost;
