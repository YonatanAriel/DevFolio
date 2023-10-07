import { NextResponse } from "next/server";
import connectToDB from "../../../../DL/connectToDB";
import { User } from "../../../../DL/models/User.model";

export async function GET(req) {
  await connectToDB();
  const {
    query: { id },
  } = req;
  const user = await User.findOne({ _id: id });
  console.log(user);
  return new NextResponse(JSON.stringify(user), { status: 200 });
}
