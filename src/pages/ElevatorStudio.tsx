import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

import wallStainless from "@/assets/elevator/wall-stainless.jpg";
import wallGold from "@/assets/elevator/wall-gold.jpg";
import wallWood from "@/assets/elevator/wall-wood.jpg";
import wallRoseGold from "@/assets/elevator/wall-rose-gold.jpg";
import ceilingRecessedPanel from "@/assets/elevator/ceiling-recessed-panel.jpg";
import ceilingRingDownlight from "@/assets/elevator/ceiling-ring-downlight.jpg";
import ceilingCoveLight from "@/assets/elevator/ceiling-cove-light.jpg";

type LightRegion = { top: string; left: string; width: string; height: string; radius?: string };

type WallFinish = {
  id: string;
  name: string;
  image: string;
  swatch: string;
  border?: boolean;
  // Default light-glow region when this wall is displayed (non-stainless walls)
  defaultLightRegion: LightRegion;
};

const WALL_FINISHES: WallFinish[] = [
  {
    id: "stainless",
    name: "Brushed Stainless Steel",
    image: wallStainless,
    swatch: "linear-gradient(135deg, #c8ccd1 0%, #9aa0a6 50%, #c8ccd1 100%)",
    defaultLightRegion: { top: "6%", left: "26%", width: "48%", height: "24%", radius: "8px" },
  },
  {
    id: "champagne-gold",
    name: "Champagne Gold",
    image: wallGold,
    swatch: "linear-gradient(135deg, #d4a857 0%, #b8893a 50%, #d4a857 100%)",
    defaultLightRegion: { top: "5%", left: "25%", width: "50%", height: "25%", radius: "8px" },
  },
  {
    id: "wood",
    name: "Wooden Panel",
    image: wallWood,
    swatch: "linear-gradient(135deg, #8b5a2b 0%, #5c3a1e 100%)",
    defaultLightRegion: { top: "5%", left: "25%", width: "50%", height: "25%", radius: "8px" },
  },
  {
    id: "rose-gold",
    name: "Rose Gold",
    image: wallRoseGold,
    swatch: "linear-gradient(135deg, #e8b4a0 0%, #c68372 50%, #e8b4a0 100%)",
    defaultLightRegion: { top: "6%", left: "26%", width: "48%", height: "24%", radius: "8px" },
  },
];

type CeilingLight = {
  id: string;
  name: string;
  image: string; // shown only when wall = stainless
  swatch: string;
  lightRegion: LightRegion;
};

const CEILING_LIGHTS: CeilingLight[] = [
  {
    id: "recessed-panel",
    name: "Recessed Square Panel",
    image: ceilingRecessedPanel,
    swatch: "linear-gradient(135deg, #f8f9fb 0%, #d8dde3 100%)",
    lightRegion: { top: "9%", left: "27%", width: "46%", height: "22%", radius: "6px" },
  },
  {
    id: "ring-downlight",
    name: "Circular Ring Downlight",
    image: ceilingRingDownlight,
    swatch: "radial-gradient(circle, #ffffff 30%, #b8bec7 70%)",
    lightRegion: { top: "5%", left: "22%", width: "56%", height: "32%", radius: "50%" },
  },
  {
    id: "cove-light",
    name: "Cove Light",
    image: ceilingCoveLight,
    swatch: "linear-gradient(135deg, #fff3d6 0%, #f0c987 100%)",
    lightRegion: { top: "0%", left: "18%", width: "64%", height: "36%", radius: "45%" },
  },
];

type LightColor = { id: string; name: string; swatch: string; color: string; opacity: number };

const LIGHT_COLORS: LightColor[] = [
  { id: "white", name: "White", swatch: "#ffffff", color: "#FFFFFF", opacity: 0 },
  { id: "natural-white", name: "Natural White", swatch: "#FFF4E0", color: "#FFF4E0", opacity: 0.35 },
  { id: "warm-white", name: "Warm White", swatch: "#FFD9A0", color: "#FFD9A0", opacity: 0.4 },
];

