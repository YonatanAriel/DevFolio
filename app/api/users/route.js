import { NextResponse } from "next/server";
import connectToDB from "../../../DL/connectToDB";

export async function GET(req) {
  await connectToDB();
  return NextResponse;
}
