import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://lkmvdzybxzoewmcztgrc.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxrbXZkenlieHpvZXdtY3p0Z3JjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIzNjU4NDcsImV4cCI6MjA4Nzk0MTg0N30.ZSnxclSoHVMdUMastEVseWzuiWGcdGBmeoLZAJNCpPY" 

export const supabase = createClient(supabaseUrl, supabaseKey)