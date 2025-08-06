/*
  # Create visitor stats table

  1. New Tables
    - `visitor_stats`
      - `id` (int8, primary key) - Unique identifier for the stats record
      - `total_visitors` (int8, default 0) - Total count of visitors
      - `updated_at` (timestamptz, default now()) - Timestamp of last update

  2. Security
    - Enable RLS on `visitor_stats` table
    - Add policy for anonymous users to read visitor stats
    - Add policy for anonymous users to insert/update visitor stats

  3. Initial Data
    - Insert initial record with id=1 and total_visitors=0
*/

-- Create the visitor_stats table
CREATE TABLE IF NOT EXISTS visitor_stats (
  id int8 PRIMARY KEY,
  total_visitors int8 DEFAULT 0 NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL
);

-- Enable Row Level Security
ALTER TABLE visitor_stats ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to read visitor stats
CREATE POLICY "Anyone can read visitor stats"
  ON visitor_stats
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Allow anonymous users to insert visitor stats
CREATE POLICY "Anyone can insert visitor stats"
  ON visitor_stats
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Allow anonymous users to update visitor stats
CREATE POLICY "Anyone can update visitor stats"
  ON visitor_stats
  FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

-- Insert initial record
INSERT INTO visitor_stats (id, total_visitors) 
VALUES (1, 0)
ON CONFLICT (id) DO NOTHING;