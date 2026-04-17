import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

app.listen(5001, function () {
  console.log("Listening on 5001");
});
