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

const ITEM_HEIGHT = 64; // px per slot (matches text-3xl/4xl line height)
const VISIBLE = 5; // 2 above + active + 2 below
const INTERVAL = 2600; // ms between rotations

const ManufactureCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % WORDS.length);
    }, INTERVAL);
    return () => clearInterval(id);
  }, []);

  // Build a list of VISIBLE slots centered on the active index (wrapping).
  const half = Math.floor(VISIBLE / 2);
  const slots = Array.from({ length: VISIBLE }, (_, slotIdx) => {
    const offset = slotIdx - half; // -2,-1,0,1,2
    const wordIdx = (index + offset + WORDS.length * 10) % WORDS.length;
    return { offset, word: WORDS[wordIdx] };
  });

  const opacityFor = (offset: number) => {
    if (offset === 0) return 1;
    if (Math.abs(offset) === 1) return 0.5;
    return 0.2;
  };

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

          {/* Right: vertical carousel */}
          <div
            className="relative overflow-hidden"
            style={{ height: `${ITEM_HEIGHT * VISIBLE}px` }}
            aria-live="polite"
          >
            {/* Top & bottom fade masks */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-navy-dark to-transparent z-10" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-navy-dark to-transparent z-10" />

            <div className="absolute inset-0 flex flex-col items-center md:items-start justify-center">
              {slots.map(({ offset, word }) => {
                const isActive = offset === 0;
                return (
                  <div
                    key={`${offset}-${word}`}
                    className="flex items-center transition-all duration-700 ease-in-out"
                    style={{
                      height: `${ITEM_HEIGHT}px`,
                      opacity: opacityFor(offset),
                    }}
                  >
                    <span
                      className={`font-heading leading-none whitespace-nowrap transition-all duration-700 ${
                        isActive
                          ? "text-gold text-3xl md:text-4xl lg:text-5xl font-bold"
                          : "text-gold-light/80 text-2xl md:text-3xl font-medium"
                      }`}
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
