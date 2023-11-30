/* eslint-disable no-undef */
import { createClient } from "@supabase/supabase-js";
const supaBaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsaGpxZHp5bmh5cXVhcXVsZWR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDExNTUxNzMsImV4cCI6MjAxNjczMTE3M30.sZm2zsOHeTxWFUeApm8ZFOI7eFQbJtCn2LuNpOAtkNE";
export const supabaseUrl = "https://blhjqdzynhyquaquledw.supabase.co";

const supabase = createClient(supabaseUrl, supaBaseKey);

export default supabase;
