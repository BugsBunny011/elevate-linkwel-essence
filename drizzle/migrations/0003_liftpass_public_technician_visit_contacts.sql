CREATE OR REPLACE FUNCTION public.get_public_liftpass_visit_contacts(_lift_ids uuid[])
RETURNS TABLE(id uuid, lift_id uuid, visit_date date, engineer_name text, engineer_mobile text)
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$
  SELECT v.id, v.lift_id, v.visit_date, v.engineer_name, v.engineer_mobile
  FROM public.service_visits v
  WHERE v.lift_id = ANY(_lift_ids) AND v.maintenance_completed = true
  ORDER BY v.visit_date DESC, v.created_at DESC;
$$;
REVOKE ALL ON FUNCTION public.get_public_liftpass_visit_contacts(uuid[]) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.get_public_liftpass_visit_contacts(uuid[]) TO anon, authenticated;
COMMENT ON FUNCTION public.get_public_liftpass_visit_contacts(uuid[]) IS 'Public QR page: completed visit date and technician contact only; never returns checklists or repair details';