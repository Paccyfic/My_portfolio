import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://swhtyhuyzexapdhiznii.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_1SB2kaJUg7o_ZzEixyRIFg_HZIXUf_p";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: typeof window !== 'undefined' ? localStorage : undefined,
    persistSession: true,
    autoRefreshToken: true,
  },
});