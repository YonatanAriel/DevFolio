import jwt from "jsonwebtoken";
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-password",
  },
});
// ... other imports
export async function POST(req) {
  console.log(req.body);
  // Validate user input and create new user in DB
  // ...

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

  return new Response(JSON.stringify(req.body), { status: 200 });
}
