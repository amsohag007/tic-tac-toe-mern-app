import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";

import activitiesRoutes from "./routes/activitiesRoutes.js";

const app = express();
dotenv.config();
connectDB();

app.use(express.json());

app.use("/api/activities", activitiesRoutes);

app.get("/", (req, res) => {
  res.send("api is running");
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.green.bold
  )
);
