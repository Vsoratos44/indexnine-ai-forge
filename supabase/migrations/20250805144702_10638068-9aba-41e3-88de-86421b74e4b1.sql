-- Create seating charts table for event floor plans
CREATE TABLE public.seating_charts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  event_id UUID NOT NULL,
  name TEXT NOT NULL,
  layout_data JSONB NOT NULL DEFAULT '{}',
  total_capacity INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create seating assignments table
CREATE TABLE public.seating_assignments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  event_id UUID NOT NULL,
  registration_id UUID NOT NULL,
  table_id TEXT,
  seat_number TEXT,
  table_name TEXT,
  special_requirements JSONB DEFAULT '{}',
  assigned_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  assigned_by UUID
);

-- Create check-in logs table for tracking
CREATE TABLE public.check_in_logs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  event_id UUID NOT NULL,
  registration_id UUID NOT NULL,
  checked_in_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  checked_in_by UUID,
  check_in_method TEXT DEFAULT 'qr_code',
  device_info JSONB DEFAULT '{}',
  location TEXT
);

-- Create event staff table
CREATE TABLE public.event_staff (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  event_id UUID NOT NULL,
  user_id UUID,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'staff',
  permissions JSONB DEFAULT '{}',
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create analytics snapshots table for real-time tracking
CREATE TABLE public.event_analytics (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  event_id UUID NOT NULL,
  snapshot_time TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  total_registered INTEGER DEFAULT 0,
  total_checked_in INTEGER DEFAULT 0,
  attendance_rate NUMERIC DEFAULT 0,
  avg_check_in_time INTEGER DEFAULT 0,
  current_capacity INTEGER DEFAULT 0,
  metrics JSONB DEFAULT '{}'
);

-- Enable Row Level Security
ALTER TABLE public.seating_charts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.seating_assignments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.check_in_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_staff ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_analytics ENABLE ROW LEVEL SECURITY;

-- Create policies for seating charts
CREATE POLICY "Authenticated users can manage seating charts"
ON public.seating_charts
FOR ALL
USING (auth.role() = 'authenticated'::text);

CREATE POLICY "Seating charts are publicly readable"
ON public.seating_charts
FOR SELECT
USING (true);

-- Create policies for seating assignments
CREATE POLICY "Authenticated users can manage seating assignments"
ON public.seating_assignments
FOR ALL
USING (auth.role() = 'authenticated'::text);

CREATE POLICY "Seating assignments are publicly readable"
ON public.seating_assignments
FOR SELECT
USING (true);

-- Create policies for check-in logs
CREATE POLICY "Authenticated users can manage check-in logs"
ON public.check_in_logs
FOR ALL
USING (auth.role() = 'authenticated'::text);

CREATE POLICY "Staff can create check-in logs"
ON public.check_in_logs
FOR INSERT
WITH CHECK (true);

-- Create policies for event staff
CREATE POLICY "Authenticated users can manage event staff"
ON public.event_staff
FOR ALL
USING (auth.role() = 'authenticated'::text);

-- Create policies for event analytics
CREATE POLICY "Authenticated users can view analytics"
ON public.event_analytics
FOR ALL
USING (auth.role() = 'authenticated'::text);

-- Create function to update analytics
CREATE OR REPLACE FUNCTION public.update_event_analytics(event_uuid UUID)
RETURNS void AS $$
DECLARE
  reg_count INTEGER;
  checkin_count INTEGER;
  avg_time INTEGER;
  attendance_rate NUMERIC;
BEGIN
  -- Get registration count
  SELECT COUNT(*) INTO reg_count
  FROM public.event_registrations
  WHERE event_id = event_uuid;
  
  -- Get check-in count
  SELECT COUNT(*) INTO checkin_count
  FROM public.event_registrations
  WHERE event_id = event_uuid AND checked_in = true;
  
  -- Calculate attendance rate
  IF reg_count > 0 THEN
    attendance_rate := (checkin_count::NUMERIC / reg_count::NUMERIC) * 100;
  ELSE
    attendance_rate := 0;
  END IF;
  
  -- Get average check-in time (placeholder calculation)
  avg_time := 15; -- Default 15 seconds
  
  -- Insert or update analytics
  INSERT INTO public.event_analytics (
    event_id,
    total_registered,
    total_checked_in,
    attendance_rate,
    avg_check_in_time,
    current_capacity
  ) VALUES (
    event_uuid,
    reg_count,
    checkin_count,
    attendance_rate,
    avg_time,
    reg_count
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Add triggers for updated_at
CREATE TRIGGER update_seating_charts_updated_at
  BEFORE UPDATE ON public.seating_charts
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample data
INSERT INTO public.seating_charts (event_id, name, layout_data, total_capacity) VALUES
  ((SELECT id FROM public.events LIMIT 1), 'Main Ballroom', '{"tables": [{"id": "table1", "name": "Table 1", "seats": 8, "x": 100, "y": 100}, {"id": "table2", "name": "Table 2", "seats": 8, "x": 300, "y": 100}]}', 16),
  ((SELECT id FROM public.events LIMIT 1), 'VIP Section', '{"tables": [{"id": "vip1", "name": "VIP Table 1", "seats": 6, "x": 50, "y": 200}]}', 6);