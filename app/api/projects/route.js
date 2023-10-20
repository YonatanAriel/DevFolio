export async function POST(req) {
  const body = await req.json();

  return new NextResponse(JSON.stringify(), { status: 200 });
}
