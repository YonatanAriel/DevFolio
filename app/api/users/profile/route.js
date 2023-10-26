import { NextResponse } from "next/server";
import { User } from "../../../../DL/models/User.model";
import { verify } from "../../../../functions/backendFunctions/auth";

export async function GET(req) {
  const token = req.headers.get("authorization").split(" ")[1];
  if (!token) throw new Error("invalid token");
  const userId = await verify(token).id;
  const user = await User.findById(userId);
  if (!user) throw new Error("User not found");

  return new NextResponse(JSON.stringify(user), { status: 200 });
}
