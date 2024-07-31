const mongoose = require("mongoose");
const { model, Schema } = mongoose;
const bcrypt = require("bcrypt");

let usersSchema = Schema(
  {
    name: {
      type: String,
      minLength: [3, "Name must be at least 3 character long"],
      maxLength: [30, "Name must be at most 20 character long"],
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      minLength: [3, "Email must be at least 3 character long"],
      maxLength: [20, "Email must be at most 20 character long"],
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      minLength: [6, "Password must be at least 3 character long"],
      maxLength: [30, "Password must be at most 20 character long"],
      required: [true, "Password is required"],
    },
    role: {
      type: String,
      enum: ["admin", "organizer", "owner"],
      default: ["admin"],
    },
    organizer: {
      type: mongoose.Types.ObjectId,
      ref: "Organizer",
      required: [true, "Organizer is required"],
    },
  },
  {
    timestamps: true,
  }
);

usersSchema.pre("save", async function (next) {
  const Users = this;
  if (Users.isModified("password")) {
    Users.password = await bcrypt.hash(Users.password, 12);
  }
  next();
});

usersSchema.methods.comparePassword = async function (canditatePassword) {
  const isMatch = await bcrypt.compare(canditatePassword, this.password);
  return isMatch;
};

module.exports = model("Users", usersSchema);
