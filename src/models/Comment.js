import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        routeId: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        profileUrl: {
            type: String,
        },
    },
    { timestamps: true },
);

export const Comment = mongoose.model("comments", commentSchema)