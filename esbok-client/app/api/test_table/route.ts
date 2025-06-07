import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { Database } from "@/types/supabase";

type TestTableRow = Database["public"]["Tables"]["test_table"]["Row"];

export async function GET() {
  const supabase = await createClient(); // must be inside the handler
  console.log("Fetching data from test_table...");
  //   await new Promise((resolve) => setTimeout(resolve, 5000)); // Simulate a delay
  const { data, error } = await supabase.from("test_table").select().overrideTypes<TestTableRow[]>();
  console.log("Data fetched, returning response...");

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data });
}