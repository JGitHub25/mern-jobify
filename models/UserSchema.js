import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a valid name."],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide a valid email."],
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email.",
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a valid password."],
    minlength: 6,
  },
  lastName: {
    type: String,
    required: [true, "Please provide a valid last name."],
    maxlength: 20,
    default: "last name",
  },
  location: {
    type: String,
    required: [true, "Please provide a valid location."],
    trim: true,
    maxlength: 20,
    default: "my city",
  },
});

export const UserModel = mongoose.model("User", UserSchema);
