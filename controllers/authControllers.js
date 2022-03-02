import { UserModel } from "../models/UserSchema.js";

const register = async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ msg: "There was an error registering the user." });
    console.log(error);
  }
};
const login = async (req, res) => {
  res.send("login user.");
};
const updateUser = async (req, res) => {
  res.send("updateUser user.");
};

export { register, login, updateUser };
