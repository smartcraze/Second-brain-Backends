import express from "express";
import dbConnect from "./db/dbconnect";
import { userRouter } from "./routes/user";
import { contentsRouter } from "./routes/contents";
import { LinksRouter } from "./routes/brain";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
dbConnect();
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/contents", contentsRouter);
app.use("/api/v1/brain", LinksRouter);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

export default app;
