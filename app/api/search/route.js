import { NextResponse } from "next/server";
import { Project } from "../../../DL/models/Project.model";
import { User } from "../../../DL/models/User.model";

export async function POST(req) {
  const { modelToSearch, text } = await req.json();
  console.log(modelToSearch);
  //   try {
  //     const results = await Project.find({
  //       $or: [
  //         { name: searchRegex },
  //         { occupation: searchRegex },
  //         { about: searchRegex },
  //       ],
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  return new NextResponse(JSON.stringify("3131"), { status: 200 });
}
