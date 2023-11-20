import { NextResponse } from "next/server";
import { uploadPhoto } from "../../../../functions/backendFunctions/uploadPhoto";
import connectToDB from "../../../../DL/connectToDB";
import { verify } from "../../../../functions/backendFunctions/auth";
import { User } from "../../../../DL/models/User.model";

export async function POST(req) {
  try {
    const token = req.headers.get("authorization").split(" ")[1];
    if (!token) throw new Error("invalid token");

    const formData = await req.formData();
    const ImgFile = await formData.get("photo");
    let photoUrl = null;
    if (ImgFile) {
      photoUrl = await uploadPhoto(ImgFile);
    }
    await connectToDB();

    const userId = await verify(token).id;
    await updateInDB(userId, formData, photoUrl);
    return new NextResponse(JSON.stringify("ccc"), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify(err), { status: 400 });
  }
}

async function updateInDB(userId, formData, photoUrl) {
  const user = await User.findById(userId);

  const fieldsToUpdate = [
    "name",
    "occupation",
    "about",
    "portfolioLink",
    "photo",
  ];
  fieldsToUpdate.forEach((field) => {
    if (formData.get(field)) {
      user.set(field, formData.get(field));
    }
  });

  if (photoUrl) {
    user.set("photo", photoUrl);
  }
  await user.save();
}
