-- Fix function search path security issue
CREATE OR REPLACE FUNCTION public.update_event_analytics(event_uuid UUID)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
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
$$;