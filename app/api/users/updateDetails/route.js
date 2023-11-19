import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    return new NextResponse(JSON.stringify("ccc"), { status: 200 });
  } catch (err) {
    console.log(err);
  }
}
