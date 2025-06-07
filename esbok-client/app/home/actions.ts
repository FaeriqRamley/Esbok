"use server";

import { createClient } from "@/utils/supabase/server";


export async function fetch() {
  const supabase = await createClient();
  console.log("Fetching data from Supabase...");
  const { data, error } = await supabase.from("test_table").select();
  if (error) {
    console.error("Supabase error:", error);
    return { data: null, error };
  }
  console.log("Data fetched:", data);
  return { data, error: null };
}
