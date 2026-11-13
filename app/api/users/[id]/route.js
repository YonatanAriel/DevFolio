import { NextResponse } from "next/server";
import connectToDB from "../../../../DL/connectToDB";
import { User } from "../../../../DL/models/User.model";

export async function GET(req, { params }) {
  await connectToDB();
  const { id } = await params;
  const user = await User.findOne({ _id: id }).select("-email");
  return NextResponse.json(user, { status: 200 });
}
