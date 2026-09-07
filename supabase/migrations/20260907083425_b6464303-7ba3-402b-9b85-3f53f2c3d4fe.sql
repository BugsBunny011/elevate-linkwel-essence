
CREATE TYPE public.app_role AS ENUM ('admin','technician');
CREATE TYPE public.lift_status AS ENUM ('operational','under_maintenance','out_of_service');
CREATE TYPE public.amc_type AS ENUM ('comprehensive','non_comprehensive');
CREATE TYPE public.audit_zone_name AS ENUM ('pit','machine_room','car_top','cabin','landing_doors');
CREATE TYPE public.checklist_status AS ENUM ('ok','needs_attention','not_working','not_applicable');
CREATE TYPE public.visit_type AS ENUM ('amc','guarantee','customer_call');

CREATE TABLE public.technicians (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  name text NOT NULL DEFAULT '',
  phone text,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.technicians TO authenticated;
GRANT ALL ON public.technicians TO service_role;
ALTER TABLE public.technicians ENABLE ROW LEVEL SECURITY;

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;

CREATE OR REPLACE FUNCTION public.is_staff(_user_id uuid)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id)
$$;

CREATE POLICY "Staff can view technician profiles" ON public.technicians FOR SELECT TO authenticated USING (public.is_staff(auth.uid()));
CREATE POLICY "Users insert own profile" ON public.technicians FOR INSERT TO authenticated WITH CHECK (auth.uid() = id);
CREATE POLICY "Users update own profile" ON public.technicians FOR UPDATE TO authenticated USING (auth.uid() = id) WITH CHECK (auth.uid() = id);

CREATE POLICY "Users view own roles" ON public.user_roles FOR SELECT TO authenticated USING (user_id = auth.uid() OR public.has_role(auth.uid(),'admin'));

CREATE TABLE public.sites (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  site_code text NOT NULL UNIQUE,
  name text NOT NULL,
  address text,
  city text,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.sites TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.sites TO authenticated;
GRANT ALL ON public.sites TO service_role;
ALTER TABLE public.sites ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can view sites" ON public.sites FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Admins manage sites" ON public.sites FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));

CREATE TABLE public.lifts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  site_id uuid NOT NULL REFERENCES public.sites(id) ON DELETE CASCADE,
  lift_no text NOT NULL,
  crm_no text, ged text, equipment_type text, customer_name text,
  site_contact_name text, site_contact_mobile text, key_location text,
  building_type text, customer_type text,
  lift_make text, maintained_by text,
  no_of_floors int, group_size text,
  controller text, floor_designation text, lift_type text,
  installation_year int, speed_mps numeric, capacity_kg int, capacity_persons int,
  drive_name text, drive_kw text, drive_input_voltage text, winding_unit_type text,
  hp text, kw text, amp text, rpm text,
  flywheel_available boolean DEFAULT false, rescue_handle boolean DEFAULT false,
  gear_name text, gear_ratio text, sheave_dia text, sheave_group text,
  rope_size text, no_of_ropes int, rope_type text, roping_type text,
  rescue_device_name text, rescue_device_status text,
  osg_rope_size text, osg_switch_status text, osg_electrical_trip_speed text, osg_mechanical_trip_speed text,
  status public.lift_status NOT NULL DEFAULT 'operational',
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX lifts_site_id_idx ON public.lifts(site_id);
GRANT SELECT ON public.lifts TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.lifts TO authenticated;
GRANT ALL ON public.lifts TO service_role;
ALTER TABLE public.lifts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can view lifts" ON public.lifts FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Admins manage lifts" ON public.lifts FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE POLICY "Staff update lift status" ON public.lifts FOR UPDATE TO authenticated USING (public.is_staff(auth.uid())) WITH CHECK (public.is_staff(auth.uid()));

CREATE TABLE public.amc_contracts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lift_id uuid NOT NULL REFERENCES public.lifts(id) ON DELETE CASCADE,
  contract_number text,
  start_date date,
  end_date date,
  amc_type public.amc_type NOT NULL DEFAULT 'comprehensive',
  renewal_contact text,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX amc_lift_idx ON public.amc_contracts(lift_id);
