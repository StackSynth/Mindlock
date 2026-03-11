import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://lkmvdzybxzoewmcztgrc.supabase.co"
const supabaseKey = "YOUR_SUPABASE_ANON_KEY_HERE" // Replace with your actual anon key from Supabase dashboard

export const supabase = createClient(supabaseUrl, supabaseKey)