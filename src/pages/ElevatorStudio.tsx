import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Check, DoorOpen, DoorClosed, Lightbulb } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Option = { id: string; label: string; swatch?: string };

const ELEVATOR_TYPES: Option[] = [
  { id: "passenger", label: "Passenger Elevator" },
  { id: "home", label: "Home / Villa Elevator" },
  { id: "capsule", label: "Capsule / Glass Elevator" },
  { id: "car", label: "Car Elevator" },
  { id: "goods", label: "Goods / Freight Elevator" },
  { id: "hospital", label: "Hospital Elevator" },
];

type WallFinish = {
  id: string;
  label: string;
  swatch: string;
  // CSS background applied to walls
  wallBg: string;
  // overlay (e.g. brushed lines, wood grain) — applied above wallBg
  wallOverlay?: string;
  // solid door color when "solid" door selected
  solidDoorBg: string;
  solidDoorOverlay?: string;
};

const WALL_FINISHES: WallFinish[] = [
  {
    id: "brushed",
    label: "Brushed Stainless Steel",
    swatch: "linear-gradient(135deg,#c8ccd1 0%,#9ba0a6 50%,#c8ccd1 100%)",
    wallBg: "linear-gradient(180deg,#d8dde2 0%,#a8aeb5 100%)",
    wallOverlay:
      "repeating-linear-gradient(90deg, rgba(255,255,255,0.18) 0 1px, transparent 1px 3px), repeating-linear-gradient(90deg, rgba(0,0,0,0.08) 0 1px, transparent 1px 5px)",
    solidDoorBg: "linear-gradient(180deg,#cfd4d9,#9aa0a6)",
    solidDoorOverlay:
      "repeating-linear-gradient(90deg, rgba(255,255,255,0.2) 0 1px, transparent 1px 3px)",
  },
  {
    id: "mirror",
    label: "Mirror Finish",
    swatch: "linear-gradient(135deg,#e8ecf1 0%,#ffffff 40%,#b8bec6 100%)",
    wallBg:
      "linear-gradient(135deg,#f4f7fb 0%,#ffffff 30%,#c8d0d8 60%,#eef2f6 100%)",
    wallOverlay:
      "linear-gradient(115deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 30%, rgba(255,255,255,0.35) 55%, rgba(255,255,255,0) 80%)",
    solidDoorBg:
      "linear-gradient(135deg,#f4f7fb 0%,#ffffff 30%,#c8d0d8 70%,#eef2f6 100%)",
    solidDoorOverlay:
      "linear-gradient(115deg, rgba(255,255,255,0.5), rgba(255,255,255,0) 60%)",
  },
  {
    id: "matte",
    label: "Black Matte",
    swatch: "linear-gradient(135deg,#1a1a1a,#2a2a2a)",
    wallBg: "linear-gradient(180deg,#222426 0%,#0f1011 100%)",
    solidDoorBg: "linear-gradient(180deg,#1d1f21,#0c0d0e)",
  },
  {
    id: "champagne",
    label: "Champagne Gold",
    swatch: "linear-gradient(135deg,#d4a85a 0%,#f0d78c 50%,#b8902f 100%)",
    wallBg: "linear-gradient(180deg,#e7c178 0%,#b48830 100%)",
    wallOverlay:
      "linear-gradient(115deg, rgba(255,240,200,0.35), rgba(255,255,255,0) 60%)",
    solidDoorBg: "linear-gradient(180deg,#e3bd72,#a87f2a)",
  },
  {
    id: "wood",
    label: "Wooden Panel",
    swatch: "linear-gradient(135deg,#6b4423 0%,#a87148 40%,#7a4d28 100%)",
    wallBg: "linear-gradient(180deg,#8a5a31 0%,#5d3a1e 100%)",
    wallOverlay:
      "repeating-linear-gradient(180deg, rgba(60,30,10,0.35) 0 1px, transparent 1px 6px), repeating-linear-gradient(180deg, rgba(255,220,170,0.08) 0 2px, transparent 2px 14px)",
    solidDoorBg: "linear-gradient(180deg,#8a5a31,#5d3a1e)",
    solidDoorOverlay:
      "repeating-linear-gradient(180deg, rgba(60,30,10,0.4) 0 1px, transparent 1px 6px)",
  },
  {
    id: "gloss",
    label: "White Gloss",
    swatch: "linear-gradient(135deg,#ffffff 0%,#f0f0f0 60%,#dcdcdc 100%)",
    wallBg: "linear-gradient(180deg,#ffffff 0%,#e6e8ea 100%)",
    wallOverlay:
      "linear-gradient(115deg, rgba(255,255,255,0.6), rgba(255,255,255,0) 50%)",
    solidDoorBg: "linear-gradient(180deg,#ffffff,#dfe2e5)",
  },
];

