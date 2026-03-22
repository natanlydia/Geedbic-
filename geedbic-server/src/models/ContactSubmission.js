const mongoose = require("mongoose");

const contactSubmissionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 160,
    },
    message: {
      type: String,
      required: true,
      trim: true,
      maxlength: 3000,
    },
  },
  {
    timestamps: true,
  },
);

module.exports =
  mongoose.models.ContactSubmission ||
  mongoose.model("ContactSubmission", contactSubmissionSchema);
