import { NextResponse } from "next/server";
import connectToDB from "../../../DL/connectToDB";
import { User } from "../../../DL/models/User.model";

export async function GET(req) {
  await connectToDB();
  const allUsers = await User.find();
  // return new NextResponse(JSON.stringify(allUsers), {
  //   status: 200,
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
  return NextResponse.json(allProjects, { status: 200 });

  // return new NextResponse(JSON.stringify(allUsers), { status: 200 });
}
