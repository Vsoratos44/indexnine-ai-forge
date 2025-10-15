-- Create enum for user roles
CREATE TYPE public.app_role AS ENUM ('event_admin', 'user');

-- Create user_roles table to manage permissions
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Security definer function to check user roles (prevents RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- RLS policy: users can view their own roles
CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (user_id = auth.uid());

-- RLS policy: only event admins can manage roles
CREATE POLICY "Event admins can manage all roles"
ON public.user_roles
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'event_admin'));

-- Drop overly permissive policies on event_registrations
DROP POLICY IF EXISTS "Authenticated users can manage all registrations" ON public.event_registrations;
DROP POLICY IF EXISTS "Users can view their own registrations" ON public.event_registrations;

-- NEW SECURE POLICIES for event_registrations

-- 1. Public can register for events (INSERT only)
-- Policy already exists: "Anyone can create registrations"

-- 2. Users can view ONLY their own registrations
CREATE POLICY "Users view own registrations by email"
ON public.event_registrations
FOR SELECT
USING (
  attendee_email = auth.email()
  OR public.has_role(auth.uid(), 'event_admin')
);

-- 3. Users can update ONLY their own registrations (before approval)
CREATE POLICY "Users update own pending registrations"
ON public.event_registrations
FOR UPDATE
USING (
  attendee_email = auth.email()
  AND registration_status = 'pending'
)
WITH CHECK (
  attendee_email = auth.email()
  AND registration_status = 'pending'
);

-- 4. Event admins can manage ALL registrations (approve, update, delete)
CREATE POLICY "Event admins manage all registrations"
ON public.event_registrations
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'event_admin'))
WITH CHECK (public.has_role(auth.uid(), 'event_admin'));

-- 5. Event admins can check-in attendees
CREATE POLICY "Event admins can check-in attendees"
ON public.event_registrations
FOR UPDATE
TO authenticated
USING (
  public.has_role(auth.uid(), 'event_admin')
  AND registration_status = 'confirmed'
)
WITH CHECK (
  public.has_role(auth.uid(), 'event_admin')
);

-- Update check_in_logs policies for event admins
DROP POLICY IF EXISTS "Authenticated users can manage check-in logs" ON public.check_in_logs;

CREATE POLICY "Event admins manage check-in logs"
ON public.check_in_logs
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'event_admin'))
WITH CHECK (public.has_role(auth.uid(), 'event_admin'));

-- Update event_analytics policies
DROP POLICY IF EXISTS "Authenticated users can view analytics" ON public.event_analytics;

CREATE POLICY "Event admins view analytics"
ON public.event_analytics
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'event_admin'));

-- Update events management policies
DROP POLICY IF EXISTS "Authenticated users can manage events" ON public.events;

CREATE POLICY "Event admins manage events"
ON public.events
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'event_admin'))
WITH CHECK (public.has_role(auth.uid(), 'event_admin'));

-- Comment explaining the security model
COMMENT ON TABLE public.user_roles IS 'Stores user roles for role-based access control. Uses security definer function to prevent RLS recursion.';
COMMENT ON FUNCTION public.has_role IS 'Security definer function to check if a user has a specific role without triggering RLS recursion.';