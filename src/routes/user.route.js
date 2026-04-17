import express from "express";
import { deleteUser, getSearchedRoutes, getSubmittedRoutes, saveSearched, submitRoute, updateUserInfo, userDetails } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/details", userDetails);

router.post("/submit-route", submitRoute);

router.post("/save-searched", saveSearched);

router.get("/get-searched-routes", getSearchedRoutes);

router.get("/get-submitted-routes", getSubmittedRoutes);

router.post("/update", updateUserInfo);

router.post("/delete", deleteUser);

export default router;