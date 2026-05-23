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
import wallBlack from "@/assets/elevator/wall-black.jpg";
import wallMirror from "@/assets/elevator/wall-mirror.jpg";
import wallWhite from "@/assets/elevator/wall-white.jpg";

type WallFinish = {
  id: string;
  name: string;
  image: string;
  swatch: string;
  border?: boolean;
};

const WALL_FINISHES: WallFinish[] = [
  {
    id: "stainless",
    name: "Brushed Stainless Steel",
    image: wallStainless,
    swatch: "linear-gradient(135deg, #c8ccd1 0%, #9aa0a6 50%, #c8ccd1 100%)",
  },
  {
    id: "gold",
    name: "Champagne Gold",
    image: wallGold,
    swatch: "linear-gradient(135deg, #d4a857 0%, #b8893a 50%, #d4a857 100%)",
  },
  {
    id: "wood",
    name: "Wooden Panel",
    image: wallWood,
    swatch: "linear-gradient(135deg, #8b5a2b 0%, #5c3a1e 100%)",
  },
  {
    id: "black",
    name: "Black Matte",
    image: wallBlack,
    swatch: "#111111",
  },
  {
    id: "mirror",
    name: "Mirror Finish",
    image: wallMirror,
    swatch: "linear-gradient(135deg, #f5f7fa 0%, #b8bec7 40%, #ffffff 70%, #9aa0a6 100%)",
  },
  {
    id: "white",
    name: "White Gloss",
    image: wallWhite,
    swatch: "#ffffff",
    border: true,
  },
];

const ElevatorStudio = () => {
  const [wallId, setWallId] = useState<string>("stainless");
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", city: "" });

  const selected = WALL_FINISHES.find((w) => w.id === wallId) ?? WALL_FINISHES[0];
  const configuration = `Wall Finish: ${selected.name}`;

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
          {/* Left: Cabin Image */}
          <div className="relative bg-black overflow-hidden h-[60vh] lg:h-screen lg:sticky lg:top-0">
            {WALL_FINISHES.map((w) => (
              <img
                key={w.id}
                src={w.image}
                alt={`${w.name} elevator cabin`}
                className={cn(
                  "absolute inset-0 w-full h-full object-cover transition-opacity duration-300",
                  w.id === wallId ? "opacity-100" : "opacity-0"
                )}
              />
            ))}
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

            <section>
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-xs font-semibold text-gold tracking-widest">
                  STEP 1
                </span>
                <h2 className="font-heading text-xl">Wall Finish</h2>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
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
                            : "ring-1 ring-border group-hover:scale-105",
                          w.border && !active && "ring-border"
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

            <div className="flex-1" />

            <div className="border-t border-border pt-6 space-y-4">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                  Your Design
                </div>
                <div className="font-heading text-lg text-foreground">
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
