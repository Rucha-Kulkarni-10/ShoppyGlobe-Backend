import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Register user
export const userRegister = async (req, res) => {
  const { username, password, email, phone } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({
    username,
    password: hashedPassword,
    email,
    phone
  });

  try {
    await newUser.save();
    res.status(201).json({ message: "User registered successfully", success: true });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", success: false, error: error });
  }
};

// User sign-in
export const userSignin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials", success: false });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials", success: false });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.cookie("token", token, { httpOnly: true });
    res.status(200).json({ message: "User signed in successfully", success: true, token });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", success: false, error: error });
  }
};
