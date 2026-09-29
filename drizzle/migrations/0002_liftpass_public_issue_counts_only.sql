CREATE OR REPLACE FUNCTION public.get_public_liftpass_issue_counts(_lift_ids uuid[])
RETURNS TABLE(lift_id uuid, issue_count bigint)
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$
  SELECT z.lift_id,
    SUM(GREATEST(cardinality(z.flagged_issues),
      (SELECT count(*) FROM public.audit_checklist_items i
       WHERE i.audit_zone_id = z.id AND i.status IN ('needs_attention', 'not_working'))))::bigint AS issue_count
  FROM public.audit_zones z
  WHERE z.lift_id = ANY(_lift_ids)
  GROUP BY z.lift_id;
$$;
REVOKE ALL ON FUNCTION public.get_public_liftpass_issue_counts(uuid[]) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.get_public_liftpass_issue_counts(uuid[]) TO anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.get_public_liftpass_audits(uuid[]) FROM anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.get_public_liftpass_audit_items(uuid[]) FROM anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.get_public_liftpass_completed_visits(uuid[]) FROM anon, authenticated;
COMMENT ON FUNCTION public.get_public_liftpass_audits(uuid[]) IS 'DEPRECATED: public QR pages show issue counts only; detailed audit results are private to staff';
COMMENT ON FUNCTION public.get_public_liftpass_audit_items(uuid[]) IS 'DEPRECATED: checklist results are private to staff';
COMMENT ON FUNCTION public.get_public_liftpass_completed_visits(uuid[]) IS 'DEPRECATED: service details are private to staff on public QR pages';