import { useEffect, useState } from "react";
import { X, Send } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type Interest = "Crane" | "Lift" | "";

const QuickEnquiryModal = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState<Interest>("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string; interest?: string; form?: string }>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!success) return;
    const t = setTimeout(() => setSuccess(false), 4000);
    return () => clearTimeout(t);
  }, [success]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const validate = () => {
    const next: typeof errors = {};
    if (!name.trim()) next.name = "Please enter your name.";
    if (!/^[6-9]\d{9}$/.test(phone.replace(/\D/g, "").replace(/^91(?=\d{10}$)/, "")))
      next.phone = "Enter a valid 10 digit mobile number.";
    if (!interest) next.interest = "Please select one.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSend = async () => {
    if (!validate()) return;
    setSubmitting(true);
    setErrors({});
    try {
      const body = new URLSearchParams();
      body.append("form-name", "quick-enquiry");
      body.append("name", name);
      body.append("phone", phone);
      body.append("product_interest", interest);

      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!res.ok) throw new Error("failed");

      setOpen(false);
      setSuccess(true);
      setName("");
      setPhone("");
      setInterest("");
    } catch {
      setErrors({ form: "Could not send. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-sm border border-border bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow";

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-20 right-5 md:bottom-24 md:right-6 z-50 gold-gradient text-white font-body font-semibold text-xs md:text-sm px-4 md:px-5 py-2.5 md:py-3 rounded-sm uppercase tracking-wider shadow-lg hover:opacity-90 transition-opacity"
      >
        Get a Quote
      </button>

      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="fixed bottom-36 right-5 md:right-6 z-50 glass-card rounded-sm px-4 py-3 text-sm font-body text-foreground shadow-lg"
          >
            Thanks, we'll call you shortly.
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              role="dialog"
              aria-modal="true"
              aria-label="Quick enquiry"
              className="relative w-full max-w-md glass-card rounded-lg p-7 md:p-8"
            >
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={20} />
              </button>

              <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-6">Quick Enquiry</h2>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-body font-medium text-foreground mb-1.5">Name</label>
                  <input
                    type="text"
                    value={name}
                    maxLength={100}
                    onChange={(e) => setName(e.target.value)}
                    className={inputClass}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-xs font-body text-destructive mt-1.5">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-body font-medium text-foreground mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    inputMode="numeric"
                    value={phone}
                    maxLength={15}
                    onChange={(e) => setPhone(e.target.value)}
                    className={inputClass}
                    placeholder="98185 11177"
                  />
                  {errors.phone && <p className="text-xs font-body text-destructive mt-1.5">{errors.phone}</p>}
                </div>

                <div>
                  <span className="block text-sm font-body font-medium text-foreground mb-1.5">Interested In</span>
                  <div className="flex gap-3">
                    {(["Lift", "Crane"] as const).map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setInterest(opt)}
                        className={`flex-1 px-4 py-3 rounded-sm border font-body text-sm transition-colors ${
                          interest === opt
                            ? "border-accent bg-accent/10 text-accent font-semibold"
                            : "border-border text-muted-foreground hover:border-accent/50"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                  {errors.interest && <p className="text-xs font-body text-destructive mt-1.5">{errors.interest}</p>}
                </div>

                {errors.form && <p className="text-sm font-body text-destructive">{errors.form}</p>}

                <button
                  type="button"
                  onClick={handleSend}
                  disabled={submitting}
                  className="gold-gradient text-white font-body font-semibold px-8 py-3.5 rounded-sm tracking-wider uppercase text-sm hover:opacity-90 transition-opacity inline-flex items-center gap-2 w-full justify-center disabled:opacity-60"
                >
                  <Send size={16} /> {submitting ? "Sending..." : "Send Enquiry"}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default QuickEnquiryModal;
