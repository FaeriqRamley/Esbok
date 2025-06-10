"use server";
import { Database } from "@/types/supabase";
import { createClient } from "@/utils/supabase/server";

export type FoodItem = Database["public"]["Tables"]["food_item"]["Row"];
export type Pantry = Database["public"]["Tables"]["pantry"]["Row"];

interface Options {
  pantryId: Pantry["id"];
  page?: number;
  limit?: number;
  tagIds?: number[];
}

/**
 * Fetch food items for a pantry with optional tag filters.
 * @param options Query options including pagination and tag filters.
 * @throws Will throw an error if the fetch fails.
 * @returns Array of FoodItem objects.
 */
export async function getPantryFoodItemsPaginated({
  pantryId,
  page = 1,
  limit = 10,
  tagIds,
}: Options): Promise<FoodItem[]> {
  const supabase = await createClient();

  let query = supabase
    .from("food_item")
    .select("*, food_item_food_tag!inner(food_tag_id)")
    .eq("pantry_id", pantryId);

  if (tagIds && tagIds.length > 0) {
    query = query.in("food_item_food_tag.food_tag_id", tagIds);
  }

  const from = (page - 1) * limit;
  const { data, error } = await query
    .order("id", { ascending: false })
    .range(from, from + limit - 1);

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
}
