import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { NoIndex, Logomark, LiftPassShell } from "@/components/liftpass/LiftPassChrome";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import loginBackground from "@/assets/liftpass-login-building.jpg";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);
  const [checking, setChecking] = useState(true);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Keep the recovery marker even if the auth client consumes the URL fragment.
    const recoveryLink = new URLSearchParams(window.location.hash.slice(1)).get("type") === "recovery";
    let active = true;
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!active) return;
      if (event === "PASSWORD_RECOVERY") {
        setReady(true);
        setChecking(false);
      } else if (event === "SIGNED_IN" && recoveryLink && session) {
        setReady(true);
        setChecking(false);
      }
    });

    // A returning visitor might have an expired link or no recovery session.
    void supabase.auth.getSession().then(({ data: { session } }) => {
      if (!active) return;
      if (recoveryLink && session) setReady(true);
      setChecking(false);
    });
    return () => { active = false; subscription.unsubscribe(); };
  }, []);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (password !== confirmPassword) return setError("Passwords do not match.");
    setBusy(true);
    setError("");
    const { error: updateError } = await supabase.auth.updateUser({ password });
    setBusy(false);
    if (updateError) return setError(updateError.message);
    navigate("/liftpass/login", { replace: true, state: { passwordReset: true } });
  };

  return (
    <LiftPassShell>
      <NoIndex title="Reset LiftPass password" />
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-8 sm:justify-end sm:px-10 lg:px-20">
        <img src={loginBackground} alt="Modern elevator lobby" width={1920} height={1280} className="absolute inset-0 h-full w-full object-cover object-left" />
        <div className="absolute inset-0 bg-navy-dark/45 sm:bg-navy-dark/30" aria-hidden="true" />
        <div className="relative w-full max-w-sm rounded-lg border border-border/60 bg-card/95 p-6 shadow-2xl backdrop-blur-md sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <Logomark />
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">LiftPass</p>
              <h1 className="font-heading text-lg font-semibold">Set a new password</h1>
            </div>
          </div>
          {checking ? <p className="text-sm text-muted-foreground">Checking reset link...</p> : ready ? (
            <form onSubmit={submit} className="space-y-4">
              <div>
                <Label htmlFor="new-password">New password</Label>
                <Input id="new-password" type="password" autoComplete="new-password" minLength={6} required value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div>
                <Label htmlFor="confirm-password">Confirm new password</Label>
                <Input id="confirm-password" type="password" autoComplete="new-password" minLength={6} required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              </div>
              {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
              <Button type="submit" className="w-full" disabled={busy}>{busy ? "Saving..." : "Save new password"}</Button>
            </form>
          ) : <p role="alert" className="text-sm text-muted-foreground">This reset link is invalid or expired. Request a new one from the sign-in page.</p>}
          <Button asChild type="button" variant="link" className="mt-3 h-auto w-full text-xs text-muted-foreground"><Link to="/liftpass/login">Back to sign in</Link></Button>
        </div>
      </div>
    </LiftPassShell>
  );
};

export default ResetPassword;