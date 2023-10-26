import bcrypt from "bcrypt";
import connectToDB from "../../../../DL/connectToDB";
import { NextResponse } from "next/server";
import { User } from "../../../../DL/models/User.model";
import {
  createToken,
  verifyEmail,
} from "../../../../functions/backendFunctions/auth";

export async function POST(req) {
  const body = await req.json();
  if (!body.email || !body.password) {
    return new NextResponse(JSON.stringify("Missing data"), { status: 400 });
  }

  await connectToDB();

  const user = await User.findOne({ email: body.email }, "+password");
  if (!user) {
    return new NextResponse(JSON.stringify("User not exist"), { status: 200 });
  }

  const isPasswordMatch = bcrypt.compareSync(body.password, user.password);
  if (!isPasswordMatch) {
    return new NextResponse(JSON.stringify("password mismatch"), {
      status: 200,
    });
  }

  if (!user.isVerified) {
    await verifyEmail(user);
    return new NextResponse(JSON.stringify("User not verified"), {
      status: 200,
    });
  }

  const token = createToken({ id: user._id }, "25d");

  return new NextResponse(JSON.stringify(token), { status: 200 });
}
