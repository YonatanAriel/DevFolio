import jwt from "jsonwebtoken";
import { User } from "../../../../DL/models/User.model";

export async function GET(request) {
  try {
    const token = request.nextUrl.searchParams.get("token");
    const { userId } = jwt.verify(token, process.env.JWT_SECRET);
    let user = await User.findById(userId);

    if (!user) {
      return new Response("Invalid token", { status: 400 });
    }
    await User.updateOne({ _id: userId }, { isVerified: true });
    return new Response("Email verified", { status: 200 });
  } catch (err) {
    console.log(err);
    if (err instanceof jwt.TokenExpiredError) {
      return new Response(
        `<div style="display:flex; align-items:center; justify-content:center; font-family:Helvetica,Arial,sans-serif; color:black; height:100%; width:100%; ">
        <h1>Your verification link has expired. Please <a style="color:#FF4E00;" href="${process.env.NEXT_PUBLIC_BASE_URL}signUp">Sign Up</a> again.</h1>
        </div>`,
        { status: 400, headers: { "Content-Type": "text/html" } }
      );
    }
    return new Response("Verification error - try to sign up again", {
      status: 400,
    });
  }
}
