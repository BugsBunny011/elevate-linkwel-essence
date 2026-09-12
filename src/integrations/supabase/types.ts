export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      amc_contracts: {
        Row: {
          amc_type: Database["public"]["Enums"]["amc_type"]
          contract_number: string | null
          created_at: string
          end_date: string | null
          id: string
          lift_id: string
          renewal_contact: string | null
          start_date: string | null
        }
        Insert: {
          amc_type?: Database["public"]["Enums"]["amc_type"]
          contract_number?: string | null
          created_at?: string
          end_date?: string | null
          id?: string
          lift_id: string
          renewal_contact?: string | null
          start_date?: string | null
        }
        Update: {
          amc_type?: Database["public"]["Enums"]["amc_type"]
          contract_number?: string | null
          created_at?: string
          end_date?: string | null
          id?: string
          lift_id?: string
          renewal_contact?: string | null
          start_date?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "amc_contracts_lift_id_fkey"
            columns: ["lift_id"]
            isOneToOne: false
            referencedRelation: "lifts"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_checklist_items: {
        Row: {
          audit_zone_id: string
          created_at: string
          id: string
          item_name: string
          notes: string | null
          status: Database["public"]["Enums"]["checklist_status"]
        }
        Insert: {
          audit_zone_id: string
          created_at?: string
          id?: string
          item_name: string
          notes?: string | null
          status?: Database["public"]["Enums"]["checklist_status"]
        }
        Update: {
          audit_zone_id?: string
          created_at?: string
          id?: string
          item_name?: string
          notes?: string | null
          status?: Database["public"]["Enums"]["checklist_status"]
        }
        Relationships: [
          {
            foreignKeyName: "audit_checklist_items_audit_zone_id_fkey"
            columns: ["audit_zone_id"]
            isOneToOne: false
            referencedRelation: "audit_zones"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_zones: {
        Row: {
          audit_date: string
          audited_by: string | null
          completed_at: string | null
          created_at: string
          flagged_issues: string[]
          id: string
          lift_id: string
          maintenance_completed: boolean
          voltage_readings: Json
          zone: Database["public"]["Enums"]["audit_zone_name"]
        }
        Insert: {
          audit_date?: string
          audited_by?: string | null
          completed_at?: string | null
          created_at?: string
          flagged_issues?: string[]
          id?: string
          lift_id: string
          maintenance_completed?: boolean
          voltage_readings?: Json
          zone: Database["public"]["Enums"]["audit_zone_name"]
        }
        Update: {
          audit_date?: string
          audited_by?: string | null
          completed_at?: string | null
          created_at?: string
          flagged_issues?: string[]
          id?: string
          lift_id?: string
          maintenance_completed?: boolean
          voltage_readings?: Json
          zone?: Database["public"]["Enums"]["audit_zone_name"]
        }
        Relationships: [
          {
            foreignKeyName: "audit_zones_lift_id_fkey"
            columns: ["lift_id"]
            isOneToOne: false
            referencedRelation: "lifts"
            referencedColumns: ["id"]
          },
        ]
      }
      lifts: {
        Row: {
          amp: string | null
          building_type: string | null
          capacity_kg: number | null
          capacity_persons: number | null
          controller: string | null
          created_at: string
          crm_no: string | null
          customer_name: string | null
          customer_type: string | null
          drive_input_voltage: string | null
          drive_kw: string | null
          drive_name: string | null
          equipment_type: string | null
          floor_designation: string | null
          flywheel_available: boolean | null
          gear_name: string | null
          gear_ratio: string | null
          ged: string | null
          group_size: string | null
          hp: string | null
          id: string
          installation_year: number | null
          key_location: string | null
          kw: string | null
          lift_make: string | null
          lift_no: string
          lift_type: string | null
          maintained_by: string | null
          no_of_floors: number | null
          no_of_ropes: number | null
          osg_electrical_trip_speed: string | null
          osg_mechanical_trip_speed: string | null
          osg_rope_size: string | null
          osg_switch_status: string | null
          rescue_device_name: string | null
          rescue_device_status: string | null
          rescue_handle: boolean | null
          rope_size: string | null
          rope_type: string | null
          roping_type: string | null
          rpm: string | null
          sheave_dia: string | null
          sheave_group: string | null
          site_contact_mobile: string | null
          site_contact_name: string | null
          site_id: string
          speed_mps: number | null
          status: Database["public"]["Enums"]["lift_status"]
          winding_unit_type: string | null
        }
        Insert: {
          amp?: string | null
          building_type?: string | null
          capacity_kg?: number | null
          capacity_persons?: number | null
          controller?: string | null
          created_at?: string
          crm_no?: string | null
          customer_name?: string | null
          customer_type?: string | null
          drive_input_voltage?: string | null
          drive_kw?: string | null
          drive_name?: string | null
          equipment_type?: string | null
          floor_designation?: string | null
          flywheel_available?: boolean | null
          gear_name?: string | null
          gear_ratio?: string | null
          ged?: string | null
          group_size?: string | null
          hp?: string | null
          id?: string
          installation_year?: number | null
          key_location?: string | null
          kw?: string | null
          lift_make?: string | null
          lift_no: string
          lift_type?: string | null
          maintained_by?: string | null
          no_of_floors?: number | null
          no_of_ropes?: number | null
          osg_electrical_trip_speed?: string | null
          osg_mechanical_trip_speed?: string | null
          osg_rope_size?: string | null
          osg_switch_status?: string | null
          rescue_device_name?: string | null
          rescue_device_status?: string | null
          rescue_handle?: boolean | null
          rope_size?: string | null
          rope_type?: string | null
          roping_type?: string | null
          rpm?: string | null
          sheave_dia?: string | null
          sheave_group?: string | null
          site_contact_mobile?: string | null
          site_contact_name?: string | null
          site_id: string
          speed_mps?: number | null
          status?: Database["public"]["Enums"]["lift_status"]
          winding_unit_type?: string | null
        }
        Update: {
          amp?: string | null
          building_type?: string | null
          capacity_kg?: number | null
          capacity_persons?: number | null
          controller?: string | null
          created_at?: string
          crm_no?: string | null
          customer_name?: string | null
          customer_type?: string | null
          drive_input_voltage?: string | null
          drive_kw?: string | null
          drive_name?: string | null
          equipment_type?: string | null
          floor_designation?: string | null
          flywheel_available?: boolean | null
          gear_name?: string | null
          gear_ratio?: string | null
          ged?: string | null
          group_size?: string | null
          hp?: string | null
          id?: string
          installation_year?: number | null
          key_location?: string | null
          kw?: string | null
          lift_make?: string | null
          lift_no?: string
          lift_type?: string | null
          maintained_by?: string | null
          no_of_floors?: number | null
          no_of_ropes?: number | null
          osg_electrical_trip_speed?: string | null
          osg_mechanical_trip_speed?: string | null
          osg_rope_size?: string | null
          osg_switch_status?: string | null
          rescue_device_name?: string | null
          rescue_device_status?: string | null
          rescue_handle?: boolean | null
          rope_size?: string | null
          rope_type?: string | null
          roping_type?: string | null
          rpm?: string | null
          sheave_dia?: string | null
          sheave_group?: string | null
          site_contact_mobile?: string | null
          site_contact_name?: string | null
          site_id?: string
          speed_mps?: number | null
          status?: Database["public"]["Enums"]["lift_status"]
          winding_unit_type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lifts_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "sites"
            referencedColumns: ["id"]
          },
        ]
      }
      service_visits: {
        Row: {
          action_taken: string | null
          breakdown_notes: string | null
          checklist: Json
          complaint_number: string | null
          created_at: string
          customer_remarks: string | null
          engineer_mobile: string | null
          engineer_name: string | null
          id: string
          in_time: string | null
          lift_id: string
          maintenance_completed: boolean
          next_due_date: string | null
          out_time: string | null
          problem_reported: string | null
          received_amount: number | null
          serial_no: string | null
          visit_date: string
          visit_type: Database["public"]["Enums"]["visit_type"]
        }
        Insert: {
          action_taken?: string | null
          breakdown_notes?: string | null
          checklist?: Json
          complaint_number?: string | null
          created_at?: string
          customer_remarks?: string | null
          engineer_mobile?: string | null
          engineer_name?: string | null
          id?: string
          in_time?: string | null
          lift_id: string
          maintenance_completed?: boolean
          next_due_date?: string | null
          out_time?: string | null
          problem_reported?: string | null
          received_amount?: number | null
          serial_no?: string | null
          visit_date?: string
          visit_type?: Database["public"]["Enums"]["visit_type"]
        }
        Update: {
          action_taken?: string | null
          breakdown_notes?: string | null
          checklist?: Json
          complaint_number?: string | null
          created_at?: string
          customer_remarks?: string | null
          engineer_mobile?: string | null
          engineer_name?: string | null
          id?: string
          in_time?: string | null
          lift_id?: string
          maintenance_completed?: boolean
          next_due_date?: string | null
          out_time?: string | null
          problem_reported?: string | null
          received_amount?: number | null
          serial_no?: string | null
          visit_date?: string
          visit_type?: Database["public"]["Enums"]["visit_type"]
        }
        Relationships: [
          {
            foreignKeyName: "service_visits_lift_id_fkey"
            columns: ["lift_id"]
            isOneToOne: false
            referencedRelation: "lifts"
            referencedColumns: ["id"]
          },
        ]
      }
      sites: {
        Row: {
          address: string | null
          city: string | null
          created_at: string
          id: string
          name: string
          site_code: string
        }
        Insert: {
          address?: string | null
          city?: string | null
          created_at?: string
          id?: string
          name: string
          site_code: string
        }
        Update: {
          address?: string | null
          city?: string | null
          created_at?: string
          id?: string
          name?: string
          site_code?: string
        }
        Relationships: []
      }
      technicians: {
        Row: {
          created_at: string
          id: string
          name: string
          phone: string | null
        }
        Insert: {
          created_at?: string
          id: string
          name?: string
          phone?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          phone?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_public_liftpass_audit_items: {
        Args: { _audit_zone_ids: string[] }
        Returns: {
          audit_zone_id: string
          created_at: string
          id: string
          item_name: string
          notes: string
          status: Database["public"]["Enums"]["checklist_status"]
        }[]
      }
      get_public_liftpass_audits: {
        Args: { _lift_ids: string[] }
        Returns: {
          audit_date: string
          audited_by: string
          completed_at: string
          created_at: string
          flagged_issues: string[]
          id: string
          issue_count: number
          lift_id: string
          maintenance_completed: boolean
          voltage_readings: Json
          zone: Database["public"]["Enums"]["audit_zone_name"]
        }[]
      }
      get_public_liftpass_visits: {
        Args: { _lift_ids: string[] }
        Returns: {
          action_taken: string | null
          breakdown_notes: string | null
          checklist: Json
          complaint_number: string | null
          created_at: string
          customer_remarks: string | null
          engineer_mobile: string | null
          engineer_name: string | null
          id: string
          in_time: string | null
          lift_id: string
          maintenance_completed: boolean
          next_due_date: string | null
          out_time: string | null
          problem_reported: string | null
          received_amount: number | null
          serial_no: string | null
          visit_date: string
          visit_type: Database["public"]["Enums"]["visit_type"]
        }[]
        SetofOptions: {
          from: "*"
          to: "service_visits"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      is_staff: { Args: { _user_id: string }; Returns: boolean }
    }
    Enums: {
      amc_type: "comprehensive" | "non_comprehensive"
      app_role: "admin" | "technician"
      audit_zone_name:
        | "pit"
        | "machine_room"
        | "car_top"
        | "cabin"
        | "landing_doors"
      checklist_status:
        | "ok"
        | "needs_attention"
        | "not_working"
        | "not_applicable"
      lift_status: "operational" | "under_maintenance" | "out_of_service"
      visit_type: "amc" | "guarantee" | "customer_call"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      amc_type: ["comprehensive", "non_comprehensive"],
      app_role: ["admin", "technician"],
      audit_zone_name: [
        "pit",
        "machine_room",
        "car_top",
        "cabin",
        "landing_doors",
      ],
      checklist_status: [
        "ok",
        "needs_attention",
        "not_working",
        "not_applicable",
      ],
      lift_status: ["operational", "under_maintenance", "out_of_service"],
      visit_type: ["amc", "guarantee", "customer_call"],
    },
  },
} as const
