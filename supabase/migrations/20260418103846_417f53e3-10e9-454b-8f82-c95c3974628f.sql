CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Anyone (anon) can submit a contact message
CREATE POLICY "Anyone can submit contact messages"
  ON public.contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    char_length(email) > 3
    AND char_length(email) <= 255
    AND char_length(message) > 0
    AND char_length(message) <= 5000
    AND (name IS NULL OR char_length(name) <= 100)
  );

-- No SELECT/UPDATE/DELETE policies → only viewable via Cloud dashboard (service role)

CREATE INDEX idx_contact_messages_created_at ON public.contact_messages (created_at DESC);