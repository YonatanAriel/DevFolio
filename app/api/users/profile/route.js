import { NextResponse } from "next/server";
import { User } from "../../../../DL/models/User.model";
import { verify } from "../../../../functions/backendFunctions/auth";

export async function GET(req) {
  try {
    const token = req.headers.get("authorization").split(" ")[1];
    if (!token) throw new Error("invalid token");
    const userId = await verify(token).id;
    console.log("userId - ", userId);
    const user = await User.findById(userId);
    console.log("user - ", user);
    if (!user) throw new Error("User not found");
    return new NextResponse(JSON.stringify(user), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ err: err.message }), {
      status: 400,
    });
  }
}
