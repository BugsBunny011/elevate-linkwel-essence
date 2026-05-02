const ITEMS = [
  "EOT Cranes",
  "Goods Lifts",
  "Gearboxes",
  "Passenger Elevators",
  "Goliath Cranes",
  "Jib Cranes",
  "Electric Hoists",
  "Single Girder Cranes",
  "Double Girder Cranes",
  "Material Handling",
];

const Diamond = () => (
  <span aria-hidden="true" className="inline-flex items-center justify-center">
    <svg width="10" height="10" viewBox="0 0 10 10" className="text-gold/80">
      <rect
        x="5"
        y="0.5"
        width="6.36"
        height="6.36"
        transform="rotate(45 5 0.5)"
        className="fill-current"
      />
    </svg>
  </span>
);

const Row = ({ ariaHidden = false }: { ariaHidden?: boolean }) => (
  <ul
    aria-hidden={ariaHidden}
    className="flex shrink-0 items-center"
  >
    {ITEMS.map((item, i) => (
      <li key={i} className="flex items-center whitespace-nowrap">
        <span className="font-heading text-sm md:text-base font-semibold tracking-[0.2em] uppercase bg-gradient-to-r from-gold-light via-gold to-gold-light bg-clip-text text-transparent transition-all duration-300 hover:from-gold hover:via-gold-light hover:to-gold">
          {item}
        </span>
        <span className="mx-6 md:mx-8">
          <Diamond />
        </span>
      </li>
    ))}
  </ul>
);

const MarqueeStrip = () => (
  <div className="relative w-full overflow-hidden bg-gradient-to-r from-navy-dark via-navy to-navy-dark py-3.5 border-y border-gold/25 shadow-[inset_0_0_30px_rgba(0,0,0,0.4)]">
    {/* Edge fades */}
    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 md:w-32 bg-gradient-to-r from-navy-dark to-transparent" />
    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 md:w-32 bg-gradient-to-l from-navy-dark to-transparent" />

    {/* Top & bottom gold hairlines */}
    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

    <div className="flex w-max animate-marquee items-center">
      <Row />
      <Row ariaHidden />
    </div>

    <style>{`
      @keyframes marquee-scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-marquee {
        animation: marquee-scroll 45s linear infinite;
        will-change: transform;
      }
      .animate-marquee:hover {
        animation-play-state: paused;
      }
      @media (prefers-reduced-motion: reduce) {
        .animate-marquee { animation-duration: 140s; }
      }
    `}</style>
  </div>
);

export default MarqueeStrip;
