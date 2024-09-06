import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://eouunyqxbytuqatovawx.supabase.co'; // ודא שזה ה-URL הנכון של Supabase שלך
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVvdXVueXF4Ynl0dXFhdG92YXd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ3NDM5OTcsImV4cCI6MjA0MDMxOTk5N30.TRiPN39vgT3ZsZdIyPNDXibtwzdp2FPX5Ls8eAxK0TY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);