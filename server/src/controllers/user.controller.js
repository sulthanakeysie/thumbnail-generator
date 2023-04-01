import UserSchema from "../models/user.model.js";
import bcrypt from "bcrypt";
import crypto from "crypto";

const register = async (req, res) => {
  try {
    const userExists = await checkUserExists(req.body.email);
    if (userExists) {
      return res.status(400).json({
        message: "User already registered. Please login to continue.",
      });
    }
    const hashedPassword = await hashPassword(req.body.password);
    const apiKey = generateApiKey();

    const newUser = await createUser(
      req.body.name,
      req.body.email,
      hashedPassword,
      apiKey
    );

    return res.status(200).json({
      success: true,
      message: "User registered successfully",
      user: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const user = await UserSchema.findOne({ email: req.body.email });
    if (user) {
      const isMatched = await bcrypt.compare(req.body.password, user.password);
      if (isMatched) {
        return res.status(200).json({
          success: true,
          user: user,
        });
      }
    }
    return res.status(400).json({ message: "Invalid credentials." });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An error occurred while logging in.",
      error: error.message,
    });
  }
};

const generateApiKey = () => {
  return crypto.randomBytes(16).toString("hex");
};

const checkUserExists = async (email) => {
  const existingUser = await UserSchema.findOne({ email });
  return Boolean(existingUser);
};

const hashPassword = async (password) => {
  return bcrypt.hash(password, 10);
};

const createUser = async (name, email, password, api_key) => {
  const newUser = new UserSchema({ name, email, password, api_key });
  await newUser.save();
  return newUser;
};
export { register, login };
