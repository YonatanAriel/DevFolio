import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import connectToDB from "../../../../DL/connectToDB";
import { User } from "../../../../DL/models/User.model";
import nodemailer from "nodemailer";
import fs from "fs";
import os from "os";
import path from "path";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

// let transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.NODEMAILER_EMAIL,
//     pass: process.env.NODEMAILER_PASSWORD,
//   },
// });

let transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.BREVIO_SMTP_USER,
    pass: process.env.BREVIO_SMTP_PASSWORD,
  },
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
      photoUrl = await uploadProfilePhoto(file);
    }

    await connectToDB();
    const isUserAlreadyExist = await User.findOne({
      email: formData.get("email"),
    });
    if (isUserAlreadyExist) {
      return new NextResponse(JSON.stringify("User already exist"), {
        status: 400,
      });
    }
    const newUser = await storeUserInMongoDB(formData, photoUrl);
    verifyEmail(newUser);
    // const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
    //   expiresIn: "1h",
    // });
    // let mailOptions = {
    //   from: process.env.BREVIO_SMTP_USER,
    //   to: newUser.email,
    //   subject: "Please verify your email",
    //   html: `
    //       <div style="background-color:#f9f9f9;width:100%;padding:20px 0;">
    //         <div style="max-width:540px;margin:auto;font-family:Helvetica,Arial,sans-serif;font-size:16px;line-height:1.5;text-align:left">
    //           <div style="background-color:#ffffff;border-radius:8px;padding:40px 40px;color:#174b7a">
    //             <h2 style="color:#174b7a;margin-top:0;">Welcome to Our App!</h2>
    //             <p>Dear ${newUser.name},</p>
    //             <p>Thank you for signing up! Please verify your email address to activate your account.</p>
    //             <div style="margin:40px 0;text-align:center">
    //               <a href="${process.env.BASE_URL}/api/users/verifyEmail?token=${token}" style="background-color:#174b7a;color:#ffffff;padding:10px 20px;border-radius:4px;text-decoration:none">Verify Email</a>
    //             </div>
    //             <p>If you did not sign up for this account, you can ignore this email and the account will not be activated.</p>
    //             <p>Best regards,<br>DevFolio</p>
    //           </div>
    //         </div>
    //       </div>`,
    // };
    // transporter.sendMail(mailOptions, (error, info) => {
    //   if (error) {
    //     console.log(error);
    //     return new NextResponse(JSON.stringify(error), { status: 200 });
    //   } else {
    //     console.log("Email sent: " + info.response);
    //   }
    // });
    return new NextResponse(JSON.stringify(newUser), { status: 200 });
  } catch (err) {
    console.log(err);
  }
}

const uploadProfilePhoto = async (file) => {
  const tmpFilePath = path.join(os.tmpdir(), file.name);
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  await fs.promises.writeFile(tmpFilePath, buffer);
  const result = await cloudinary.uploader.upload(tmpFilePath);
  const photoUrl = result.secure_url;
  await fs.promises.unlink(tmpFilePath);
  return photoUrl;
};

const storeUserInMongoDB = async (formData, photoUrl) => {
  const SALT_ROUNDS = Number(process.env.SALT_ROUNDS);
  const hashedPassword = bcrypt.hashSync(formData.get("password"), SALT_ROUNDS);
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
  return newUser;
};

const verifyEmail = (user) => {
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  console.log(token);
  let mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: user.email,
    subject: "Please verify your email",
    html: `
        <div style="background-color:#f9f9f9;width:100%;padding:20px 0;">
          <div style="max-width:540px;margin:auto;font-family:Helvetica,Arial,sans-serif;font-size:16px;line-height:1.5;text-align:left">
            <div style="background-color:#ffffff;border-radius:8px;padding:40px 40px;color:black;">
              <h2 style="color:#FF4E00;margin-top:0;">Welcome to Our App!</h2>
              <p>Dear ${user.name},</p>
              <p>Thank you for signing up! Please verify your email address to activate your account.</p>
              <div style="margin:40px 0;">
                <a href="${process.env.BASE_URL}/api/users/verifyEmail?token=${token}" style="background-color:#FF4E00;color:#ffffff;padding:10px 20px;border-radius:4px;text-decoration:none">Verify Email</a>
              </div>
              <p>If you did not sign up for this account, you can ignore this email and the account will not be activated.</p>
              <p>Best regards,<br>DevFolio</p>
            </div>
          </div>
        </div>`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return new NextResponse(JSON.stringify(error), { status: 200 });
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
