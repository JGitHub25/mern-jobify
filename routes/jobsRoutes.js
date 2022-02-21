import express from "express";
export const jobsRouter = express.Router();
import {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  showStats,
} from "../controllers/jobsControllers.js";

jobsRouter.get("/", getAllJobs);
jobsRouter.post("/", createJob);
jobsRouter.get("/stats", showStats);
jobsRouter.patch("/:id", updateJob);
jobsRouter.delete("/:id", deleteJob);