type DoorStyle = { id: "glass" | "stainless"; label: string; Icon: typeof DoorOpen };
const DOOR_STYLES: DoorStyle[] = [
  { id: "glass", label: "Glass Door", Icon: DoorOpen },
  { id: "stainless", label: "Solid Door", Icon: DoorClosed },
];

type FloorOption = { id: string; label: string; swatch: string; bg: string; overlay?: string };
const FLOORS: FloorOption[] = [
  {
    id: "marble",
    label: "Marble White",
    swatch: "linear-gradient(135deg,#f6f6f6,#dcdcdc)",
    bg: "linear-gradient(180deg,#f3f4f6,#d9dbde)",
    overlay:
      "repeating-linear-gradient(35deg, rgba(120,120,130,0.12) 0 1px, transparent 1px 18px), repeating-linear-gradient(-20deg, rgba(120,120,130,0.08) 0 1px, transparent 1px 28px)",
  },
  {
    id: "granite",
    label: "Dark Granite",
    swatch: "linear-gradient(135deg,#2a2c30,#46494e)",
    bg: "linear-gradient(180deg,#2e3034,#1a1b1d)",
    overlay:
      "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.08) 0 2px, transparent 3px), radial-gradient(circle at 70% 60%, rgba(255,255,255,0.06) 0 2px, transparent 3px), radial-gradient(circle at 40% 80%, rgba(255,255,255,0.05) 0 1px, transparent 2px)",
  },
  {
    id: "wood",
    label: "Warm Wood",
    swatch: "linear-gradient(135deg,#8a5a31,#5d3a1e)",
    bg: "linear-gradient(180deg,#9a6a3a,#6a4424)",
    overlay:
      "repeating-linear-gradient(90deg, rgba(40,20,5,0.35) 0 2px, transparent 2px 60px), repeating-linear-gradient(90deg, rgba(255,220,170,0.08) 0 1px, transparent 1px 14px)",
  },
  {
    id: "checker",
    label: "Checkered",
    swatch:
      "conic-gradient(#fff 0 25%, #111 0 50%, #fff 0 75%, #111 0)",
    bg: "#111",
    overlay:
      "conic-gradient(#f5f5f5 0 25%, #111 0 50%, #f5f5f5 0 75%, #111 0) 0 0/40px 40px",
  },
  {
    id: "beige",
    label: "Beige Stone",
    swatch: "linear-gradient(135deg,#e8dcc4,#cdbb98)",
    bg: "linear-gradient(180deg,#ece0c8,#c9b794)",
    overlay:
      "radial-gradient(circle at 30% 40%, rgba(140,110,70,0.12) 0 3px, transparent 4px), radial-gradient(circle at 70% 70%, rgba(140,110,70,0.1) 0 2px, transparent 3px)",
  },
];

type CeilingOption = { id: string; label: string };
const CEILINGS: CeilingOption[] = [
  { id: "mirror", label: "Flat Mirror" },
  { id: "coffered", label: "Coffered Panel" },
  { id: "cove", label: "Cove Ceiling" },
  { id: "backlit", label: "Backlit Panel" },
];

const LIGHTING_TYPES: Option[] = [
  { id: "cove", label: "Cove Lighting" },
  { id: "spotlights", label: "Recessed Spotlights" },
  { id: "strip", label: "LED Strip Lighting" },
  { id: "panel", label: "Classic Ceiling Panel" },
];
const LIGHTING_DESC: Record<string, string> = {
  cove: "Soft indirect glow from ceiling edges",
  spotlights: "Clean, focused ceiling spots",
  strip: "Modern strips along walls or ceiling",
  panel: "Standard flat ceiling light",
};

