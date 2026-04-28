import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  preferences: {
    notifications: {
      email: String,
      routeAlerts: String,
      productUpdates: Boolean,
    },
    privacy: {
      showProfile: Boolean,
      shareActivity: Boolean,
    },
    theme: String,
  },
  contribution: Number,
  profileUrl: String,
  points: Number,
  totalSpent: Number,
  id: String,
  rank: Number,
  token: String,
});

export const User = mongoose.model("user_details", userSchema);
