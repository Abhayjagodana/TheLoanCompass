import mongoose from "mongoose";

const JobApplicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  number: { type: String, required: true },
  email: { type: String, required: true },
  job_type: { type: [String], default: [] },
  message: { type: String },
resume: {
      filename: { type: String, required: true }, // saved filename
      originalName: { type: String, required: true }, // original uploaded filename
      path: { type: String, required: true }, // file path on server
    },
  createdAt: { type: Date, default: Date.now },
});

// Prevent recompilation in dev mode
export default mongoose.models.JobApplication || mongoose.model("JobApplication", JobApplicationSchema);