type LightColor = { id: string; label: string; swatch: string; glow: string; soft: string };
const LIGHTING_COLORS: LightColor[] = [
  { id: "warm", label: "Warm White", swatch: "radial-gradient(circle,#fff2c2,#ffd97a)", glow: "#ffd97a", soft: "rgba(255,217,122,0.55)" },
  { id: "cool", label: "Cool White", swatch: "radial-gradient(circle,#ffffff,#cfe8ff)", glow: "#cfe8ff", soft: "rgba(207,232,255,0.6)" },
  { id: "amber", label: "Soft Amber", swatch: "radial-gradient(circle,#ffd4a0,#e89a4a)", glow: "#e89a4a", soft: "rgba(232,154,74,0.55)" },
  { id: "rgb", label: "RGB Mood", swatch: "conic-gradient(from 0deg,#ff5e7a,#ffa84a,#ffe14a,#7af0a0,#5ec8ff,#b478ff,#ff5e7a)", glow: "#d090ff", soft: "rgba(208,144,255,0.55)" },
];

/* -------------------- Cabin Illustration -------------------- */

type CabinProps = {
  wall: WallFinish;
  door: DoorStyle | null;
  floor: FloorOption;
  ceiling: CeilingOption;
  lighting: Option | null;
  lightColor: LightColor;
};

const TRANSITION = "all 300ms cubic-bezier(0.4,0,0.2,1)";

