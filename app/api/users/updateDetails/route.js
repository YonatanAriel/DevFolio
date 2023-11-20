import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.formData();
    console.log(formData);
    return new NextResponse(JSON.stringify("ccc"), { status: 200 });
  } catch (err) {
    console.log(err);
  }
}
