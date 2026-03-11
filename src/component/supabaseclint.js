import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://lkmvdzybxzoewmcztgrc.supabase.co"
const supabaseKey = "sb_publishable_mQMn3XmZof3mvzSjPh8CQQ_GsJqFhWt"

export const supabase = createClient(supabaseUrl, supabaseKey)