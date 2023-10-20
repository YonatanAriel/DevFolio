import { NextResponse } from "next/server";
import { verify } from "../../../../functions/backendFunctions/auth";

export async function POST(req) {
  try {
    const body = await req.json();
    if (!body.name || !body.description)
      throw new Error("missing name or description");
    const token = req.headers.get("authorization").split(" ")[1];
    const userId = await verify(token).id;
    console.log(userId);

    return new NextResponse(token, { status: 200 });
  } catch (err) {
    console.log(err);
  }
}
