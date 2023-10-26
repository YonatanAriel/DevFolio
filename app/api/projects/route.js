import { NextResponse } from "next/server";
import connectToDB from "../../../DL/connectToDB";
import { Project } from "../../../DL/models/Project.model";
import { User } from "../../../DL/models/User.model";

export async function GET(req) {
  await connectToDB();
  const allProjects = await Project.find().populate(
    "userId",
    "name occupation photo _id"
  );
  return new NextResponse(JSON.stringify(allProjects), { status: 200 });
}
