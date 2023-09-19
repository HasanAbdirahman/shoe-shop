const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema(
  {
    first_name: String,
    last_name: String,
    email: {
      trim: true,
      type: String,
      unique: [true, "Email already exist"],
      required: true,
    },
    password: {
      min: 7,
      max: 20,
      type: String,
      required: true,
    },
    confirm: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
      enum: ["admin", "user"],
    },
  },
  {
    timestamps: true,
  }
);

module.export = mongoose.model("User", userSchema);
