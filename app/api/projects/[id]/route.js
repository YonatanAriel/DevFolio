// import { NextResponse } from "next/server";
// import connectToDB from "../../../DL/connectToDB";
// import { Project } from "../../../DL/models/Project.model";
// import { User } from "../../../DL/models/User.model";

// export async function GET(req) {
//   try {
//     await connectToDB();
//     const allProjects = await Project.find({_id:}).populate(
//       "userId",
//       "name occupation photo _id"
//     );
//     return NextResponse.json(allProjects, { status: 200 });
//   } catch (err) {
//     console.log(err);
//     return NextResponse.json(
//       { error: "Failed to fetch all projects" },
//       { status: 500 }
//     );
//   }
// }
