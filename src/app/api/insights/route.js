import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'

export async function POST(request) {

  const req = await request.json();

 const res = await fetch(
    `http://localhost:3001/v1/insights/account-insight-by-id`,
    {
      headers: {
        "Content-Type": "application/json",
        "Authorization": process.env.MAINSTAGE_API,
      },
      method: "POST",
      body: JSON.stringify({
        accountId: req.account,
      }),
      cache: 'no-store',
    },
  );

  const data = await res.json();

  return NextResponse.json({ data, status: data.status }); 
}
