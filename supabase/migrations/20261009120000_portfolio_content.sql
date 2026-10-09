-- Editable portfolio content (profile, experience, projects, skills) managed from /admin.
CREATE TABLE IF NOT EXISTS public.portfolio_content (
  key TEXT NOT NULL PRIMARY KEY CHECK (key IN ('profile', 'experience', 'projects', 'skills')),
  value JSONB NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.portfolio_content ENABLE ROW LEVEL SECURITY;

-- Visitors can read the published content
CREATE POLICY "Anyone can read portfolio content"
  ON public.portfolio_content
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Only signed-in admin users can change it
CREATE POLICY "Authenticated users can insert portfolio content"
  ON public.portfolio_content
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update portfolio content"
  ON public.portfolio_content
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete portfolio content"
  ON public.portfolio_content
  FOR DELETE
  TO authenticated
  USING (true);