const CabinIllustration = ({ wall, door, floor, ceiling, lighting, lightColor }: CabinProps) => {
  // Perspective dims (percent inside the stage)
  const backTop = 16; // %
  const backBottom = 72;
  const backLeft = 26;
  const backRight = 74;

  // Side wall polygons
  const leftWall = `polygon(0% 0%, ${backLeft}% ${backTop}%, ${backLeft}% ${backBottom}%, 0% 100%)`;
  const rightWall = `polygon(100% 0%, ${backRight}% ${backTop}%, ${backRight}% ${backBottom}%, 100% 100%)`;
  const ceilingPoly = `polygon(0% 0%, 100% 0%, ${backRight}% ${backTop}%, ${backLeft}% ${backTop}%)`;
  const floorPoly = `polygon(${backLeft}% ${backBottom}%, ${backRight}% ${backBottom}%, 100% 100%, 0% 100%)`;

  // Lighting overlays on ceiling area
  const lightingOverlay = () => {
    if (!lighting) return null;
    const c = lightColor.glow;
    const soft = lightColor.soft;
    if (lighting.id === "cove") {
      return (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            clipPath: ceilingPoly,
            background: `radial-gradient(ellipse 90% 60% at 50% 100%, ${soft} 0%, transparent 70%)`,
            mixBlendMode: "screen",
            transition: TRANSITION,
          }}
        />
      );
    }
    if (lighting.id === "spotlights") {
      return (
        <div className="absolute inset-0 pointer-events-none" style={{ clipPath: ceilingPoly, transition: TRANSITION }}>
          {[25, 50, 75].map((x) => (
            <div
              key={x}
              className="absolute rounded-full"
              style={{
                left: `${x}%`,
                top: "55%",
                width: 18,
                height: 18,
                transform: "translate(-50%, -50%)",
                background: `radial-gradient(circle, ${c} 0%, ${soft} 40%, transparent 75%)`,
                boxShadow: `0 0 24px 8px ${soft}`,
                transition: TRANSITION,
              }}
            />
          ))}
        </div>
      );
    }
    if (lighting.id === "strip") {
      return (
        <>
          {/* glow along ceiling-wall junction (back edge) */}
          <div
            className="absolute pointer-events-none"
            style={{
              left: `${backLeft}%`,
              top: `${backTop}%`,
              width: `${backRight - backLeft}%`,
              height: "2px",
              background: c,
              boxShadow: `0 0 14px 4px ${soft}, 0 6px 22px 6px ${soft}`,
              transition: TRANSITION,
            }}
          />
        </>
      );
    }
    if (lighting.id === "panel") {
      return (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            clipPath: ceilingPoly,
            background: `radial-gradient(ellipse 70% 80% at 50% 60%, ${soft} 0%, transparent 75%)`,
            mixBlendMode: "screen",
            transition: TRANSITION,
          }}
        />
      );
    }
    return null;
  };

  // Ceiling style decoration
  const ceilingDecor = () => {
    const base = (
      <div
        className="absolute inset-0"
        style={{
          clipPath: ceilingPoly,
          background:
            ceiling.id === "mirror"
              ? "linear-gradient(180deg,#dde3ea 0%,#aeb5be 100%)"
              : ceiling.id === "backlit"
              ? "linear-gradient(180deg,#1a1c20,#0e0f12)"
              : "linear-gradient(180deg,#2a2d33,#1a1c20)",
          transition: TRANSITION,
        }}
      />
    );
    let extra: React.ReactNode = null;
    if (ceiling.id === "coffered") {
      extra = (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            clipPath: ceilingPoly,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "26px 18px",
            transition: TRANSITION,
          }}
        />
      );
    } else if (ceiling.id === "cove") {
      extra = (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            clipPath: ceilingPoly,
            background:
              "radial-gradient(ellipse 80% 70% at 50% 100%, transparent 55%, rgba(0,0,0,0.35) 80%)",
            transition: TRANSITION,
          }}
        />
      );
    } else if (ceiling.id === "backlit") {
      extra = (
        <div
          className="absolute pointer-events-none"
          style={{
            left: "30%",
            right: "30%",
            top: "30%",
            bottom: "20%",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0.55))",
            borderRadius: 6,
            boxShadow: "0 0 30px 8px rgba(255,255,255,0.35)",
            transition: TRANSITION,
          }}
        />
      );
    } else if (ceiling.id === "mirror") {
      extra = (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            clipPath: ceilingPoly,
            background:
              "linear-gradient(115deg, rgba(255,255,255,0.4), rgba(255,255,255,0) 50%, rgba(255,255,255,0.25))",
            transition: TRANSITION,
          }}
        />
      );
    }
    return (
      <>
        {base}
        {extra}
      </>
    );
  };

  // Doors
  const renderDoors = () => {
    const isGlass = door?.id === "glass";
    const doorBg = isGlass
      ? "linear-gradient(180deg, rgba(180,210,230,0.25), rgba(140,180,210,0.15))"
      : wall.solidDoorBg;
    const doorOverlay = isGlass ? undefined : wall.solidDoorOverlay;

    const doorWidth = (backRight - backLeft) * 0.55; // narrower than back wall
    const doorLeft = 50 - doorWidth / 2;

    return (
      <div
        className="absolute"
        style={{
          left: `${doorLeft}%`,
          width: `${doorWidth}%`,
          top: `${backTop + 2}%`,
          bottom: `${100 - backBottom + 2}%`,
          transition: TRANSITION,
        }}
      >
        {/* Door frame */}
        <div
          className="absolute inset-0 rounded-sm"
          style={{
            border: "2px solid rgba(0,0,0,0.4)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
            background: doorBg,
            backdropFilter: isGlass ? "blur(2px)" : undefined,
            transition: TRANSITION,
            overflow: "hidden",
          }}
        >
          {doorOverlay && (
            <div className="absolute inset-0" style={{ background: doorOverlay, transition: TRANSITION }} />
          )}
          {/* Door split line */}
          <div
            className="absolute top-0 bottom-0"
            style={{
              left: "50%",
              width: 2,
              background: "rgba(0,0,0,0.5)",
              transform: "translateX(-50%)",
              transition: TRANSITION,
            }}
          />
          {/* Glass reflection */}
          {isGlass && (
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(115deg, rgba(255,255,255,0.35), rgba(255,255,255,0) 35%, rgba(255,255,255,0.15) 70%)",
              }}
            />
          )}
        </div>
      </div>
    );
  };

  return (
    <div
      className="relative w-full"
      style={{
        aspectRatio: "4 / 5",
        background: "linear-gradient(180deg,#0a0f1c 0%,#050811 100%)",
        overflow: "hidden",
      }}
    >
      {/* Ceiling */}
      {ceilingDecor()}

      {/* Back wall */}
      <div
        className="absolute"
        style={{
          left: `${backLeft}%`,
          right: `${100 - backRight}%`,
          top: `${backTop}%`,
          bottom: `${100 - backBottom}%`,
          background: wall.wallBg,
          transition: TRANSITION,
          overflow: "hidden",
          boxShadow: "inset 0 0 40px rgba(0,0,0,0.35)",
        }}
      >
        {wall.wallOverlay && (
          <div className="absolute inset-0" style={{ background: wall.wallOverlay, transition: TRANSITION }} />
        )}
      </div>

      {/* Left wall */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: leftWall,
          background: wall.wallBg,
          transition: TRANSITION,
        }}
      >
        {wall.wallOverlay && (
          <div className="absolute inset-0" style={{ background: wall.wallOverlay, opacity: 0.85, transition: TRANSITION }} />
        )}
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.45), rgba(0,0,0,0.1))" }} />
      </div>

      {/* Right wall */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: rightWall,
          background: wall.wallBg,
          transition: TRANSITION,
        }}
      >
        {wall.wallOverlay && (
          <div className="absolute inset-0" style={{ background: wall.wallOverlay, opacity: 0.85, transition: TRANSITION }} />
        )}
        <div className="absolute inset-0" style={{ background: "linear-gradient(-90deg, rgba(0,0,0,0.45), rgba(0,0,0,0.1))" }} />
      </div>

      {/* Floor */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: floorPoly,
          background: floor.bg,
          transition: TRANSITION,
        }}
      >
        {floor.overlay && (
          <div className="absolute inset-0" style={{ background: floor.overlay, transition: TRANSITION }} />
        )}
        <div className="absolute inset-0" style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.35), rgba(0,0,0,0) 60%)" }} />
      </div>

      {/* Lighting on ceiling */}
      {lightingOverlay()}

      {/* Doors */}
      {renderDoors()}

      {/* Ambient light cast on back wall */}
      {lighting && (
        <div
          className="absolute pointer-events-none"
          style={{
            left: `${backLeft}%`,
            right: `${100 - backRight}%`,
            top: `${backTop}%`,
            bottom: `${100 - backBottom}%`,
            background: `radial-gradient(ellipse 80% 50% at 50% 0%, ${lightColor.soft} 0%, transparent 70%)`,
            mixBlendMode: "screen",
            transition: TRANSITION,
          }}
        />
      )}
    </div>
  );
};

