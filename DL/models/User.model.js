const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
  occupation: { type: String, required: true },
  about: { type: String, required: true },
  photo: { type: String, required: false },
  links: [{ href: { type: String }, name: { type: String } }],
  portfolioLink: { type: String },
  isVerified: { type: Boolean, default: false },
  totalLikes: { type: String, default: 0 },
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
