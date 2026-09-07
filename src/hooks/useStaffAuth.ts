import { useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

export type StaffRole = "admin" | "technician";

export interface StaffAuth {
  session: Session | null;
  roles: StaffRole[];
  loading: boolean;
  isAdmin: boolean;
  isTechnician: boolean;
}

/** Session + role state for the LiftPass staff areas. */
export const useStaffAuth = (): StaffAuth => {
  const [session, setSession] = useState<Session | null>(null);
  const [roles, setRoles] = useState<StaffRole[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_event, next) => {
      setSession(next);
    });
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session?.user) {
      setRoles([]);
      return;
    }
    let cancelled = false;
    supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", session.user.id)
      .then(({ data }) => {
        if (!cancelled) setRoles((data ?? []).map((r) => r.role as StaffRole));
      });
    return () => {
      cancelled = true;
    };
  }, [session]);

  return {
    session,
    roles,
    loading,
    isAdmin: roles.includes("admin"),
    isTechnician: roles.includes("technician"),
  };
};
