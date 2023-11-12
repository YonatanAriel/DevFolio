import { NextResponse } from "next/server";
import { Project } from "../../../DL/models/Project.model";
import { User } from "../../../DL/models/User.model";
import connectToDB from "../../../DL/connectToDB";

export async function POST(req) {
  try {
    await connectToDB();
    const { modelToSearch, text } = await req.json();
    const searchRegex = new RegExp(text, "i");
    const searchFields =
      modelToSearch === "Project"
        ? ["name", "description", "technologies"]
        : ["name", "occupation", "about"];
    const searchFieldsRegex = searchFields.map((field) => ({
      [field]: searchRegex,
    }));

    const results =
      modelToSearch === "Project"
        ? await Project.find({
            $or: [...searchFieldsRegex],
          })
        : await User.find({
            $or: [...searchFieldsRegex],
          });

    console.log(results);
    return new NextResponse(
      JSON.stringify({
        data: results,
        pathname: `/search/${modelToSearch}s`.toLowerCase(),
      }),
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify(err), { status: 400 });
  }
}
