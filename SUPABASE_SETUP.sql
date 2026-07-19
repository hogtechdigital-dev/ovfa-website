-- =============================================
-- OVERCOMERS FAMILY ASSEMBLY – SUPABASE SETUP
-- Run this in your Supabase SQL Editor
-- =============================================

-- 1. CONTACT MESSAGES
CREATE TABLE IF NOT EXISTS contact_messages (
  id BIGSERIAL PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON TABLE contact_messages TO anon, authenticated;
GRANT USAGE, SELECT ON SEQUENCE contact_messages_id_seq TO anon, authenticated;

-- 2. GIVING RECORDS
CREATE TABLE IF NOT EXISTS giving_records (
  id BIGSERIAL PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  category TEXT DEFAULT 'Offering',
  amount NUMERIC(12,2) NOT NULL,
  message TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

GRANT ALL ON TABLE giving_records TO anon, authenticated;
GRANT USAGE, SELECT ON SEQUENCE giving_records_id_seq TO anon, authenticated;

-- 3. MEMBERS TABLE
CREATE TABLE IF NOT EXISTS members (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  branch TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

GRANT ALL ON TABLE members TO anon, authenticated;
GRANT USAGE, SELECT ON SEQUENCE members_id_seq TO anon, authenticated;

-- 4. ROW LEVEL SECURITY
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE giving_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE members ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert contact messages and giving records
CREATE POLICY "Anyone can insert contact messages" ON contact_messages FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "Anyone can insert giving records" ON giving_records FOR INSERT TO anon, authenticated WITH CHECK (true);

-- Members can read their own data
CREATE POLICY "Members read own data" ON members FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Anyone can register" ON members FOR INSERT TO anon, authenticated WITH CHECK (true);

-- =============================================
-- ADMIN: To approve a member, run:
-- UPDATE members SET status = 'approved' WHERE email = 'member@email.com';
-- =============================================
