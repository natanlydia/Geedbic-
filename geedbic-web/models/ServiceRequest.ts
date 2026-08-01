import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    fullName:           { type: String, required: true, trim: true, maxlength: 120 },
    email:              { type: String, required: true, trim: true, lowercase: true, maxlength: 160 },
    phone:              { type: String, trim: true, maxlength: 80, default: "" },
    companyName:        { type: String, trim: true, maxlength: 160, default: "" },
    service:            { type: String, required: true, trim: true, maxlength: 120 },
    budgetRange:        { type: String, trim: true, maxlength: 120, default: "" },
    timeline:           { type: String, trim: true, maxlength: 120, default: "" },
    projectDescription: { type: String, required: true, trim: true, maxlength: 4000 },
  },
  { timestamps: true },
);

export default mongoose.models.ServiceRequest ||
  mongoose.model("ServiceRequest", schema);
