REVOKE EXECUTE ON FUNCTION public.get_public_liftpass_visits(uuid[]) FROM anon, authenticated;
COMMENT ON FUNCTION public.get_public_liftpass_visits(uuid[]) IS 'DEPRECATED: customer-facing clients use get_public_liftpass_completed_visits to avoid exposing staff and billing fields';
CREATE OR REPLACE FUNCTION public.get_public_liftpass_completed_visits(_lift_ids uuid[])
RETURNS TABLE (id uuid, lift_id uuid, visit_date date, visit_type public.visit_type, checklist jsonb, problem_reported text, action_taken text, customer_remarks text, engineer_name text, in_time time, out_time time, next_due_date date)
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$
  SELECT v.id, v.lift_id, v.visit_date, v.visit_type, v.checklist, v.problem_reported, v.action_taken, v.customer_remarks, v.engineer_name, v.in_time, v.out_time, v.next_due_date
  FROM public.service_visits v
  WHERE v.lift_id = ANY(_lift_ids) AND v.maintenance_completed = true
  ORDER BY v.visit_date DESC, v.created_at DESC;
$$;
REVOKE ALL ON FUNCTION public.get_public_liftpass_completed_visits(uuid[]) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.get_public_liftpass_completed_visits(uuid[]) TO anon, authenticated;
CREATE OR REPLACE FUNCTION public.get_public_liftpass_audits(_lift_ids uuid[])
RETURNS TABLE (id uuid, lift_id uuid, zone public.audit_zone_name, audit_date date, audited_by text, voltage_readings jsonb, flagged_issues text[], issue_count bigint, maintenance_completed boolean, completed_at timestamptz, created_at timestamptz)
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$
  SELECT z.id, z.lift_id,
    CASE WHEN z.maintenance_completed THEN z.zone ELSE NULL END,
    CASE WHEN z.maintenance_completed THEN z.audit_date ELSE NULL END,
    CASE WHEN z.maintenance_completed THEN z.audited_by ELSE NULL END,
    CASE WHEN z.maintenance_completed THEN z.voltage_readings ELSE '{}'::jsonb END,
    CASE WHEN z.maintenance_completed THEN z.flagged_issues ELSE '{}'::text[] END,
    GREATEST(cardinality(z.flagged_issues), (SELECT count(*) FROM public.audit_checklist_items i WHERE i.audit_zone_id = z.id AND i.status IN ('needs_attention', 'not_working')))::bigint,
    z.maintenance_completed,
    CASE WHEN z.maintenance_completed THEN z.completed_at ELSE NULL END,
    CASE WHEN z.maintenance_completed THEN z.created_at ELSE NULL END
  FROM public.audit_zones z
  WHERE z.lift_id = ANY(_lift_ids)
  ORDER BY z.audit_date DESC, z.created_at DESC;
$$;