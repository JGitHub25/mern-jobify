import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./db/connectDB.js";

//Middleware
import { notFoundMiddleware } from "./middleware/not-found.js";
import { errorHandlerMiddleware } from "./middleware/errorHandler.js";

app.get("/", (req, res) => {
  res.send("Welcome friend!");
});

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
