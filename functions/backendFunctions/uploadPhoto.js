import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import os from "os";
import path from "path";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export const uploadPhoto = async (file) => {
  console.log("entering upload photo function");
  const tmpFilePath = path.join(os.tmpdir(), file.name);
  tmpFilePath && console.log("tmpFilePath - ", tmpFilePath);
  const arrayBuffer = await file.arrayBuffer();
  arrayBuffer && console.log("arrayBuffer - ", arrayBuffer);
  const buffer = Buffer.from(arrayBuffer);
  buffer && console.log("buffer - ", buffer);
  await fs.promises.writeFile(tmpFilePath, buffer);
  const result = await cloudinary.uploader.upload(tmpFilePath);
  result && console.log("result - ", result);
  const photoUrl = result.secure_url;
  console.log("photoUrl - ", result?.secure_url);
  await fs.promises.unlink(tmpFilePath);
  return photoUrl;
};
