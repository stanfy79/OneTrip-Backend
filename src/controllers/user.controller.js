
import { User, SubmitRoute, SearchedRoute } from "../models/User.js";

export const userDetails = async (req, res) => {
  try {
    const { _id } = req.body;

    // Validate that required fields are provided
    if (!_id) {
      return res.status(400).json({
        success: false,
        message: "Token is required!",
      });
    }

    const user = await User.findOne({ _id });

    if (!user) {
      return res.status(409).json({
        success: false,
        message: "Invalid token!",
      });
    }

    res.status(201).json({
      success: true,
      data: user,
      message: "fetched user successfully!",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

export const submitRoute = async (req, res) => {
  try {
    // Add new submitted route
    const route = await SubmitRoute.create(req.body);
    res.status(201).json({
      success: true,
      data: route,
      message: "Route submitted successfully!",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

export const saveSearched = async (req, res) => {
  try {
    // Add new submitted route
    const route = await SearchedRoute.create(req.body);
    res.status(201).json({
      success: true,
      data: route,
      message: "Route submitted successfully!",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

export const getSearchedRoutes = async (req, res) => {
  try {
    const route = await SearchedRoute.find();

    res.status(201).json({
      success: true,
      data: route,
      message: "fetched routes successfully!",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

export const getSubmittedRoutes = async (req, res) => {
  try {
    const route = await SubmitRoute.find();

    res.status(201).json({
      success: true,
      data: route,
      message: "fetched routes successfully!",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

export const updateUserInfo = async (req, res) => {
  try {
    const { updatedUser } = req.body;

    const filter = { _id: updatedUser._id };

    const updateDocument = {
      $set: updatedUser,
    };
    const result = await User.updateOne(filter, updateDocument);

    res.status(201).json({
        success: true,
        data: result,
        message: "User data updated successfully!",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

export const deleteUser = async (req, res) => {
  try {
    const { user } = req.body;

    const filter = { token: user.token };

    const updateDocument = {
      $set: user,
    };
    const result = await User.deleteOne(filter, updateDocument);

    res.status(201).json({
        success: true,
        data: result,
        message: "User deleted successfully!",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}
