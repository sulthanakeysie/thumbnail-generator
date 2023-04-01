import UserSchema from "../models/user.model.js";

export const authenticateApiKey = async (req, res, next) => {
  const apiKey = req.header("Authorization");
  if (!apiKey) res.status(401).json({ message: "API key missing" });
  const user = await UserSchema.findOne({ api_key: apiKey });
  if (!user) res.status(401).json({ message: "Invalid API key" });
  req.user = user;

  next();
};
