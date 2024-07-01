import { createClient } from '@supabase/supabase-js'

// Use a custom domain as the supabase URL
// export const supabase = createClientComponentClient();
export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL as string, process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY as string)