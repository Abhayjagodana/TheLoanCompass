import mongoose from "mongoose";

const JobApplicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  number: { type: String, required: true },
  email: { type: String, required: true },
  job_type: { type: [String], default: [] },
  message: { type: String },
  createdAt: { type: Date, default: Date.now },
});

// Prevent recompilation in dev mode
export default mongoose.models.JobApplication || mongoose.model("JobApplication", JobApplicationSchema);