/* -------------------- Page -------------------- */

const ElevatorStudio = () => {
  const [elevatorType, setElevatorType] = useState(ELEVATOR_TYPES[0]);
  const [wallFinish, setWallFinish] = useState<WallFinish>(WALL_FINISHES[0]);
  const [doorStyle, setDoorStyle] = useState<DoorStyle | null>(DOOR_STYLES[0]);
  const [floor, setFloor] = useState<FloorOption>(FLOORS[0]);
  const [ceiling, setCeiling] = useState<CeilingOption>(CEILINGS[0]);
  const [lighting, setLighting] = useState<Option | null>(LIGHTING_TYPES[0]);
  const [lightingColor, setLightingColor] = useState<LightColor>(LIGHTING_COLORS[0]);

  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", city: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const summary = useMemo(() => {
    const parts = [
      elevatorType?.label,
      wallFinish?.label,
      doorStyle?.label,
      floor?.label && `Floor: ${floor.label}`,
      ceiling?.label && `Ceiling: ${ceiling.label}`,
      lighting?.label && lightingColor?.label
        ? `${lighting.label} (${lightingColor.label})`
        : lighting?.label,
    ].filter(Boolean);
    return parts.join(" · ");
  }, [elevatorType, wallFinish, doorStyle, floor, ceiling, lighting, lightingColor]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const data = new URLSearchParams();
      data.append("form-name", "elevator-design");
      data.append("name", form.name);
      data.append("phone", form.phone);
      data.append("city", form.city);
      data.append("configuration", summary);
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data.toString(),
      });
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const sectionTitle = (n: number, title: string) => (
    <div className="flex items-center gap-3 mb-4">
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gold/20 text-gold font-heading text-sm border border-gold/40">
        {n}
      </span>
      <h2 className="text-lg md:text-xl font-heading font-semibold text-gold-light">{title}</h2>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Elevator Studio | Linkwel Engineers</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen navy-gradient">
        <div className="container mx-auto px-4 py-10 md:py-16">
          {/* Header */}
          <div className="text-center mb-10 md:mb-14">
            <p className="text-gold font-body text-xs md:text-sm tracking-[0.3em] uppercase mb-3">
              Linkwel Elevator Studio
            </p>
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-gold-light mb-4">
              Design Your <span className="text-gold-gradient">Elevator Interior</span>
            </h1>
            <p className="text-gold-light/70 font-body text-base md:text-lg max-w-2xl mx-auto">
              Choose your style and we'll build it for you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* LEFT — Live Preview */}
            <div className="lg:sticky lg:top-8 self-start">
              <div className="glass-card rounded-2xl overflow-hidden border border-gold/20">
                <CabinIllustration
                  wall={wallFinish}
                  door={doorStyle}
                  floor={floor}
                  ceiling={ceiling}
                  lighting={lighting}
                  lightColor={lightingColor}
                />
                <div className="p-4 border-t border-gold/20 bg-background/40">
                  <p className="text-gold text-[10px] tracking-[0.2em] uppercase mb-1">Current type</p>
                  <h3 className="text-lg font-heading font-bold text-gold-light">{elevatorType.label}</h3>
                </div>
              </div>
            </div>

            {/* RIGHT — Options */}
            <div className="space-y-10">
              {/* Step 1 */}
              <div>
                {sectionTitle(1, "Choose Elevator Type")}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {ELEVATOR_TYPES.map((t) => {
                    const active = elevatorType.id === t.id;
                    return (
                      <button
                        key={t.id}
                        onClick={() => setElevatorType(t)}
                        className={`p-3 rounded-lg border-2 text-left transition-all ${
                          active
                            ? "border-gold bg-gold/10 ring-1 ring-gold/30"
                            : "border-gold/15 hover:border-gold/50"
                        }`}
                      >
                        <p className={`text-xs font-body font-medium leading-tight ${active ? "text-gold" : "text-gold-light/80"}`}>
                          {t.label}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2 */}
              <div>
                {sectionTitle(2, "Cabin Wall Finish")}
                <div className="flex flex-wrap gap-3">
                  {WALL_FINISHES.map((f) => {
                    const active = wallFinish?.id === f.id;
                    return (
                      <button key={f.id} onClick={() => setWallFinish(f)} className="flex flex-col items-center gap-1.5 group">
                        <span
                          className={`w-14 h-14 rounded-full border transition-all ${
                            active
                              ? "ring-2 ring-gold ring-offset-2 ring-offset-background border-gold scale-110"
                              : "border-gold/30 group-hover:border-gold/60"
                          }`}
                          style={{ background: f.swatch }}
                        />
                        <span className={`text-[10px] text-center max-w-[72px] font-body leading-tight ${active ? "text-gold" : "text-gold-light/60"}`}>
                          {f.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3 */}
              <div>
                {sectionTitle(3, "Door Style")}
                <div className="grid grid-cols-2 gap-3">
                  {DOOR_STYLES.map((d) => {
                    const active = doorStyle?.id === d.id;
                    const Icon = d.Icon;
                    return (
                      <button
                        key={d.id}
                        onClick={() => setDoorStyle(d)}
                        className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                          active ? "border-gold bg-gold/5 ring-2 ring-gold/30" : "border-gold/15 hover:border-gold/50"
                        }`}
                      >
                        <Icon className={active ? "text-gold" : "text-gold-light/70"} size={24} />
                        <span className={`font-body text-sm ${active ? "text-gold-light" : "text-gold-light/80"}`}>
                          {d.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 4 — Floor */}
              <div>
                {sectionTitle(4, "Floor Finish")}
                <div className="flex flex-wrap gap-3">
                  {FLOORS.map((f) => {
                    const active = floor.id === f.id;
                    return (
                      <button key={f.id} onClick={() => setFloor(f)} className="flex flex-col items-center gap-1.5 group">
                        <span
                          className={`w-14 h-14 rounded-lg border transition-all ${
                            active
                              ? "ring-2 ring-gold ring-offset-2 ring-offset-background border-gold scale-105"
                              : "border-gold/30 group-hover:border-gold/60"
                          }`}
                          style={{ background: f.swatch, backgroundSize: f.id === "checker" ? "20px 20px" : undefined }}
                        />
                        <span className={`text-[10px] text-center max-w-[72px] font-body leading-tight ${active ? "text-gold" : "text-gold-light/60"}`}>
                          {f.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 5 — Ceiling */}
              <div>
                {sectionTitle(5, "Ceiling Style")}
                <div className="grid grid-cols-2 gap-3">
                  {CEILINGS.map((c) => {
                    const active = ceiling.id === c.id;
                    return (
                      <button
                        key={c.id}
                        onClick={() => setCeiling(c)}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          active ? "border-gold bg-gold/5 ring-2 ring-gold/30" : "border-gold/15 hover:border-gold/50"
                        }`}
                      >
                        <p className={`font-body text-sm ${active ? "text-gold-light" : "text-gold-light/80"}`}>{c.label}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 6 — Lighting */}
              <div>
                {sectionTitle(6, "Lighting Preference")}
                <div className="grid grid-cols-2 gap-3">
                  {LIGHTING_TYPES.map((l) => {
                    const active = lighting?.id === l.id;
                    return (
                      <button
                        key={l.id}
                        onClick={() => setLighting(l)}
                        className={`text-left p-4 rounded-xl border-2 transition-all ${
                          active ? "border-gold bg-gold/5 ring-2 ring-gold/30" : "border-gold/15 hover:border-gold/50"
                        }`}
                      >
                        <Lightbulb className={`mb-2 ${active ? "text-gold" : "text-gold-light/60"}`} size={20} />
                        <p className={`font-body font-medium text-sm ${active ? "text-gold-light" : "text-gold-light/80"}`}>
                          {l.label}
                        </p>
                        <p className="text-xs text-gold-light/50 font-body mt-1 leading-snug">{LIGHTING_DESC[l.id]}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 7 — Lighting Color */}
              <div>
                {sectionTitle(7, "Lighting Color")}
                <div className="flex flex-wrap gap-4">
                  {LIGHTING_COLORS.map((c) => {
                    const active = lightingColor?.id === c.id;
                    return (
                      <button key={c.id} onClick={() => setLightingColor(c)} className="flex flex-col items-center gap-1.5 group">
                        <span
                          className={`w-12 h-12 rounded-full border transition-all ${
                            active
                              ? "ring-2 ring-gold ring-offset-2 ring-offset-background border-gold scale-110"
                              : "border-gold/30 group-hover:border-gold/60"
                          }`}
                          style={{ background: c.swatch }}
                        />
                        <span className={`text-xs font-body ${active ? "text-gold" : "text-gold-light/60"}`}>{c.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Summary + CTA */}
              <div className="glass-card rounded-xl border border-gold/30 p-5 md:p-6 mt-2">
                <p className="text-[10px] tracking-[0.25em] uppercase text-gold font-body mb-2">Your design</p>
                <p className="text-gold-light font-body text-sm md:text-base leading-relaxed min-h-[1.5em]">
                  {summary || "Start selecting options to build your design…"}
                </p>
                <Button
                  onClick={() => setOpen(true)}
                  className="mt-5 w-full bg-gold hover:bg-gold/90 text-background font-body font-semibold tracking-wide h-12"
                >
                  Request a Quote for This Design
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Dialog open={open} onOpenChange={(v) => { setOpen(v); if (!v) setSubmitted(false); }}>
        <DialogContent className="bg-background border-gold/30 max-w-md">
          {!submitted ? (
            <>
              <DialogHeader>
                <DialogTitle className="font-heading text-xl text-gold-light">Request Your Custom Quote</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                <div>
                  <Label htmlFor="es-name" className="text-gold-light/80">Name</Label>
                  <Input id="es-name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="es-phone" className="text-gold-light/80">Phone Number</Label>
                  <Input id="es-phone" type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="es-city" className="text-gold-light/80">City</Label>
                  <Input id="es-city" required value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="es-config" className="text-gold-light/80">Your configuration</Label>
                  <Textarea id="es-config" readOnly value={summary} className="mt-1.5 bg-muted/30 text-sm" rows={4} />
                </div>
                <Button type="submit" disabled={submitting} className="w-full bg-gold hover:bg-gold/90 text-background font-semibold h-11">
                  {submitting ? "Sending…" : "Send My Design Request"}
                </Button>
              </form>
            </>
          ) : (
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center mx-auto mb-4">
                <Check className="text-gold" size={28} />
              </div>
              <h3 className="font-heading text-xl text-gold-light mb-2">Thank you!</h3>
              <p className="text-gold-light/70 font-body text-sm">
                Our team will contact you within 24 hours with a quote for your design.
              </p>
              <Button onClick={() => { setOpen(false); setSubmitted(false); }} className="mt-6 bg-gold hover:bg-gold/90 text-background">
                Close
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ElevatorStudio;
