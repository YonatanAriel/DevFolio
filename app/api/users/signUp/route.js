import bcrypt from "bcrypt";
import connectToDB from "../../../../DL/connectToDB";
import { NextResponse } from "next/server";
import { User } from "../../../../DL/models/User.model";
import { verifyEmail } from "../../../../functions/backendFunctions/auth";
import { uploadPhoto } from "../../../../functions/backendFunctions/uploadPhoto";

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
      photoUrl = await uploadPhoto(file);
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
    await verifyEmail(newUser);

    return new NextResponse(JSON.stringify("Email sent"), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify("Unexpected error"), {
      status: 400,
    });
  }
}

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
