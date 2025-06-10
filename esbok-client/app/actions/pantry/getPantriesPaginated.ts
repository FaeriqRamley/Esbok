"use server";
import { Database } from "@/types/supabase";
import { createClient } from "@/utils/supabase/server";

export type Pantry = Database["public"]["Tables"]["pantry"]["Row"];

/**
 * Fetch pantries with pagination support.
 * @param page Page number starting from 1.
 * @param limit Number of records per page.
 * @throws Will throw an error if the fetch fails.
 * @returns Array of Pantry objects.
 */
export async function getPantriesPaginated({
  page = 1,
  limit = 10,
}: {
  page?: number;
  limit?: number;
}): Promise<Pantry[]> {
  const supabase = await createClient();
  const from = (page - 1) * limit;
  const { data, error } = await supabase
    .from("pantry")
    .select("*")
    .order("id", { ascending: true })
    .range(from, from + limit - 1);

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
}
