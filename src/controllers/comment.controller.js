import { Comment } from "../models/Comment.js";

export const postComment = async (req, res) => {
    try {
        const post = await Comment.create(req.body);

        res.status(201).json({
            success: true,
            data: post,
            message: "Comment Posted successfully!",
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

export const getComment = async (req, res) => {
    try {
        const { routeId } = req.body;

        if (!routeId) {
            return res.status(400).json({
                success: false,
                message: "Route Id is required!",
            });
        }

        const filter = { routeId: routeId}

        const comments = await Comment.find(filter);

        res.status(201).json({
            success: true,
            data: comments,
            message: "Comments fetched successfully!",
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}