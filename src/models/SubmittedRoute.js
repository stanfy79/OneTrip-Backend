import mongoose from "mongoose";

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

export const SubmitRoute = mongoose.model("submitted_routes", submittedRouteSchema);