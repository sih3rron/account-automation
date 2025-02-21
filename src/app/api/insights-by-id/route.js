export const dynamic = 'force-dynamic'
export async function GET(request) {

  const { searchParams } = new URL(request.url);
  const accountId = searchParams.get("accountId");

 const res = await fetch(
    `https://mainstage-api.mirohostedsolutions.com/v1/insights/account-insight-by-id/${accountId}`,
    {
      headers: {
        "Content-Type": "application/json",
        "Authorization": process.env.MAINSTAGE_API,
      },
      method: "GET",
      cache: 'no-store',
      revalidate: 1,
    },
  );

  const data = await res.json();

  return Response.json({ data, status: data.status }); 
}
