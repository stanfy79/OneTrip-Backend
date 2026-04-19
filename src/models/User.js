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

const submittedRouteSchema = new mongoose.Schema({
  from: String,
  to: String,
  transportMode: String,
  amount: String,
  contributor: String,
  timeOfTrip: {
    start: String,
    end: String,
    timeUnit: String,
    duration: Object,
  },
  timeOfDay: String,
});

const searchedRouteSchema = new mongoose.Schema({
  from: String,
  to: String,
  contributor: String,
  routeDetails: Object,
  key: String,
  date: Object,
  time: Object,
});

export const User = mongoose.model("user_details", userSchema);
export const SubmitRoute = mongoose.model("submitted_routes", submittedRouteSchema);
export const SearchedRoute = mongoose.model("searched_routes", searchedRouteSchema);
