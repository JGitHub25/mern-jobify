import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";

import { connectDB } from "./db/connectDB.js";

//Routers
import { authRouter } from "./routes/authRoutes.js";

//Middleware
import { notFoundMiddleware } from "./middleware/not-found.js";
import { errorHandlerMiddleware } from "./middleware/errorHandler.js";
import { jobsRouter } from "./routes/jobsRoutes.js";

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome friends!");
});

app.get("/api/v1", (req, res) => {
  res.json({ msg: "Welcome friend through JSON!" });
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
