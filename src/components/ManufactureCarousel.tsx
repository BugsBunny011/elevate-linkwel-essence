import { useEffect, useState } from "react";

const WORDS = [
  "EOT Cranes",
  "Single Girder Cranes",
  "Double Girder Cranes",
  "Gantry Cranes",
  "Goliath Cranes",
  "Jib Cranes",
  "Electric Hoists",
  "Passenger Elevators",
  "Home Elevators",
  "Freight & Goods Elevators",
  "Hospital Elevators",
  "Capsule & Glass Elevators",
  "Car Elevators",
];

const ITEM_HEIGHT = 64; // px per slot
const VISIBLE = 5;
const INTERVAL = 2600; // ms between glides
const TRANSITION_MS = 1100; // glide duration

// Duplicate the list so we can translate continuously and seamlessly loop.
const LOOP = [...WORDS, ...WORDS];

const ManufactureCarousel = () => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => i + 1);
    }, INTERVAL);
    return () => clearInterval(id);
  }, []);

  // When we reach the end of the first copy, snap back to 0 without animation.
  useEffect(() => {
    if (index === WORDS.length) {
      const t = setTimeout(() => {
        setAnimate(false);
        setIndex(0);
        // re-enable animation on next frame
        requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
      }, TRANSITION_MS);
      return () => clearTimeout(t);
    }
  }, [index]);

  const half = Math.floor(VISIBLE / 2);
  // translate so that the active word sits in the middle slot
  const translateY = -(index * ITEM_HEIGHT);

  return (
    <section
      className="bg-navy-dark w-full overflow-hidden"
      style={{ height: `${ITEM_HEIGHT * VISIBLE}px` }}
      aria-label="Products we manufacture"
    >
      <div className="container mx-auto h-full section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full items-center gap-6">
          {/* Left: static label */}
          <div className="flex md:justify-end justify-center">
            <h2 className="font-heading font-bold text-gold-light text-3xl md:text-4xl lg:text-5xl leading-none">
              We manufacture
            </h2>
          </div>

          {/* Right: smooth gliding carousel */}
          <div
            className="relative overflow-hidden"
            style={{ height: `${ITEM_HEIGHT * VISIBLE}px` }}
            aria-live="polite"
          >
            {/* Top & bottom fade masks */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-navy-dark to-transparent z-10" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-navy-dark to-transparent z-10" />

            {/* Sliding track — the middle slot is the active row */}
            <div
              className="absolute left-0 right-0"
              style={{
                top: `${half * ITEM_HEIGHT}px`,
                transform: `translateY(${translateY}px)`,
                transition: animate
                  ? `transform ${TRANSITION_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`
                  : "none",
                willChange: "transform",
              }}
            >
              {LOOP.map((word, i) => {
                // distance from current active index
                const offset = i - index;
                const dist = Math.abs(offset);
                const isActive = offset === 0;
                let opacity = 1;
                if (dist === 1) opacity = 0.55;
                else if (dist === 2) opacity = 0.22;
                else if (dist >= 3) opacity = 0;

                return (
                  <div
                    key={i}
                    className="flex items-center md:justify-start justify-center"
                    style={{ height: `${ITEM_HEIGHT}px` }}
                  >
                    <span
                      className={`font-heading leading-none whitespace-nowrap transition-[color,font-size,opacity] duration-700 ease-out ${
                        isActive
                          ? "text-gold text-3xl md:text-4xl lg:text-5xl font-bold"
                          : "text-gold-light text-2xl md:text-3xl font-medium"
                      }`}
                      style={{ opacity }}
                    >
                      {word}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufactureCarousel;
