import { User } from "../models/User.js";

export const registerUser = async (req, res) => {
  try {
    const { username, email } = req.body;

    // Validate that required fields are provided
    if (!username || !email) {
      return res.status(400).json({
        success: false,
        message: "Username and email are required",
      });
    }

    // Check if username already exists
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(409).json({
        success: false,
        message: "Username already in use. Please Login",
      });
    }

    // Check if email already exists
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(409).json({
        success: false,
        message: "Email already in use. Please Login!",
      });
    }

    // Create new user
    const user = await User.create(req.body);
    res.status(201).json({
      success: true,
      data: user,
      message: "Account created successfully!",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

export const loginUser = async (req, res) => {
  try {
    const { password, email } = req.body;

    // Validate that required fields are provided
    if (!password || !email) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(409).json({
        success: false,
        message: "Email or password is incorrect!",
      });
    }

    if (user.password !== password) {
      return res.status(409).json({
        success: false,
        message: "Email or password is incorrect!",
      });
    }

    res.status(201).json({
      success: true,
      data: user,
      message: "Login successful!",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}