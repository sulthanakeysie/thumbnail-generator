import UserSchema from "../models/user.model.js";

export const authenticateApiKey = (req, res, next) => {
  const apiKey = req.header("api-key");
  if (!apiKey) res.status(401).json({ message: "API key missing" });
  const user = UserSchema.find((u) => u.apiKey === apiKey);
  if (!user) res.status(401).json({ message: "Invalid API key" });
  req.user = user;

  next();
};
