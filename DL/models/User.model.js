const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true, select: false },
  password: { type: String, required: true },
  occupation: { type: String, default: false },
  about: { type: String, required: true },
  img: { type: String, required: false },
  links: [{ type: Boolean, default: false }],
  portfolioLink: { type: Boolean, default: false },
  isVerified: { type: Boolean, default: false },
});

export const User = mongoose.model("User", userSchema);
