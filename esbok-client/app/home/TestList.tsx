import { Database } from "@/types/supabase";

type TestTableRow = Database["public"]["Tables"]["test_table"]["Row"];

export const TestList = async () => {
  const res = await fetch(
    `${process.env["NEXT_PUBLIC_BASE_URL"] ?? ""}/api/test_table`,
    {
      next: { revalidate: 10 },
    }
  );

  const {
    data,
    error,
  }: { data: TestTableRow[]; error: { message: string } | null } =
    await res.json();
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      <h1>Test List</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
