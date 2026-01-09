-- Create reviews table for storing customer reviews
CREATE TABLE public.reviews (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  text TEXT NOT NULL,
  is_approved BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert reviews (public form)
CREATE POLICY "Anyone can submit a review"
ON public.reviews
FOR INSERT
WITH CHECK (true);

-- Only show approved reviews publicly
CREATE POLICY "Anyone can view approved reviews"
ON public.reviews
FOR SELECT
USING (is_approved = true);