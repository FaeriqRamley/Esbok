"use server";
import { Database } from "@/types/supabase";
import { createClient } from "@/utils/supabase/server";

// 1) Alias your row & insert shapes
export type Pantry = Database["public"]["Tables"]["pantry"]["Row"];

/**
 * Get a pantry by its ID.
 * @param id The ID of the pantry to retrieve.
 * @throws Will throw an error if the fetch fails.
 * @returns Pantry object or null if not found.
 */
export async function getPantry(
  id: Pantry["id"]
): Promise<Pantry | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("pantry")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
