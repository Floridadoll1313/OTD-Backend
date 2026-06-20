import { createClient } from "@supabase/supabase-js";
import { Lead } from "../types/Lead.js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function saveLead(lead: Lead) {
  const { data, error } = await supabase.from("leads").insert([lead]);

  if (error) throw error;
  return data;
}