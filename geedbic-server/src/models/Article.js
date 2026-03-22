const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 220,
    },
    excerpt: {
      type: String,
      required: true,
      trim: true,
      maxlength: 1000,
    },
    content: {
      type: [String],
      required: true,
      validate: {
        validator(value) {
          return Array.isArray(value) && value.length > 0;
        },
        message: "Article content is required.",
      },
    },
    category: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120,
    },
    author: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120,
    },
    date: {
      type: String,
      required: true,
      trim: true,
      maxlength: 80,
    },
  },
  {
    timestamps: true,
  },
);

module.exports =
  mongoose.models.Article || mongoose.model("Article", articleSchema);
