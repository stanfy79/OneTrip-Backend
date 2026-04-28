import mongoose from "mongoose";

const searchedRouteSchema = new mongoose.Schema({
  from: String,
  to: String,
  contributor: String,
  routeDetails: Object,
  key: String,
  date: Object,
  time: Object,
});

export const SearchedRoute = mongoose.model("searched_routes", searchedRouteSchema);