GRANT SELECT ON public.amc_contracts TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.amc_contracts TO authenticated;
GRANT ALL ON public.amc_contracts TO service_role;
ALTER TABLE public.amc_contracts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can view contracts" ON public.amc_contracts FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Admins manage contracts" ON public.amc_contracts FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));

CREATE TABLE public.audit_zones (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lift_id uuid NOT NULL REFERENCES public.lifts(id) ON DELETE CASCADE,
  zone public.audit_zone_name NOT NULL,
  audit_date date NOT NULL DEFAULT current_date,
  audited_by text,
  voltage_readings jsonb NOT NULL DEFAULT '{}'::jsonb,
  flagged_issues text[] NOT NULL DEFAULT '{}',
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX audit_zones_lift_idx ON public.audit_zones(lift_id);
GRANT SELECT ON public.audit_zones TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.audit_zones TO authenticated;
GRANT ALL ON public.audit_zones TO service_role;
ALTER TABLE public.audit_zones ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can view audits" ON public.audit_zones FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Staff create audits" ON public.audit_zones FOR INSERT TO authenticated WITH CHECK (public.is_staff(auth.uid()));
CREATE POLICY "Staff update audits" ON public.audit_zones FOR UPDATE TO authenticated USING (public.is_staff(auth.uid())) WITH CHECK (public.is_staff(auth.uid()));
CREATE POLICY "Admins delete audits" ON public.audit_zones FOR DELETE TO authenticated USING (public.has_role(auth.uid(),'admin'));

CREATE TABLE public.audit_checklist_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  audit_zone_id uuid NOT NULL REFERENCES public.audit_zones(id) ON DELETE CASCADE,
  item_name text NOT NULL,
  status public.checklist_status NOT NULL DEFAULT 'ok',
  notes text,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX audit_items_zone_idx ON public.audit_checklist_items(audit_zone_id);
GRANT SELECT ON public.audit_checklist_items TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.audit_checklist_items TO authenticated;
GRANT ALL ON public.audit_checklist_items TO service_role;
ALTER TABLE public.audit_checklist_items ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can view audit items" ON public.audit_checklist_items FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Staff create audit items" ON public.audit_checklist_items FOR INSERT TO authenticated WITH CHECK (public.is_staff(auth.uid()));
CREATE POLICY "Staff update audit items" ON public.audit_checklist_items FOR UPDATE TO authenticated USING (public.is_staff(auth.uid())) WITH CHECK (public.is_staff(auth.uid()));
CREATE POLICY "Admins delete audit items" ON public.audit_checklist_items FOR DELETE TO authenticated USING (public.has_role(auth.uid(),'admin'));

CREATE TABLE public.service_visits (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lift_id uuid NOT NULL REFERENCES public.lifts(id) ON DELETE CASCADE,
  serial_no text,
  visit_type public.visit_type NOT NULL DEFAULT 'amc',
  visit_date date NOT NULL DEFAULT current_date,
  in_time time, out_time time,
  complaint_number text,
  checklist jsonb NOT NULL DEFAULT '{}'::jsonb,
  breakdown_notes text,
  problem_reported text,
  action_taken text,
  customer_remarks text,
  received_amount numeric,
  engineer_name text,
  engineer_mobile text,
  next_due_date date,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX service_visits_lift_idx ON public.service_visits(lift_id);
GRANT SELECT ON public.service_visits TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.service_visits TO authenticated;
GRANT ALL ON public.service_visits TO service_role;
ALTER TABLE public.service_visits ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can view visits" ON public.service_visits FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Staff create visits" ON public.service_visits FOR INSERT TO authenticated WITH CHECK (public.is_staff(auth.uid()));
CREATE POLICY "Staff update visits" ON public.service_visits FOR UPDATE TO authenticated USING (public.is_staff(auth.uid())) WITH CHECK (public.is_staff(auth.uid()));
CREATE POLICY "Admins delete visits" ON public.service_visits FOR DELETE TO authenticated USING (public.has_role(auth.uid(),'admin'));

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  INSERT INTO public.technicians (id, name, phone)
  VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data->>'name',''), NEW.raw_user_meta_data->>'phone')
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;
CREATE TRIGGER on_auth_user_created AFTER INSERT ON auth.users FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
