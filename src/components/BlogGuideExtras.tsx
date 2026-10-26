import { Link } from "react-router-dom";
import { MessageCircle, Send, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { BlogPost } from "@/data/blogPosts";

export const GuideContents = ({ post }: { post: BlogPost }) => (
  <nav aria-label="Table of contents" className="mb-10 border-b border-border pb-8 font-body">
    <p className="font-heading text-xl font-semibold text-foreground mb-4">Contents</p>
    <ul className="space-y-2 text-sm text-accent">
      {post.content.flatMap((block) => block.type === "h2" && block.id ? [
        <li key={block.id}><a href={`#${block.id}`} className="underline underline-offset-4">{block.text}</a></li>,
      ] : [])}
      <li><a href="#frequently-asked-questions" className="underline underline-offset-4">Frequently Asked Questions</a></li>
      <li><a href="#get-a-quote" className="underline underline-offset-4">Get a Single Girder EOT Crane Quote from Linkwel Engineers</a></li>
    </ul>
  </nav>
);

export const GuideFaqs = ({ post }: { post: BlogPost }) => (
  <section className="mt-16">
    <h2 id="frequently-asked-questions" className="scroll-mt-28 text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">Frequently Asked Questions</h2>
    <div className="divide-y divide-border border-y border-border">
      {post.faqs?.map((faq) => (
        <details key={faq.q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-heading font-semibold text-foreground [&::-webkit-details-marker]:hidden">
            <span>{faq.q}</span><ChevronDown size={18} className="shrink-0 text-accent transition-transform group-open:rotate-180" />
          </summary>
          <p className="pt-4 text-base font-body text-muted-foreground leading-relaxed">{faq.a}</p>
        </details>
      ))}
    </div>
  </section>
);

export const GuideQuote = () => (
  <>
    <section className="mt-16 py-8 border-y border-border">
      <h2 id="get-a-quote" className="scroll-mt-28 text-2xl md:text-3xl font-heading font-bold text-foreground mb-3">Get a Single Girder EOT Crane Quote from Linkwel Engineers</h2>
      <p className="font-body text-muted-foreground leading-relaxed mb-6">Linkwel Engineers has been manufacturing lifting equipment from Okhla Industrial Area, New Delhi, since 1989. We design single girder EOT cranes to your span, capacity and duty requirements, and support them with installation and maintenance.</p>
      <div className="flex flex-wrap gap-3">
        <Button asChild className="gold-gradient text-accent-foreground font-body"><a href="https://wa.me/919315229955?text=Hi%2C%20I%27d%20like%20to%20get%20a%20quote%20from%20Linkwel%20Engineers." target="_blank" rel="noopener noreferrer"><MessageCircle />Call / WhatsApp</a></Button>
        <Button variant="outline" className="font-body" onClick={() => window.dispatchEvent(new CustomEvent("open-quick-enquiry", { detail: { interest: "Crane" } }))}><Send />Send Enquiry</Button>
      </div>
    </section>
    <section className="mt-8 font-body">
      <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Related</h2>
      <ul className="space-y-3 text-accent">
        <li><Link to="/services/amc" className="underline underline-offset-4">AMC services</Link></li>
        <li><Link to="/products/overhead-cranes" className="underline underline-offset-4">EOT crane product page</Link></li>
      </ul>
    </section>
  </>
);