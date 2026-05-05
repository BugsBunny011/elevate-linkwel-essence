import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export interface Crumb {
  name: string;
  path: string; // absolute path beginning with "/"
}

interface SeoBreadcrumbsProps {
  items: Crumb[]; // does NOT include "Home" — added automatically
  hidden?: boolean; // if true, only inject JSON-LD (no visible UI)
}

const SITE = "https://linkwelengineers.com";

const SeoBreadcrumbs = ({ items, hidden = false }: SeoBreadcrumbsProps) => {
  const all: Crumb[] = [{ name: "Home", path: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE}${c.path === "/" ? "/" : c.path}`,
    })),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      {!hidden && (
        <nav
          aria-label="Breadcrumb"
          className="bg-navy-dark/60 border-b border-gold/10"
        >
          <ol className="container mx-auto section-padding flex flex-wrap items-center gap-1.5 py-3 text-xs font-body text-gold-light/60">
            {all.map((c, i) => {
              const last = i === all.length - 1;
              return (
                <li key={c.path} className="flex items-center gap-1.5">
                  {last ? (
                    <span className="text-gold uppercase tracking-wider" aria-current="page">
                      {c.name}
                    </span>
                  ) : (
                    <Link
                      to={c.path}
                      className="uppercase tracking-wider hover:text-gold transition-colors"
                    >
                      {c.name}
                    </Link>
                  )}
                  {!last && <ChevronRight size={12} className="text-gold/40" />}
                </li>
              );
            })}
          </ol>
        </nav>
      )}
    </>
  );
};

export default SeoBreadcrumbs;
