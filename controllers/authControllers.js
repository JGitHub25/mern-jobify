import { UserModel } from "../models/UserSchema.js";
import { StatusCodes } from "http-status-codes";
import { BadRequest } from "../errors/index.js";

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequest("Please provide all fields.");
  }

  const userAlreadyExists = await UserModel.findOne({ email });
  if (userAlreadyExists) {
    throw new BadRequest("Email already in use");
  }

  const user = await UserModel.create({ name, email, password });

  res.status(StatusCodes.CREATED).json({ user });
};

const login = async (req, res) => {
  res.send("login user.");
};

const updateUser = async (req, res) => {
  res.send("updateUser user.");
};

export { register, login, updateUser };
