import mongoose from "mongoose";

const activitiesSchema = mongoose.Schema(
  {
    activity: {
      type: String,
      required: true,
    },
    player: {
      type: String,
    },
    cell: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Activities = mongoose.model("Activities", activitiesSchema);

export default Activities;
