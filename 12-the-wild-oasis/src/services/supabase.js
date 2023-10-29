import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://jkfrvgnoymmlyhlivims.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImprZnJ2Z25veW1tbHlobGl2aW1zIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgxNDI1MzksImV4cCI6MjAxMzcxODUzOX0._CKkzelvmLNbIzVZ_FsnP3u5fID_6d899O-QdSOvhW4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
