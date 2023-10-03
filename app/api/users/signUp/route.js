import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import connectToDB from "../../../../DL/connectToDB";
import { User } from "../../../../DL/models/User.model";

import fs from "fs";
import os from "os";
import path from "path";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = await formData.get("photo");
    let photoUrl = "";
    if (file) {
      const tmpFilePath = path.join(os.tmpdir(), file.name);
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      await fs.promises.writeFile(tmpFilePath, buffer);
      const result = await cloudinary.uploader.upload(tmpFilePath);
      photoUrl = result.secure_url;
      await fs.promises.unlink(tmpFilePath);
      console.log(photoUrl);
    }

    await connectToDB();
    const isUserAlreadyExist = await User.findOne({
      email: formData.get("email"),
    });
    if (isUserAlreadyExist) throw new Error("User already exist");
    const SALT_ROUNDS = Number(process.env.SALT_ROUNDS);
    const hashedPassword = bcrypt.hashSync(
      formData.get("password"),
      SALT_ROUNDS
    );
    const user = {
      name: formData.get("name"),
      email: formData.get("email"),
      occupation: formData.get("occupation"),
      about: formData.get("about"),
      password: hashedPassword,
      photo: photoUrl,
      portfolioLink: formData.get("portfolioLink"),
      links: formData.getAll("links"),
      isVerified: false,
    };
    const newUser = await User.create(user);
    console.log(newUser);
  } catch (err) {
    console.log(err);
  }
  // const nodemailer = require("nodemailer");

  // let transporter = nodemailer.createTransport({
  //   service: "gmail",
  //   auth: {
  //     user: "your-email@gmail.com",
  //     pass: "your-password",
  //   },
  // });
  //     const token = createToken({userName: newUser.userName})
  //     return token
  // }

  // Create a verification token
  // const token = jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET, {
  //   expiresIn: "1d",
  // });
  // let mailOptions = {
  //   from: '"Your Name" <your-email@gmail.com>',
  //   to: newUser.email,
  //   subject: "Please verify your email",
  //   html: `
  //     <div style="background-color:#f9f9f9;width:100%;padding:20px 0;">
  //       <div style="max-width:540px;margin:auto;font-family:Helvetica,Arial,sans-serif;font-size:16px;line-height:1.5;text-align:left">
  //         <div style="background-color:#ffffff;border-radius:8px;padding:40px 40px;color:#174b7a">
  //           <h2 style="color:#174b7a;margin-top:0;">Welcome to Our App!</h2>
  //           <p>Dear ${newUser.name},</p>
  //           <p>Thank you for signing up! Please verify your email address to activate your account.</p>
  //           <div style="margin:40px 0;text-align:center">
  //             <a href="${process.env.BASE_URL}/api/users/verifyEmail?token=${token}" style="background-color:#174b7a;color:#ffffff;padding:10px 20px;border-radius:4px;text-decoration:none">Verify Email</a>
  //           </div>
  //           <p>If you did not sign up for this account, you can ignore this email and the account will not be activated.</p>
  //           <p>Best regards,<br>Your Name</p>
  //         </div>
  //       </div>
  //     </div>`,
  // };
  // // Send validation email

  // transporter.sendMail(mailOptions, (error, info) => {
  //   if (error) {
  //     console.log(`Error occurred: ${error.message}`);
  //     return process.exit(1);
  //   }

  //   console.log("Message sent successfully!");
  //   console.log(nodemailer.getTestMessageUrl(info));
  // });

  // return new Response(JSON.stringify(body), { status: 200 });
  return new NextResponse(1, { status: 200 });
}
