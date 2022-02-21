import express from "express";
export const authRouter = express.Router();

import { register, login, updateUser } from "../controllers/authControllers.js";

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.patch("/updateUser", updateUser);
