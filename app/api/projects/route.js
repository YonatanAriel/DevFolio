import { NextResponse } from "next/server";
import connectToDB from "../../../DL/connectToDB";
import { Project } from "../../../DL/models/Project.model";

export async function GET(req) {
  await connectToDB();
  const allProjects = await Project.find();
  return new NextResponse(JSON.stringify(allProjects), { status: 200 });
}
