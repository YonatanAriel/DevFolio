import { NextResponse } from "next/server";
import connectToDB from "../../../DL/connectToDB";
import { User } from "../../../DL/models/User.model";

export async function GET(req) {
  await connectToDB();
  const allUsers = await User.find();
  return NextResponse.json(allUsers, { status: 200 });
}
