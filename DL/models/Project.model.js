const mongoose = require("mongoose");
const { Schema } = mongoose;

const projectSchema = new Schema({
  name: { type: "String", required: true },
  description: { type: "String", require: true },
  gitHubLink: { type: "String" },
  websiteLink: { type: "String" },
  photo: { type: "String" },
  technologies: [{ type: "String" }],
  isPortfolio: { type: "boolean", default: false },
});

export const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);
