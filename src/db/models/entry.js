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

const Monitor = mongoose.model("Monitors", MonitorSchema);

export default Monitor;
