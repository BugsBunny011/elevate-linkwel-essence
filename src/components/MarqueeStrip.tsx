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

const Row = ({ ariaHidden = false }: { ariaHidden?: boolean }) => (
  <ul
    aria-hidden={ariaHidden}
    className="flex shrink-0 items-center gap-10 px-5"
  >
    {ITEMS.map((item, i) => (
      <li key={i} className="flex items-center gap-10 whitespace-nowrap">
        <span className="font-body text-sm md:text-base font-medium tracking-wider uppercase text-gold-light">
          {item}
        </span>
        <span className="text-gold/60" aria-hidden="true">
          •
        </span>
      </li>
    ))}
  </ul>
);

const MarqueeStrip = () => (
  <div
    className="relative w-full overflow-hidden border-y border-gold/20 bg-navy-dark py-3"
    role="marquee"
    aria-label="Linkwel Engineers product range"
  >
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
        animation: marquee-scroll 40s linear infinite;
      }
      @media (prefers-reduced-motion: reduce) {
        .animate-marquee { animation-duration: 120s; }
      }
    `}</style>
  </div>
);

export default MarqueeStrip;
