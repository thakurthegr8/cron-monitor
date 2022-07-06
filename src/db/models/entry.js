import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MonitorSchema = new Schema(
  {
    monitorName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Monitor =
  mongoose.models.Monitor || mongoose.model("Monitor", MonitorSchema);

export default Monitor;