const ElevatorStudio = () => {
  const [wallId, setWallId] = useState("stainless");
  const [ceilingId, setCeilingId] = useState("recessed-panel");
  const [lightColorId, setLightColorId] = useState("white");
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", city: "" });

  const selectedWall = WALL_FINISHES.find((w) => w.id === wallId) ?? WALL_FINISHES[0];
  const selectedCeiling = CEILING_LIGHTS.find((c) => c.id === ceilingId) ?? CEILING_LIGHTS[0];
  const selectedLightColor = LIGHT_COLORS.find((l) => l.id === lightColorId) ?? LIGHT_COLORS[0];

  const isStainless = wallId === "stainless";
  const previewImage = isStainless ? selectedCeiling.image : selectedWall.image;
  const previewAlt = isStainless
    ? `${selectedWall.name} elevator cabin with ${selectedCeiling.name}`
    : `${selectedWall.name} elevator cabin`;
  const lightRegion = isStainless ? selectedCeiling.lightRegion : selectedWall.defaultLightRegion;

  const configuration = `Wall Finish: ${selectedWall.name} | Ceiling Light: ${selectedCeiling.name} | Light Color: ${selectedLightColor.name}`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("form-name", "elevator-design");
    formData.append("name", form.name);
    formData.append("phone", form.phone);
    formData.append("city", form.city);
    formData.append("configuration", configuration);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Elevator Studio | Design Your Cabin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <div className="grid lg:grid-cols-2 min-h-screen">
          {/* Left: Cabin Preview */}
          <div className="relative bg-black overflow-hidden h-[60vh] lg:h-screen lg:sticky lg:top-0">
            <img
              key={previewImage}
              src={previewImage}
              alt={previewAlt}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
            />
            {/* Light color tint overlay — positioned over glow area only */}
            {selectedLightColor.opacity > 0 && (
              <div
                aria-hidden
                className="absolute pointer-events-none transition-opacity duration-300"
                style={{
                  top: lightRegion.top,
                  left: lightRegion.left,
                  width: lightRegion.width,
                  height: lightRegion.height,
                  borderRadius: lightRegion.radius ?? "8px",
                  backgroundColor: selectedLightColor.color,
                  opacity: selectedLightColor.opacity,
                  mixBlendMode: "overlay",
                  filter: "blur(8px)",
                }}
              />
            )}
          </div>

          {/* Right: Configurator */}
          <div className="flex flex-col p-8 lg:p-12 gap-8">
            <header>
              <h1 className="font-heading text-3xl lg:text-4xl text-foreground">
                Elevator Studio
              </h1>
              <p className="text-muted-foreground mt-2 text-sm">
                Design your cabin and request a personalised quote.
              </p>
            </header>

            {/* STEP 1: Wall Finish */}
            <section>
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-xs font-semibold text-gold tracking-widest">STEP 1</span>
                <h2 className="font-heading text-xl">Wall Finish</h2>
              </div>

              <div className="grid grid-cols-4 gap-4">
                {WALL_FINISHES.map((w) => {
                  const active = w.id === wallId;
                  return (
                    <button
                      key={w.id}
                      type="button"
                      onClick={() => setWallId(w.id)}
                      className="flex flex-col items-center gap-2 group"
                      aria-label={w.name}
                      aria-pressed={active}
                    >
                      <span
                        className={cn(
                          "w-14 h-14 rounded-full transition-all duration-200",
                          active
                            ? "ring-2 ring-primary ring-offset-2 ring-offset-background scale-105"
                            : "ring-1 ring-border group-hover:scale-105"
                        )}
                        style={{ background: w.swatch }}
                      />
                      <span
                        className={cn(
                          "text-[11px] text-center leading-tight transition-colors",
                          active ? "text-foreground" : "text-muted-foreground"
                        )}
                      >
                        {w.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* STEP 2: Ceiling Light Style */}
            <section>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-xs font-semibold text-gold tracking-widest">STEP 2</span>
                <h2 className="font-heading text-xl">Ceiling Light Style</h2>
              </div>
              {!isStainless && (
                <p className="text-[11px] text-muted-foreground mb-3 italic">
                  Available with Brushed Stainless Steel for now.
                </p>
              )}

              <div className={cn("grid grid-cols-3 gap-4", !isStainless && "opacity-40 pointer-events-none")}>
                {CEILING_LIGHTS.map((c) => {
                  const active = c.id === ceilingId;
                  return (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setCeilingId(c.id)}
                      className="flex flex-col items-center gap-2 group"
                      aria-label={c.name}
                      aria-pressed={active}
                      disabled={!isStainless}
                    >
                      <span
                        className={cn(
                          "w-14 h-14 rounded-full transition-all duration-200",
                          active
                            ? "ring-2 ring-primary ring-offset-2 ring-offset-background scale-105"
                            : "ring-1 ring-border group-hover:scale-105"
                        )}
                        style={{ background: c.swatch }}
                      />
                      <span
                        className={cn(
                          "text-[11px] text-center leading-tight transition-colors",
                          active ? "text-foreground" : "text-muted-foreground"
                        )}
                      >
                        {c.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* STEP 3: Light Color */}
            <section>
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-xs font-semibold text-gold tracking-widest">STEP 3</span>
                <h2 className="font-heading text-xl">Light Color</h2>
              </div>

              <div className="grid grid-cols-3 gap-4 max-w-xs">
                {LIGHT_COLORS.map((l) => {
                  const active = l.id === lightColorId;
                  return (
                    <button
                      key={l.id}
                      type="button"
                      onClick={() => setLightColorId(l.id)}
                      className="flex flex-col items-center gap-2 group"
                      aria-label={l.name}
                      aria-pressed={active}
                    >
                      <span
                        className={cn(
                          "w-10 h-10 rounded-full transition-all duration-200",
                          active
                            ? "ring-2 ring-primary ring-offset-2 ring-offset-background scale-105"
                            : "ring-1 ring-border group-hover:scale-105"
                        )}
                        style={{ backgroundColor: l.swatch }}
                      />
                      <span
                        className={cn(
                          "text-[11px] text-center leading-tight transition-colors",
                          active ? "text-foreground" : "text-muted-foreground"
                        )}
                      >
                        {l.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>

            <div className="flex-1" />

            <div className="border-t border-border pt-6 space-y-4">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                  Your Design
                </div>
                <div className="font-heading text-base text-foreground leading-relaxed">
                  {configuration}
                </div>
              </div>

              <Dialog open={open} onOpenChange={(o) => { setOpen(o); if (!o) setSubmitted(false); }}>
                <DialogTrigger asChild>
                  <Button size="lg" className="w-full bg-gold text-navy hover:bg-gold-dark">
                    Request a Quote for This Design
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="font-heading">
                      {submitted ? "Request Received" : "Send Your Design Request"}
                    </DialogTitle>
                  </DialogHeader>
                  {submitted ? (
                    <p className="text-muted-foreground py-4">
                      Thank you! Our team will contact you within 24 hours with a
                      quote for your design.
                    </p>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <input type="hidden" name="form-name" value="elevator-design" />
                      <div>
                        <Label htmlFor="es-name">Name</Label>
                        <Input
                          id="es-name"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="es-phone">Phone Number</Label>
                        <Input
                          id="es-phone"
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="es-city">City</Label>
                        <Input
                          id="es-city"
                          required
                          value={form.city}
                          onChange={(e) => setForm({ ...form, city: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="es-config">Your Configuration</Label>
                        <Textarea
                          id="es-config"
                          readOnly
                          value={configuration}
                          className="bg-muted"
                        />
                      </div>
                      <Button type="submit" className="w-full bg-gold text-navy hover:bg-gold-dark">
                        Send My Design Request
                      </Button>
                    </form>
                  )}
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ElevatorStudio;
