import getUrl from "functions/frontendFunctions/getUrl";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

export const createToken = (data, expiresIn) => {
  const JWT_SECRET = process.env.JWT_SECRET;
  const shouldExpireIn = expiresIn ? { expiresIn } : {};
  const token = jwt.sign(data, JWT_SECRET, shouldExpireIn);
  return token;
};

let transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.BREVIO_SMTP_USER,
    pass: process.env.BREVIO_SMTP_PASSWORD,
  },
});

export const verifyEmail = async (user) => {
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "3h",
  });
  const URL = getUrl();
  let mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: user.email,
    subject: "Please verify your email",
    html: `
          <div style="background-color:#f9f9f9;width:100%;padding:20px 0;">
            <div style="max-width:540px;margin:auto;font-family:Helvetica,Arial,sans-serif;font-size:16px;line-height:1.5;text-align:left">
              <div style="background-color:#ffffff;border-radius:8px;padding:40px 40px;color:black;">
                <h2 style="color:#FF4E00;margin-top:0;">Welcome to DevFolio!</h2>
                <p>Dear ${user.name},</p>
                <p>Thank you for signing up! Please verify your email address to activate your account.</p>
                <div style="margin:40px 0;">
                  <a href="${URL}/api/users/verifyEmail?token=${token}" style="background-color:#FF4E00;color:#ffffff;padding:10px 20px;border-radius:4px;text-decoration:none">Verify Email</a>
                </div>
                <p>If you did not sign up for this account, you can ignore this email and the account will not be activated.</p>
                <p>Best regards,<br>DevFolio</p>
              </div>
            </div>
          </div>`,
  };
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Email sent: " + info.response);
        resolve("Email sent");
      }
    });
  });
};

export const verify = (token) => {
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  if (!decodedToken) throw new Error("Invalid token");
  return decodedToken;
};
