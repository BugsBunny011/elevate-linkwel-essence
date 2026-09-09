import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { NoIndex, Logomark, LiftPassShell } from "@/components/liftpass/LiftPassChrome";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import loginBackground from "@/assets/liftpass-login-building.jpg";

const StaffAuth = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    if (mode === "signin") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      setBusy(false);
      if (error) return toast.error(error.message);
      navigate("/admin");
    } else {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/liftpass/login`,
          data: { name },
        },
      });
      setBusy(false);
      if (error) return toast.error(error.message);
      toast.success("Account created. An admin needs to grant you access.");
      setMode("signin");
    }
  };

  return (
    <LiftPassShell>
      <NoIndex title="LiftPass staff sign in" />
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-8 sm:justify-end sm:px-10 lg:px-20">
        <img
          src={loginBackground}
          alt="Modern elevator lobby"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover object-left"
        />
        <div className="absolute inset-0 bg-navy-dark/45 sm:bg-navy-dark/30" aria-hidden="true" />

        <div className="relative w-full max-w-sm rounded-lg border border-border/60 bg-card/95 p-6 shadow-2xl backdrop-blur-md sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <Logomark />
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">LiftPass</p>
              <h1 className="font-heading text-lg font-semibold">Staff access</h1>
            </div>
          </div>

          <form onSubmit={submit} className="space-y-4">
            {mode === "signup" && (
              <div>
                <Label htmlFor="name">Full name</Label>
                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
            )}
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
              />
            </div>
            <Button type="submit" className="w-full" disabled={busy}>
              {busy ? "Please wait..." : mode === "signin" ? "Sign in" : "Create account"}
            </Button>
          </form>

          <Button
            type="button"
            variant="link"
            onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
            className="mt-3 h-auto w-full text-xs text-muted-foreground"
          >
            {mode === "signin" ? "Need an account? Register" : "Already registered? Sign in"}
          </Button>
        </div>
      </div>
    </LiftPassShell>
  );
};

export default StaffAuth;
