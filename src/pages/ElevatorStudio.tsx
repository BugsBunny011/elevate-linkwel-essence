import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Check, DoorOpen, DoorClosed, Lightbulb, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import passengerImg from "@/assets/product-passenger-elevator.jpg";
import homeImg from "@/assets/product-home-elevator.jpg";
import capsuleImg from "@/assets/product-capsule-elevator.jpg";
import carImg from "@/assets/product-car-elevator.jpg";
import goodsImg from "@/assets/product-goods-elevator.jpg";
import hospitalImg from "@/assets/product-hospital-elevator.jpg";

type Option = { id: string; label: string; image?: string; swatch?: string };

const ELEVATOR_TYPES: Option[] = [
  { id: "passenger", label: "Passenger Elevator", image: passengerImg },
  { id: "home", label: "Home / Villa Elevator", image: homeImg },
  { id: "capsule", label: "Capsule / Glass Elevator", image: capsuleImg },
  { id: "car", label: "Car Elevator", image: carImg },
  { id: "goods", label: "Goods / Freight Elevator", image: goodsImg },
  { id: "hospital", label: "Hospital Elevator", image: hospitalImg },
];

const WALL_FINISHES: Option[] = [
  { id: "brushed", label: "Brushed Stainless Steel", swatch: "linear-gradient(135deg,#c8ccd1 0%,#9ba0a6 50%,#c8ccd1 100%)" },
  { id: "mirror", label: "Mirror Finish", swatch: "linear-gradient(135deg,#e8ecf1 0%,#ffffff 40%,#b8bec6 100%)" },
  { id: "matte", label: "Black Matte", swatch: "linear-gradient(135deg,#1a1a1a,#2a2a2a)" },
  { id: "champagne", label: "Champagne Gold", swatch: "linear-gradient(135deg,#d4a85a 0%,#f0d78c 50%,#b8902f 100%)" },
  { id: "wood", label: "Wooden Panel", swatch: "linear-gradient(135deg,#6b4423 0%,#a87148 40%,#7a4d28 100%)" },
  { id: "gloss", label: "White Gloss", swatch: "linear-gradient(135deg,#ffffff 0%,#f0f0f0 60%,#dcdcdc 100%)" },
];

