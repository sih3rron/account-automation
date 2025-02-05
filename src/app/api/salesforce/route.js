import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'

export async function GET(request) {
  
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  
  const res = await fetch(
    `http://localhost:3001/v1/salesforce/account-object?accountId=${id}`,
    {
      headers: {
        "Content-Type": "application/json",
        "Authorization": process.env.MAINSTAGE_API,
      },
      cache: 'no-store',
    },
  );

  const data = await res.json();

  return NextResponse.json({ data, status: data.status });
}
