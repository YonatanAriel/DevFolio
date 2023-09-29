import mongoose from "mongoose";
import jwt from "jsonwebtoken";

// Assuming you have a User model like this
// const User = mongoose.model('User', new mongoose.Schema({
//   email: String,
//   password: String,
//   isVerified: Boolean
// }));

export async function GET(request) {
  const { token } = request.query;

  try {
    const { userId } = jwt.verify(token, process.env.JWT_SECRET);

    // Verify user in DB
    let user = await User.findById(userId);
    if (!user) {
      return new Response("Invalid token", { status: 400 });
    }

    user.isVerified = true;
    await user.save();

    return new Response("Email verified", { status: 200 });
  } catch (err) {
    return new Response("Verification error", { status: 400 });
  }
}
