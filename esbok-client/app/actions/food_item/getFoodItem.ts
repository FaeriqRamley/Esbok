"use server";
import { Database } from "@/types/supabase";
import { createClient } from "@/utils/supabase/server";

// 1) Alias your row & insert shapes
export type FoodItem = Database["public"]["Tables"]["food_item"]["Row"];

/**
 * Get a food item by its ID.
 * @param id The ID of the food item to retrieve.
 * @throws Will throw an error if the fetch fails.
 * @returns FoodItem object or null if not found.
 */
export async function getFoodItem(
  id: FoodItem["id"]
): Promise<FoodItem | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("food_item")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
