export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.12 (cd3cf9e)"
  }
  public: {
    Tables: {
      activities: {
        Row: {
          activity_data: Json | null
          created_at: string
          id: string
          lead_id: string | null
          source: string | null
          type: string
          visitor_id: string | null
        }
        Insert: {
          activity_data?: Json | null
          created_at?: string
          id?: string
          lead_id?: string | null
          source?: string | null
          type: string
          visitor_id?: string | null
        }
        Update: {
          activity_data?: Json | null
          created_at?: string
          id?: string
          lead_id?: string | null
          source?: string | null
          type?: string
          visitor_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "activities_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "activities_visitor_id_fkey"
            columns: ["visitor_id"]
            isOneToOne: false
            referencedRelation: "website_visitors"
            referencedColumns: ["id"]
          },
        ]
      }
      cms_settings: {
        Row: {
          description: string | null
          id: string
          key: string
          updated_at: string
          updated_by: string | null
          value: Json
        }
        Insert: {
          description?: string | null
          id?: string
          key: string
          updated_at?: string
          updated_by?: string | null
          value: Json
        }
        Update: {
          description?: string | null
          id?: string
          key?: string
          updated_at?: string
          updated_by?: string | null
          value?: Json
        }
        Relationships: []
      }
      content_analytics: {
        Row: {
          avg_time_on_page: number | null
          bounce_rate: number | null
          content_item_id: string | null
          conversion_rate: number | null
          created_at: string
          date: string
          id: string
          leads_generated: number | null
          page_url: string
          unique_views: number | null
          views: number | null
        }
        Insert: {
          avg_time_on_page?: number | null
          bounce_rate?: number | null
          content_item_id?: string | null
          conversion_rate?: number | null
          created_at?: string
          date?: string
          id?: string
          leads_generated?: number | null
          page_url: string
          unique_views?: number | null
          views?: number | null
        }
        Update: {
          avg_time_on_page?: number | null
          bounce_rate?: number | null
          content_item_id?: string | null
          conversion_rate?: number | null
          created_at?: string
          date?: string
          id?: string
          leads_generated?: number | null
          page_url?: string
          unique_views?: number | null
          views?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "content_analytics_content_item_id_fkey"
            columns: ["content_item_id"]
            isOneToOne: false
            referencedRelation: "content_items"
            referencedColumns: ["id"]
          },
        ]
      }
      content_items: {
        Row: {
          author_id: string | null
          content_data: Json
          content_type_id: string
          created_at: string
          id: string
          meta_data: Json | null
          published_at: string | null
          slug: string
          status: string
          title: string
          updated_at: string
        }
        Insert: {
          author_id?: string | null
          content_data?: Json
          content_type_id: string
          created_at?: string
          id?: string
          meta_data?: Json | null
          published_at?: string | null
          slug: string
          status?: string
          title: string
          updated_at?: string
        }
        Update: {
          author_id?: string | null
          content_data?: Json
          content_type_id?: string
          created_at?: string
          id?: string
          meta_data?: Json | null
          published_at?: string | null
          slug?: string
          status?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "content_items_content_type_id_fkey"
            columns: ["content_type_id"]
            isOneToOne: false
            referencedRelation: "content_types"
            referencedColumns: ["id"]
          },
        ]
      }
      content_types: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
          schema: Json
          slug: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
          schema?: Json
          slug: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          schema?: Json
          slug?: string
          updated_at?: string
        }
        Relationships: []
      }
      digital_assets: {
        Row: {
          alt_text: string | null
          created_at: string
          file_size: number
          file_type: string
          filename: string
          id: string
          metadata: Json | null
          original_filename: string
          storage_path: string
          uploaded_by: string | null
        }
        Insert: {
          alt_text?: string | null
          created_at?: string
          file_size: number
          file_type: string
          filename: string
          id?: string
          metadata?: Json | null
          original_filename: string
          storage_path: string
          uploaded_by?: string | null
        }
        Update: {
          alt_text?: string | null
          created_at?: string
          file_size?: number
          file_type?: string
          filename?: string
          id?: string
          metadata?: Json | null
          original_filename?: string
          storage_path?: string
          uploaded_by?: string | null
        }
        Relationships: []
      }
      event_form_fields: {
        Row: {
          conditional_logic: Json | null
          created_at: string
          event_id: string
          field_label: string
          field_name: string
          field_type: string
          id: string
          options: Json | null
          order_position: number | null
          required: boolean | null
        }
        Insert: {
          conditional_logic?: Json | null
          created_at?: string
          event_id: string
          field_label: string
          field_name: string
          field_type: string
          id?: string
          options?: Json | null
          order_position?: number | null
          required?: boolean | null
        }
        Update: {
          conditional_logic?: Json | null
          created_at?: string
          event_id?: string
          field_label?: string
          field_name?: string
          field_type?: string
          id?: string
          options?: Json | null
          order_position?: number | null
          required?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "event_form_fields_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      event_registrations: {
        Row: {
          amount_paid: number | null
          attendee_email: string
          attendee_name: string
          checked_in: boolean | null
          checked_in_at: string | null
          company_name: string | null
          created_at: string
          event_id: string
          id: string
          industry: string | null
          job_title: string | null
          payment_status: string | null
          phone: string | null
          promo_code: string | null
          qr_code: string | null
          registration_data: Json | null
          registration_status: string | null
          updated_at: string
          waitlist_position: number | null
          waitlisted: boolean | null
        }
        Insert: {
          amount_paid?: number | null
          attendee_email: string
          attendee_name: string
          checked_in?: boolean | null
          checked_in_at?: string | null
          company_name?: string | null
          created_at?: string
          event_id: string
          id?: string
          industry?: string | null
          job_title?: string | null
          payment_status?: string | null
          phone?: string | null
          promo_code?: string | null
          qr_code?: string | null
          registration_data?: Json | null
          registration_status?: string | null
          updated_at?: string
          waitlist_position?: number | null
          waitlisted?: boolean | null
        }
        Update: {
          amount_paid?: number | null
          attendee_email?: string
          attendee_name?: string
          checked_in?: boolean | null
          checked_in_at?: string | null
          company_name?: string | null
          created_at?: string
          event_id?: string
          id?: string
          industry?: string | null
          job_title?: string | null
          payment_status?: string | null
          phone?: string | null
          promo_code?: string | null
          qr_code?: string | null
          registration_data?: Json | null
          registration_status?: string | null
          updated_at?: string
          waitlist_position?: number | null
          waitlisted?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "event_registrations_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      events: {
        Row: {
          capacity: number | null
          category: string | null
          created_at: string
          date: string
          description: string | null
          id: string
          image_url: string | null
          location: string
          organizer_email: string | null
          price: number | null
          registration_open: boolean | null
          requires_approval: boolean | null
          time: string
          title: string
          updated_at: string
        }
        Insert: {
          capacity?: number | null
          category?: string | null
          created_at?: string
          date: string
          description?: string | null
          id?: string
          image_url?: string | null
          location: string
          organizer_email?: string | null
          price?: number | null
          registration_open?: boolean | null
          requires_approval?: boolean | null
          time: string
          title: string
          updated_at?: string
        }
        Update: {
          capacity?: number | null
          category?: string | null
          created_at?: string
          date?: string
          description?: string | null
          id?: string
          image_url?: string | null
          location?: string
          organizer_email?: string | null
          price?: number | null
          registration_open?: boolean | null
          requires_approval?: boolean | null
          time?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      intent_signals: {
        Row: {
          created_at: string
          id: string
          lead_id: string | null
          metadata: Json | null
          score: number
          signal_type: string
          source: string | null
          topic: string | null
          visitor_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          lead_id?: string | null
          metadata?: Json | null
          score: number
          signal_type: string
          source?: string | null
          topic?: string | null
          visitor_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          lead_id?: string | null
          metadata?: Json | null
          score?: number
          signal_type?: string
          source?: string | null
          topic?: string | null
          visitor_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "intent_signals_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "intent_signals_visitor_id_fkey"
            columns: ["visitor_id"]
            isOneToOne: false
            referencedRelation: "website_visitors"
            referencedColumns: ["id"]
          },
        ]
      }
      leads: {
        Row: {
          company_name: string | null
          company_size: string | null
          created_at: string
          crm_id: string | null
          email: string
          first_name: string | null
          id: string
          industry: string | null
          job_title: string | null
          last_name: string | null
          lead_score: number | null
          lead_source: string | null
          notes: string | null
          phone: string | null
          status: string
          updated_at: string
          visitor_id: string | null
        }
        Insert: {
          company_name?: string | null
          company_size?: string | null
          created_at?: string
          crm_id?: string | null
          email: string
          first_name?: string | null
          id?: string
          industry?: string | null
          job_title?: string | null
          last_name?: string | null
          lead_score?: number | null
          lead_source?: string | null
          notes?: string | null
          phone?: string | null
          status?: string
          updated_at?: string
          visitor_id?: string | null
        }
        Update: {
          company_name?: string | null
          company_size?: string | null
          created_at?: string
          crm_id?: string | null
          email?: string
          first_name?: string | null
          id?: string
          industry?: string | null
          job_title?: string | null
          last_name?: string | null
          lead_score?: number | null
          lead_source?: string | null
          notes?: string | null
          phone?: string | null
          status?: string
          updated_at?: string
          visitor_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "leads_visitor_id_fkey"
            columns: ["visitor_id"]
            isOneToOne: false
            referencedRelation: "website_visitors"
            referencedColumns: ["id"]
          },
        ]
      }
      page_views: {
        Row: {
          created_at: string
          exit_page: boolean | null
          id: string
          page_title: string | null
          page_url: string
          scroll_depth: number | null
          time_on_page: number | null
          visitor_id: string
        }
        Insert: {
          created_at?: string
          exit_page?: boolean | null
          id?: string
          page_title?: string | null
          page_url: string
          scroll_depth?: number | null
          time_on_page?: number | null
          visitor_id: string
        }
        Update: {
          created_at?: string
          exit_page?: boolean | null
          id?: string
          page_title?: string | null
          page_url?: string
          scroll_depth?: number | null
          time_on_page?: number | null
          visitor_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "page_views_visitor_id_fkey"
            columns: ["visitor_id"]
            isOneToOne: false
            referencedRelation: "website_visitors"
            referencedColumns: ["id"]
          },
        ]
      }
      promo_codes: {
        Row: {
          active: boolean | null
          code: string
          created_at: string
          discount_type: string | null
          discount_value: number | null
          event_id: string
          id: string
          usage_limit: number | null
          used_count: number | null
          valid_from: string | null
          valid_until: string | null
        }
        Insert: {
          active?: boolean | null
          code: string
          created_at?: string
          discount_type?: string | null
          discount_value?: number | null
          event_id: string
          id?: string
          usage_limit?: number | null
          used_count?: number | null
          valid_from?: string | null
          valid_until?: string | null
        }
        Update: {
          active?: boolean | null
          code?: string
          created_at?: string
          discount_type?: string | null
          discount_value?: number | null
          event_id?: string
          id?: string
          usage_limit?: number | null
          used_count?: number | null
          valid_from?: string | null
          valid_until?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "promo_codes_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      website_visitors: {
        Row: {
          browser: string | null
          city: string | null
          company_domain: string | null
          company_name: string | null
          country: string | null
          device_type: string | null
          first_visit: string
          id: string
          ip_address: unknown | null
          is_identified: boolean | null
          landing_page: string | null
          last_visit: string
          page_views: number | null
          referrer: string | null
          region: string | null
          session_duration: number | null
          session_id: string
          user_agent: string | null
          visitor_id: string | null
        }
        Insert: {
          browser?: string | null
          city?: string | null
          company_domain?: string | null
          company_name?: string | null
          country?: string | null
          device_type?: string | null
          first_visit?: string
          id?: string
          ip_address?: unknown | null
          is_identified?: boolean | null
          landing_page?: string | null
          last_visit?: string
          page_views?: number | null
          referrer?: string | null
          region?: string | null
          session_duration?: number | null
          session_id: string
          user_agent?: string | null
          visitor_id?: string | null
        }
        Update: {
          browser?: string | null
          city?: string | null
          company_domain?: string | null
          company_name?: string | null
          country?: string | null
          device_type?: string | null
          first_visit?: string
          id?: string
          ip_address?: unknown | null
          is_identified?: boolean | null
          landing_page?: string | null
          last_visit?: string
          page_views?: number | null
          referrer?: string | null
          region?: string | null
          session_duration?: number | null
          session_id?: string
          user_agent?: string | null
          visitor_id?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
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
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
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
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
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
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
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
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
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
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
