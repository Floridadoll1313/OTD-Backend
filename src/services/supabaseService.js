import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function saveLead({ email, source, metadata }) {
  const { data, error } = await supabase
    .from("leads")
    .insert([{ email, source, metadata }]);

  if (error) throw error;
  return data;
}