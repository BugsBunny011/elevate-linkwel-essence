import { ReactNode } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { useStaffAuth, type StaffRole } from "@/hooks/useStaffAuth";
import { NoIndex, LiftPassShell } from "@/components/liftpass/LiftPassChrome";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

interface Props {
  role: StaffRole;
  children: ReactNode;
}

const RequireRole = ({ role, children }: Props) => {
  const { session, roles, loading } = useStaffAuth();
  const location = useLocation();

  if (loading) {
    return (
      <LiftPassShell>
        <NoIndex title="LiftPass" />
        <p className="p-10 text-center text-sm text-muted-foreground">Checking access...</p>
      </LiftPassShell>
    );
  }

  if (!session) return <Navigate to="/liftpass/login" state={{ from: location.pathname }} replace />;

  const allowed = roles.includes(role) || roles.includes("admin");
  if (!allowed) {
    return (
      <LiftPassShell>
        <NoIndex title="LiftPass" />
        <div className="mx-auto max-w-md p-10 text-center">
          <h1 className="font-heading text-lg font-semibold">Access pending</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Your account is signed in but has no LiftPass role yet. Ask an administrator to grant you access.
          </p>
          <div className="mt-5 flex justify-center gap-3">
            <Button variant="outline" onClick={() => supabase.auth.signOut()}>
              Sign out
            </Button>
            <Button asChild variant="ghost">
              <Link to="/">Back to website</Link>
            </Button>
          </div>
        </div>
      </LiftPassShell>
    );
  }

  return <>{children}</>;
};

export default RequireRole;
