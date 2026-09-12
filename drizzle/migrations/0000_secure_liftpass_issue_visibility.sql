ALTER TABLE public.audit_zones
  ADD COLUMN maintenance_completed boolean NOT NULL DEFAULT false,
  ADD COLUMN completed_at timestamptz;

ALTER TABLE public.service_visits
  ADD COLUMN maintenance_completed boolean NOT NULL DEFAULT false;

UPDATE public.audit_zones
SET maintenance_completed = true,
    completed_at = COALESCE(created_at, now());

UPDATE public.service_visits
SET maintenance_completed = true;

DROP POLICY IF EXISTS "Public can view audits" ON public.audit_zones;
DROP POLICY IF EXISTS "Public can view audit items" ON public.audit_checklist_items;
DROP POLICY IF EXISTS "Public can view visits" ON public.service_visits;

REVOKE SELECT ON public.audit_zones FROM anon;
REVOKE SELECT ON public.audit_checklist_items FROM anon;
REVOKE SELECT ON public.service_visits FROM anon;

CREATE POLICY "Staff can view audits"
ON public.audit_zones FOR SELECT TO authenticated
USING (public.is_staff(auth.uid()));

CREATE POLICY "Staff can view audit items"
ON public.audit_checklist_items FOR SELECT TO authenticated
USING (public.is_staff(auth.uid()));

CREATE POLICY "Staff can view visits"
ON public.service_visits FOR SELECT TO authenticated
USING (public.is_staff(auth.uid()));

CREATE OR REPLACE FUNCTION public.get_public_liftpass_audits(_lift_ids uuid[])
RETURNS TABLE (
  id uuid,
  lift_id uuid,
  zone public.audit_zone_name,
  audit_date date,
  audited_by text,
  voltage_readings jsonb,
  flagged_issues text[],
  issue_count bigint,
  maintenance_completed boolean,
  completed_at timestamptz,
  created_at timestamptz
)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT
    z.id,
    z.lift_id,
    z.zone,
    z.audit_date,
    CASE WHEN z.maintenance_completed THEN z.audited_by ELSE NULL END,
    CASE WHEN z.maintenance_completed THEN z.voltage_readings ELSE '{}'::jsonb END,
    CASE WHEN z.maintenance_completed THEN z.flagged_issues ELSE '{}'::text[] END,
    GREATEST(
      cardinality(z.flagged_issues),
      (SELECT count(*) FROM public.audit_checklist_items i
       WHERE i.audit_zone_id = z.id
         AND i.status IN ('needs_attention', 'not_working'))
    )::bigint,
    z.maintenance_completed,
    z.completed_at,
    z.created_at
  FROM public.audit_zones z
  WHERE z.lift_id = ANY(_lift_ids)
  ORDER BY z.audit_date DESC, z.created_at DESC;
$$;

CREATE OR REPLACE FUNCTION public.get_public_liftpass_audit_items(_audit_zone_ids uuid[])
RETURNS TABLE (
  id uuid,
  audit_zone_id uuid,
  item_name text,
  status public.checklist_status,
  notes text,
  created_at timestamptz
)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT i.id, i.audit_zone_id, i.item_name, i.status, i.notes, i.created_at
  FROM public.audit_checklist_items i
  JOIN public.audit_zones z ON z.id = i.audit_zone_id
  WHERE i.audit_zone_id = ANY(_audit_zone_ids)
    AND z.maintenance_completed = true
  ORDER BY i.created_at;
$$;

CREATE OR REPLACE FUNCTION public.get_public_liftpass_visits(_lift_ids uuid[])
RETURNS SETOF public.service_visits
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT v.*
  FROM public.service_visits v
  WHERE v.lift_id = ANY(_lift_ids)
    AND v.maintenance_completed = true
  ORDER BY v.visit_date DESC, v.created_at DESC;
$$;

REVOKE ALL ON FUNCTION public.get_public_liftpass_audits(uuid[]) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.get_public_liftpass_audit_items(uuid[]) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.get_public_liftpass_visits(uuid[]) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.get_public_liftpass_audits(uuid[]) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.get_public_liftpass_audit_items(uuid[]) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.get_public_liftpass_visits(uuid[]) TO anon, authenticated;