const DOOR_STYLES = [
  { id: "glass", label: "Glass Door", Icon: DoorOpen },
  { id: "stainless", label: "Solid Stainless Door", Icon: DoorClosed },
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

const LIGHTING_COLORS: Option[] = [
  { id: "warm", label: "Warm White", swatch: "radial-gradient(circle,#fff2c2,#ffd97a)" },
  { id: "cool", label: "Cool White", swatch: "radial-gradient(circle,#ffffff,#cfe8ff)" },
  { id: "amber", label: "Soft Amber", swatch: "radial-gradient(circle,#ffd4a0,#e89a4a)" },
  { id: "rgb", label: "RGB Mood", swatch: "conic-gradient(from 0deg,#ff5e7a,#ffa84a,#ffe14a,#7af0a0,#5ec8ff,#b478ff,#ff5e7a)" },
];

const ElevatorStudio = () => {
  const [elevatorType, setElevatorType] = useState(ELEVATOR_TYPES[0]);
  const [wallFinish, setWallFinish] = useState<Option | null>(null);
  const [doorStyle, setDoorStyle] = useState<typeof DOOR_STYLES[number] | null>(null);
  const [lighting, setLighting] = useState<Option | null>(null);
  const [lightingColor, setLightingColor] = useState<Option | null>(null);

  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", city: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const summary = useMemo(() => {
    const parts = [
      elevatorType?.label,
      wallFinish?.label,
      doorStyle?.label,
      lighting?.label && lightingColor?.label
        ? `${lighting.label} (${lightingColor.label})`
        : lighting?.label || lightingColor?.label,
    ].filter(Boolean);
    return parts.join(" · ");
  }, [elevatorType, wallFinish, doorStyle, lighting, lightingColor]);

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
                <motion.div
                  key={elevatorType.id}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative aspect-[4/5] w-full"
                >
                  <img
                    src={elevatorType.image}
                    alt={elevatorType.label}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-gold text-xs tracking-[0.2em] uppercase mb-1">Current selection</p>
                    <h3 className="text-2xl font-heading font-bold text-gold-light">{elevatorType.label}</h3>
                  </div>
                </motion.div>

                {/* Mini swatches preview */}
                <div className="p-4 border-t border-gold/20 flex flex-wrap gap-2 items-center bg-background/40">
                  {wallFinish && (
                    <span
                      className="w-8 h-8 rounded-full border border-gold/40 shadow"
                      style={{ background: wallFinish.swatch }}
                      title={wallFinish.label}
                    />
                  )}
                  {lightingColor && (
                    <span
                      className="w-8 h-8 rounded-full border border-gold/40 shadow"
                      style={{ background: lightingColor.swatch }}
                      title={lightingColor.label}
                    />
                  )}
                  {doorStyle && (
                    <span className="px-3 py-1 text-xs rounded-full border border-gold/40 text-gold-light/80 font-body">
                      {doorStyle.label}
                    </span>
                  )}
                  {lighting && (
                    <span className="px-3 py-1 text-xs rounded-full border border-gold/40 text-gold-light/80 font-body">
                      {lighting.label}
                    </span>
                  )}
                  {!wallFinish && !lightingColor && !doorStyle && !lighting && (
                    <span className="text-gold-light/40 text-xs font-body">Make selections to preview your design</span>
                  )}
                </div>
              </div>
            </div>

            {/* RIGHT — Options */}
            <div className="space-y-10">
              {/* Step 1 */}
              <div>
                {sectionTitle(1, "Choose Elevator Type")}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {ELEVATOR_TYPES.map((t) => {
                    const active = elevatorType.id === t.id;
                    return (
                      <button
                        key={t.id}
                        onClick={() => setElevatorType(t)}
                        className={`group relative rounded-xl overflow-hidden border-2 transition-all ${
                          active
                            ? "border-gold ring-2 ring-gold/40 shadow-lg shadow-gold/20"
                            : "border-gold/15 hover:border-gold/50"
                        }`}
                      >
                        <div className="aspect-square overflow-hidden">
                          <img src={t.image} alt={t.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-2.5 text-left">
                          <p className="text-xs font-body font-medium text-gold-light leading-tight">{t.label}</p>
                        </div>
                        {active && (
                          <span className="absolute top-2 right-2 w-6 h-6 rounded-full bg-gold text-background flex items-center justify-center">
                            <Check size={14} />
                          </span>
                        )}
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
                      <button
                        key={f.id}
                        onClick={() => setWallFinish(f)}
                        className="flex flex-col items-center gap-1.5 group"
                      >
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
                          active
                            ? "border-gold bg-gold/5 ring-2 ring-gold/30"
                            : "border-gold/15 hover:border-gold/50"
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

              {/* Step 4 */}
              <div>
                {sectionTitle(4, "Lighting Preference")}
                <div className="grid grid-cols-2 gap-3">
                  {LIGHTING_TYPES.map((l) => {
                    const active = lighting?.id === l.id;
                    return (
                      <button
                        key={l.id}
                        onClick={() => setLighting(l)}
                        className={`text-left p-4 rounded-xl border-2 transition-all ${
                          active
                            ? "border-gold bg-gold/5 ring-2 ring-gold/30"
                            : "border-gold/15 hover:border-gold/50"
                        }`}
                      >
                        <Lightbulb className={`mb-2 ${active ? "text-gold" : "text-gold-light/60"}`} size={20} />
                        <p className={`font-body font-medium text-sm ${active ? "text-gold-light" : "text-gold-light/80"}`}>
                          {l.label}
                        </p>
                        <p className="text-xs text-gold-light/50 font-body mt-1 leading-snug">
                          {LIGHTING_DESC[l.id]}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 5 */}
              <div>
                {sectionTitle(5, "Lighting Color")}
                <div className="flex flex-wrap gap-4">
                  {LIGHTING_COLORS.map((c) => {
                    const active = lightingColor?.id === c.id;
                    return (
                      <button
                        key={c.id}
                        onClick={() => setLightingColor(c)}
                        className="flex flex-col items-center gap-1.5 group"
                      >
                        <span
                          className={`w-12 h-12 rounded-full border transition-all ${
                            active
                              ? "ring-2 ring-gold ring-offset-2 ring-offset-background border-gold scale-110"
                              : "border-gold/30 group-hover:border-gold/60"
                          }`}
                          style={{ background: c.swatch }}
                        />
                        <span className={`text-xs font-body ${active ? "text-gold" : "text-gold-light/60"}`}>
                          {c.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Summary + CTA */}
              <div className="glass-card rounded-xl border border-gold/30 p-5 md:p-6 mt-2">
                <p className="text-[10px] tracking-[0.25em] uppercase text-gold font-body mb-2">
                  Your design
                </p>
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
                <DialogTitle className="font-heading text-xl text-gold-light">
                  Request Your Custom Quote
                </DialogTitle>
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
                  <Textarea id="es-config" readOnly value={summary} className="mt-1.5 bg-muted/30 text-sm" rows={3} />
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
