-- Create events table
CREATE TABLE public.events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  date DATE NOT NULL,
  time TIME NOT NULL,
  location TEXT NOT NULL,
  price DECIMAL(10,2) DEFAULT 0.00,
  capacity INTEGER DEFAULT 100,
  category TEXT,
  image_url TEXT,
  organizer_email TEXT,
  registration_open BOOLEAN DEFAULT true,
  requires_approval BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create event registrations table
CREATE TABLE public.event_registrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
  attendee_name TEXT NOT NULL,
  attendee_email TEXT NOT NULL,
  phone TEXT,
  company_name TEXT,
  job_title TEXT,
  industry TEXT,
  registration_data JSONB DEFAULT '{}',
  promo_code TEXT,
  amount_paid DECIMAL(10,2) DEFAULT 0.00,
  payment_status TEXT DEFAULT 'pending',
  registration_status TEXT DEFAULT 'confirmed',
  qr_code TEXT,
  checked_in BOOLEAN DEFAULT false,
  checked_in_at TIMESTAMPTZ,
  waitlisted BOOLEAN DEFAULT false,
  waitlist_position INTEGER,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(event_id, attendee_email)
);

-- Create promo codes table
CREATE TABLE public.promo_codes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
  code TEXT NOT NULL,
  discount_type TEXT CHECK (discount_type IN ('percentage', 'fixed', 'free')),
  discount_value DECIMAL(10,2),
  usage_limit INTEGER,
  used_count INTEGER DEFAULT 0,
  valid_from TIMESTAMPTZ,
  valid_until TIMESTAMPTZ,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(event_id, code)
);

-- Create custom form fields table
CREATE TABLE public.event_form_fields (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
  field_name TEXT NOT NULL,
  field_type TEXT NOT NULL,
  field_label TEXT NOT NULL,
  required BOOLEAN DEFAULT false,
  options JSONB,
  conditional_logic JSONB,
  order_position INTEGER,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.promo_codes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_form_fields ENABLE ROW LEVEL SECURITY;

-- Create policies for events (public read, admin write)
CREATE POLICY "Events are publicly readable" ON public.events
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can manage events" ON public.events
  FOR ALL USING (auth.role() = 'authenticated');

-- Create policies for registrations
CREATE POLICY "Users can view their own registrations" ON public.event_registrations
  FOR SELECT USING (attendee_email = auth.email() OR auth.role() = 'authenticated');

CREATE POLICY "Anyone can create registrations" ON public.event_registrations
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Authenticated users can manage all registrations" ON public.event_registrations
  FOR ALL USING (auth.role() = 'authenticated');

-- Create policies for promo codes
CREATE POLICY "Promo codes are publicly readable" ON public.promo_codes
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can manage promo codes" ON public.promo_codes
  FOR ALL USING (auth.role() = 'authenticated');

-- Create policies for form fields
CREATE POLICY "Form fields are publicly readable" ON public.event_form_fields
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can manage form fields" ON public.event_form_fields
  FOR ALL USING (auth.role() = 'authenticated');

-- Create triggers for updated_at
CREATE TRIGGER update_events_updated_at
  BEFORE UPDATE ON public.events
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_registrations_updated_at
  BEFORE UPDATE ON public.event_registrations
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample events
INSERT INTO public.events (title, description, date, time, location, price, capacity, category) VALUES
('AI Innovation Summit 2024', 'Join industry leaders as we explore the cutting-edge developments in artificial intelligence and machine learning.', '2024-12-15', '09:00:00', 'Tech Convention Center, San Francisco', 299.00, 500, 'Technology'),
('Data Engineering Workshop', 'Hands-on workshop covering modern data pipeline architecture and best practices.', '2024-12-20', '10:00:00', 'Innovation Hub, Austin', 149.00, 50, 'Workshop'),
('Enterprise Digital Transformation', 'Strategic insights for enterprise leaders navigating digital transformation initiatives.', '2025-01-10', '14:00:00', 'Business Center, New York', 0.00, 200, 'Business'),
('Quality Engineering Conference', 'Best practices in automated testing, CI/CD, and quality assurance methodologies.', '2025-01-25', '09:30:00', 'Tech Park, Seattle', 199.00, 300, 'Technology'),
('Startup Pitch Competition', 'Watch innovative startups pitch their ideas to leading venture capitalists.', '2025-02-05', '18:00:00', 'Startup Incubator, Palo Alto', 0.00, 150, 'Startup');