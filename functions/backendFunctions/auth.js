import jwt from "jsonwebtoken";

export const createToken = (data, expiresIn) => {
  const JWT_SECRET = process.env.JWT_SECRET;
  const token = jwt.sign(data, JWT_SECRET, { expiresIn });
  return token;
};
