const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    postType: {
      type: String,
      enum: ["lost", "found"],
      required: true,
    },
    category: {
      type: String,
      enum: ["electronics", "misc", "clothing", "keys"],
      default: "misc",
    },
    imageUrl: {
      type: String,
      trim: true,
      default: "",
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    eventDate: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ["open", "closed"],
      default: "open",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Item", ItemSchema);
