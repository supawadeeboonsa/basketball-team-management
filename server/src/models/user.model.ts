import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: [
        "admin",
        "coach",
        "player",
        "guest"
      ],
      default: "player",
    },
  },
  {
    timestamps: true,
  }
);


const User = mongoose.model(
  "User",
  userSchema
);


export default User;