import ScrollReveal from "./ScrollReveal";
import journeyBg from "@/assets/journey-skyline.jpg";



const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const GearIcon = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="3.2" />
    <path d="M12 2.5v2.4M12 19.1v2.4M21.5 12h-2.4M4.9 12H2.5M18.7 5.3l-1.7 1.7M7 17l-1.7 1.7M18.7 18.7L17 17M7 7L5.3 5.3" />
  </svg>
);

const HandshakeIcon = () => (
  <svg {...iconProps}>
    <path d="M3 9.5l3.5-3h4l2 1.7 2-1.7h4L22 9.5" />
    <path d="M12.5 8.2L9 11.6a1.6 1.6 0 002.3 2.3l1.3-1.3 3 3a1.5 1.5 0 002.2-2" />
    <path d="M3 9.5v5.2l3 2.6M21 9.5v5.2l-3 2.6" />
  </svg>
);

const FactoryIcon = () => (
  <svg {...iconProps}>
    <path d="M3 20V10l5 3V10l5 3V10l5 3V6.5h3V20z" />
    <path d="M3 20h18" />
  </svg>
);

const CraneIcon = () => (
  <svg {...iconProps}>
    <path d="M4 21h6M7 21V4M7 4h13M7 4L3.5 8" />
    <path d="M16 4v5M16 9h-2.5M16 9h2.5" />
    <path d="M20 4v3" />
  </svg>
);

const ElevatorPanelIcon = () => (
  <svg {...iconProps}>
    <rect x="5" y="2.8" width="14" height="18.4" rx="2" />
    <path d="M12 2.8v18.4" />
    <path d="M9 8l-1.2 1.6h2.4zM15 16l1.2-1.6h-2.4z" />
  </svg>
);

const GrowthIcon = () => (
  <svg {...iconProps}>
    <path d="M3 19h18" />
    <path d="M6 19v-5M11 19V8M16 19v-8M21 19V4" />
  </svg>
);

const BuildingIcon = () => (
  <svg {...iconProps}>
    <rect x="4" y="3" width="16" height="18" rx="1.5" />
    <path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2" />
    <path d="M10 21v-3h4v3" />
  </svg>
);

const GlobeIcon = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" />
  </svg>
);

interface Milestone {
  year: string;
  key: string;
  rest: string;
  Icon: () => JSX.Element;
}

const milestones: Milestone[] = [
  {
    year: "1989",
    key: "Inception of Linkwel Engineers",
    rest: ", founded by Suresh Bagga as a workshop manufacturing crane components, including gearboxes.",
    Icon: GearIcon,
  },
  {
    year: "1989 to 1997",
    key: "Partnered with Avon",
    rest: ", building foundational manufacturing expertise.",
    Icon: HandshakeIcon,
  },
  {
    year: "1997",
    key: "Acquired our own factory",
    rest: ", marking the shift from workshop to dedicated production facility.",
    Icon: FactoryIcon,
  },
  {
    year: "1998",
    key: "Began manufacturing goods lifts and cranes",
    rest: " under the Linkwel name.",
    Icon: CraneIcon,
  },
  {
    year: "2001",
    key: "Sunit Bagga joined the company",
    rest: ", driving business expansion.",
    Icon: GrowthIcon,
  },
  {
    year: "2004",
    key: "Started manufacturing passenger elevators",
    rest: " for residential and commercial buildings.",
    Icon: ElevatorPanelIcon,
  },
  {
    year: "2025",
    key: "Crossed 1000+ installations",
    rest: " across goods lifts, passenger elevators and cranes.",
    Icon: BuildingIcon,
  },
  {
    year: "2026",
    key: "Launched our digital presence",
    rest: ", with a new website and pan-India B2B, GeM and IndiaMART listings.",
    Icon: GlobeIcon,
  },
];

const Connector = ({ side }: { side: "left" | "right" }) => (
  <svg
    className="hidden md:block h-10 w-16 text-accent/70 shrink-0"
    viewBox="0 0 64 40"
    fill="none"
    aria-hidden="true"
  >
    <path
      d={side === "left" ? "M64 20 C 44 20, 40 8, 0 8" : "M0 20 C 20 20, 24 8, 64 8"}
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
  </svg>
);

const Card = ({ m, align }: { m: Milestone; align: "left" | "right" }) => (
  <div
    tabIndex={0}
    className={`group rounded-2xl border border-accent/40 bg-white/[0.02] p-5 md:p-6 outline-none transition-colors duration-300 hover:border-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--journey-bg))] ${
      align === "left" ? "md:text-right" : "md:text-left"
    }`}
  >
    <div
      className={`flex items-center gap-3 mb-3 ${
        align === "left" ? "md:flex-row-reverse" : ""
      }`}
    >
      <span className="text-accent shrink-0">
        <m.Icon />
      </span>
      <span className="font-heading font-bold text-white text-3xl md:text-[2.35rem] leading-none">
        {m.year}
      </span>
    </div>
    <p className="font-body text-[0.975rem] leading-relaxed text-white/60">
      <strong className="font-semibold text-white">{m.key}</strong>
      {m.rest}
    </p>
  </div>
);

const JourneyTimeline = () => (
  <section
    id="our-journey"
    aria-labelledby="our-journey-heading"
    className="relative py-24 md:py-32 bg-[hsl(var(--journey-bg))]"
  >
    <div className="container mx-auto section-padding">
      <ScrollReveal>
        <div className="text-center mb-16 md:mb-24">
          <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-3">
            Milestones
          </p>
          <h2
            id="our-journey-heading"
            className="text-4xl md:text-6xl font-heading font-bold text-white"
          >
            Our Journey
          </h2>
          <p className="mt-4 font-body text-white/60 text-base md:text-lg max-w-2xl mx-auto">
            35+ years of engineering trust, from a workshop to a pan-India manufacturer
          </p>
          <div className="w-16 h-0.5 bg-accent mx-auto mt-6" />
        </div>
      </ScrollReveal>

      <div className="relative max-w-5xl mx-auto">
        {/* dotted spine */}
        <div
          aria-hidden="true"
          className="absolute top-0 bottom-0 left-[11px] md:left-1/2 md:-translate-x-1/2 border-l border-dotted border-accent/45"
        />

        <ol className="relative space-y-[72px] md:space-y-[130px]">
          {milestones.map((m, i) => {
            const left = i % 2 === 0;
            return (
              <li key={m.year} className="relative">
                <ScrollReveal delay={(i % 4) * 100}>
                  <div
                    className={`flex items-center pl-12 md:pl-0 ${
                      left ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className="w-full md:w-[calc(50%-2rem)] flex md:justify-end">
                      <div className="w-full">
                        <Card m={m} align={left ? "left" : "right"} />
                      </div>
                    </div>

                    <Connector side={left ? "left" : "right"} />

                    <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                  </div>


                  {/* dot on the line */}
                  <span
                    aria-hidden="true"
                    className="absolute top-6 md:top-1/2 md:-translate-y-1/2 left-[4px] md:left-1/2 md:-translate-x-1/2 h-4 w-4 rounded-full bg-accent ring-4 ring-[hsl(var(--journey-bg))]"
                  />
                </ScrollReveal>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  </section>
);

export default JourneyTimeline;
