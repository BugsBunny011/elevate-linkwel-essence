import tvsLogo from "@/assets/clients/tvs.webp";
import bhushanLogo from "@/assets/clients/bhushan.jpeg";
import godawariLogo from "@/assets/clients/godawari.png";
import prakashLogo from "@/assets/clients/prakash.jpeg";
import centuryLogo from "@/assets/clients/century.webp";
import wowMomoLogo from "@/assets/clients/wow-momo.png";
import parksonsLogo from "@/assets/clients/parksons.png";
import nationalLogo from "@/assets/clients/national.jpeg";
import avonLogo from "@/assets/clients/avon.png";
import daffodilLogo from "@/assets/clients/daffodil.jpg";
import beetaLogo from "@/assets/clients/beeta.jpg";
import novaLogo from "@/assets/clients/nova.jpeg";
import rachitechLogo from "@/assets/clients/rachitech.png";
import siddhivinayakLogo from "@/assets/clients/siddhivinayak.png";

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
  { src: tvsLogo, name: "TVS" },
  { src: bhushanLogo, name: "Bhushan Steel" },
  { src: godawariLogo, name: "Godawari Power & Ispat" },
  { src: prakashLogo, name: "Prakash Industries" },
  { src: centuryLogo, name: "Century Plyboards" },
  { src: wowMomoLogo, name: "Wow! Momo" },
  { src: parksonsLogo, name: "Parksons Packaging" },
  { src: nationalLogo, name: "National" },
  { src: avonLogo, name: "Avon" },
  { src: daffodilLogo, name: "Daffodil Tissues" },
  { src: beetaLogo, name: "Beeta" },
  { src: novaLogo, name: "Nova Publication" },
  { src: rachitechLogo, name: "Rachitech" },
  { src: siddhivinayakLogo, name: "Siddhivinayak Plastic Wares" },
];



const LogoRow = ({ ariaHidden = false }: { ariaHidden?: boolean }) => (
  <ul aria-hidden={ariaHidden} className="flex shrink-0 items-center">
    {clients.map((c, i) => (
      <li key={i} className="mx-8 md:mx-12 flex items-center justify-center">
        <div className="w-36 md:w-44 h-16 md:h-20 flex items-center justify-center">
          <img
            src={c.src}
            alt={`${c.name} logo`}
            loading="lazy"
            className="max-w-full max-h-full w-auto h-auto object-contain opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
          />
        </div>
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
