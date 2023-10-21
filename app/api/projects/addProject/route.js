import { NextResponse } from "next/server";
import { verify } from "../../../../functions/backendFunctions/auth";
import { uploadPhoto } from "../../../../functions/backendFunctions/uploadPhoto";
import connectToDB from "../../../../DL/connectToDB";
import { Project } from "../../../../DL/models/Project.model";
import { User } from "../../../../DL/models/User.model";

export async function POST(req) {
  try {
    const formData = await req.formData();
    if (!formData.get("name") || !formData.get("description"))
      throw new Error("missing name or description");
    const photoUrl = await uploadPhoto(formData.get("photo"));
    if (!photoUrl) throw new Error("invalid photo url");

    const token = req.headers.get("authorization").split(" ")[1];
    if (!token) throw new Error("invalid token");

    await connectToDB();
    const projectId = await storeInDB(formData, photoUrl);
    const userId = await verify(token).id;
    await User.updateOne({ _id: userId }, { $push: { projects: projectId } });

    return new NextResponse(JSON.stringify("success"), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify(err), { status: 400 });
  }
}

async function storeInDB(formData, photoUrl) {
  const project = {
    name: formData.get("name"),
    description: formData.get("description"),
    gitHubLink: formData.get("gitHubLink"),
    websiteLink: formData.get("websiteLink"),
    isPortfolio: formData.get("isPortfolio"),
    technologies: JSON.parse(formData.get("technologies")),
    photo: photoUrl,
  };
  const newProject = await Project.create(project);
  return newProject._id;
}
