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
  const tmpFilePath = path.join(os.tmpdir(), file.name);
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  await fs.promises.writeFile(tmpFilePath, buffer);
  const result = await cloudinary.uploader.upload(tmpFilePath);
  const photoUrl = result.secure_url;
  await fs.promises.unlink(tmpFilePath);
  return photoUrl;
};
