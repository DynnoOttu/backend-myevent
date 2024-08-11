const mongoose = require("mongoose");
const { model, Schema } = mongoose;

let categorySchema = Schema(
  {
    name: {
      type: String,
      minLength: [3, "Name must be at least 3 character long"],
      maxLength: [20, "Name must be at most 20 character long"],
      required: [true, "Name is required"],
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

module.exports = model("category", categorySchema);
