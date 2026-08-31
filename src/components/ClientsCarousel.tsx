import tvsLogo from "@/assets/clients/tvs.webp.asset.json";

/**
 * Automatic horizontal client logo carousel.
 * Order matters: list clients from biggest name / revenue first —
 * the marquee starts from the top of this array.
 */
export interface ClientLogo {
  /** Imported image asset */
  src: string;
  /** Client name, used for alt text */
  name: string;
}

export const clients: ClientLogo[] = [
  { src: tvsLogo.url, name: "TVS" },
];

const LogoRow = ({ ariaHidden = false }: { ariaHidden?: boolean }) => (
  <ul aria-hidden={ariaHidden} className="flex shrink-0 items-center">
    {clients.map((c, i) => (
      <li key={i} className="mx-8 md:mx-12 flex items-center">
        <img
          src={c.src}
          alt={`${c.name} logo`}
          loading="lazy"
          className="h-12 md:h-16 w-auto object-contain opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
        />
      </li>
    ))}
  </ul>
);

const ClientsCarousel = () => {
  if (clients.length === 0) return null;

  return (
    <section className="py-14 bg-surface border-y border-border" aria-label="Our clients">
      <div className="container mx-auto section-padding">
        <div className="text-center mb-8">
          <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-2">Trusted By</p>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">Our Clients</h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mt-4" />
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 md:w-32 bg-gradient-to-r from-surface to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 md:w-32 bg-gradient-to-l from-surface to-transparent" />

        <div className="flex w-max animate-client-marquee items-center">
          <LogoRow />
          <LogoRow ariaHidden />
        </div>
      </div>

      <style>{`
        @keyframes client-marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-client-marquee {
          animation: client-marquee-scroll 40s linear infinite;
          will-change: transform;
        }
        .animate-client-marquee:hover { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .animate-client-marquee { animation-duration: 160s; }
        }
      `}</style>
    </section>
  );
};

export default ClientsCarousel;
