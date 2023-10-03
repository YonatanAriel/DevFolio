const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
  occupation: { type: String, default: false },
  about: { type: String, required: true },
  photo: { type: String, required: false },
  links: [{ type: String, default: false }],
  portfolioLink: { type: String, default: false },
  isVerified: { type: Boolean, default: false },
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
