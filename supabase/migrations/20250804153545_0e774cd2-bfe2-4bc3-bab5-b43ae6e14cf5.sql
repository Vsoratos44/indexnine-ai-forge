-- Create storage buckets for media uploads
INSERT INTO storage.buckets (id, name, public) 
VALUES ('media', 'media', true);

-- Create storage policies for media bucket
CREATE POLICY "Media files are publicly accessible" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'media');

CREATE POLICY "Authenticated users can upload media" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'media' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update their media" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'media' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete media" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'media' AND auth.role() = 'authenticated');

-- Fix search path security issue
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;