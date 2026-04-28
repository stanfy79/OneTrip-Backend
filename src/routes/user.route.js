import express from "express";
import { deleteUser, getSearchedRoutes, getSubmittedRoutes, saveSearched, submitRoute, updateUserInfo, userDetails, pingServer, getAllUser } from "../controllers/user.controller.js";
import { getComment, postComment } from "../controllers/comment.controller.js";

const router = express.Router();

router.post("/details", userDetails);

router.post("/submit-route", submitRoute);

router.post("/save-searched", saveSearched);

router.post("/get-all-users", getAllUser);

router.get("/get-searched-routes", getSearchedRoutes);

router.get("/get-submitted-routes", getSubmittedRoutes);

router.post("/get-comments", getComment);

router.post("/comment", postComment);

router.post("/update", updateUserInfo);

router.post("/delete", deleteUser);

router.get("/ping-server", pingServer);

export default router;