import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import os from "os";
import path from "path";
import { Readable } from "stream";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export const uploadPhoto = async (file) => {
  try {
    console.log("entering upload photo function");
    const arrayBuffer = await file.arrayBuffer();
    console.log("arrayBuffer - ", arrayBuffer);
    const buffer = Buffer.from(arrayBuffer);
    console.log("buffer - ", buffer);

    const stream = Readable.from(buffer);
    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { resource_type: "image" },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
      stream.pipe(uploadStream);
    });

    console.log("result - ", result);
    const photoUrl = result.secure_url;
    console.log("photoUrl - ", result?.secure_url);
    return photoUrl;
  } catch (error) {
    console.error("Error uploading photo:", error);
    throw new Error("Photo upload failed");
  }
};

// export const uploadPhoto = async (file) => {
//   console.log("entering upload photo function");
//   const tmpFilePath = path.join(os.tmpdir(), file.name);
//   tmpFilePath && console.log("tmpFilePath - ", tmpFilePath);
//   const arrayBuffer = await file.arrayBuffer();
//   arrayBuffer && console.log("arrayBuffer - ", arrayBuffer);
//   const buffer = Buffer.from(arrayBuffer);
//   buffer && console.log("buffer - ", buffer);
//   await fs.promises.writeFile(tmpFilePath, buffer);
//   const result = await cloudinary.uploader.upload(tmpFilePath);
//   result && console.log("result - ", result);
//   const photoUrl = result.secure_url;
//   console.log("photoUrl - ", result?.secure_url);
//   await fs.promises.unlink(tmpFilePath);
//   return photoUrl;
// };
