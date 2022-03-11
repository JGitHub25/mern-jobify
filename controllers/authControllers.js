import { UserModel } from "../models/UserSchema.js";
import { StatusCodes } from "http-status-codes";
import { BadRequest, UnauthenticatedError } from "../errors/index.js";

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

  const token = user.createJWT();

  res.status(StatusCodes.CREATED).json({
    user: {
      name: user.name,
      email: user.email,
      lastName: user.lastName,
      location: user.location,
    },
    token,
    location: user.location,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequest("Please complete all fields.");
  }

  const user = await UserModel.findOne({ email }).select("+password");

  if (!user) {
    throw new UnauthenticatedError("Invalid Credentials");
  }

  const isPasswordCorrect = await user.comparePasswords(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid Credentials");
  }

  const token = user.createJWT();

  user.password = undefined;

  res.status(StatusCodes.OK).json({ user, token, location: user.location });
};

const updateUser = async (req, res) => {
  res.send("updateUser user.");
};

export { register, login, updateUser };
