import { useEffect, useRef, useState } from "react";

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
  "Freight and Goods Elevators",
  "Hospital Elevators",
  "Capsule and Glass Elevators",
  "Car Elevators",
];

const ITEM_HEIGHT = 64;
const VISIBLE = 5;
const INTERVAL = 2600;
const TRANSITION_MS = 1100;

const ManufactureCarousel = () => {
  // Counter that only ever increases — gives infinite circular feel.
  const [tick, setTick] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), INTERVAL);
    return () => clearInterval(id);
  }, []);

  const half = Math.floor(VISIBLE / 2);
  const N = WORDS.length;

  // Render a wider window so the visible 5-row area stays full during the
  // glide animation (track moves down→up by ITEM_HEIGHT each tick).
  // Pad = half + 2 covers the gap that would otherwise appear at top/bottom.
  const PAD = half + 2;
  const slots = Array.from({ length: PAD * 2 + 1 }, (_, i) => {
    const offset = i - PAD; // e.g. -4..+4 for VISIBLE=5
    const wordIdx = ((tick + offset) % N + N) % N;
    return { offset, word: WORDS[wordIdx], key: `${tick}-${i}` };
  });

  return (
    <section
      className="bg-navy-dark w-full overflow-hidden"
      style={{ height: `${ITEM_HEIGHT * VISIBLE}px` }}
      aria-label="Products we manufacture"
    >
      <div className="container mx-auto h-full section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full items-center gap-6">
          <div className="flex md:justify-end justify-center">
            <h2 className="font-heading font-bold text-gold-light text-3xl md:text-4xl lg:text-5xl leading-none">
              We manufacture
            </h2>
          </div>

          <div
            className="relative overflow-hidden"
            style={{ height: `${ITEM_HEIGHT * VISIBLE}px` }}
            aria-live="polite"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-navy-dark to-transparent z-10" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-navy-dark to-transparent z-10" />

            {/* Sliding chain — re-keyed each tick so it always glides one row up
                from the same start position, giving a seamless infinite loop. */}
            <div
              ref={containerRef}
              key={tick}
              className="absolute left-0 right-0 animate-glide-up"
              style={{
                top: `${half * ITEM_HEIGHT}px`,
              }}
            >
              {slots.map(({ offset, word, key }) => {
                // The track glides up by one row; offset === 0 is the active
                // slot AFTER the glide completes. Fade by distance from center,
                // but keep padded rows visible so the window is never blank.
                const isActive = offset === 0;
                const dist = Math.abs(offset);
                let color = "hsl(var(--gold))";
                let opacity = 1;
                if (dist === 0) {
                  color = "hsl(var(--gold))";
                  opacity = 1;
                } else if (dist === 1) {
                  color = "hsl(0 0% 100%)";
                  opacity = 0.55;
                } else if (dist === 2) {
                  color = "hsl(0 0% 100%)";
                  opacity = 0.22;
                } else {
                  color = "hsl(0 0% 100%)";
                  opacity = 0.08;
                }

                return (
                  <div
                    key={key}
                    className="flex items-center md:justify-start justify-center"
                    style={{
                      height: `${ITEM_HEIGHT}px`,
                      transform: `translateY(${offset * ITEM_HEIGHT}px)`,
                      position: "absolute",
                      left: 0,
                      right: 0,
                      top: 0,
                    }}
                  >
                    <span
                      className={`font-heading leading-none whitespace-nowrap ${
                        isActive
                          ? "text-3xl md:text-5xl lg:text-6xl font-bold"
                          : "text-2xl md:text-3xl font-medium"
                      }`}
                      style={{ color, opacity }}
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

      <style>{`
        @keyframes glide-up {
          from { transform: translateY(${ITEM_HEIGHT}px); }
          to   { transform: translateY(0); }
        }
        .animate-glide-up {
          animation: glide-up ${TRANSITION_MS}ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }
      `}</style>
    </section>
  );
};

export default ManufactureCarousel;
