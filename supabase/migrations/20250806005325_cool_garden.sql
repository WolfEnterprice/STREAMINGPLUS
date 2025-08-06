/*
  # Create visitor_stats table

  1. New Tables
    - `visitor_stats`
      - `id` (bigint, primary key)
      - `total_visitors` (bigint, default 0)
      - `updated_at` (timestamptz, default now())

  2. Security
    - Enable RLS on `visitor_stats` table
    - Add policies for anonymous and authenticated users to read, insert, and update visitor stats

  3. Initial Data
    - Insert initial record with id=1 and total_visitors=0
*/

CREATE TABLE IF NOT EXISTS public.visitor_stats (
  id bigint PRIMARY KEY,
  total_visitors bigint DEFAULT 0 NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE public.visitor_stats ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read visitor stats"
  ON public.visitor_stats
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can insert visitor stats"
  ON public.visitor_stats
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can update visitor stats"
  ON public.visitor_stats
  FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

-- Insert initial record
INSERT INTO public.visitor_stats (id, total_visitors)
VALUES (1, 0)
ON CONFLICT (id) DO NOTHING;