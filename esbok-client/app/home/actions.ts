"use server";

import { createClient } from "@/utils/supabase/server";
import { Database } from "@/types/supabase";

type TestTableRow = Database["public"]["Tables"]["test_table"]["Row"];

export async function fetch() {
  const supabase = await createClient();
  
  await new Promise((resolve) => setTimeout(resolve, 5000)); // Simulate a delay
  return await supabase.from("test_table").select().overrideTypes<TestTableRow[]>();
}
