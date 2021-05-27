import Activities from "../models/activitiesModel.js";
import asyncHandler from "express-async-handler";

// @desc    Adding a task
// @route   POST /api/activities

const addActivities = asyncHandler(async (req, res) => {
  const { activity, player, cell } = req.body;

  const log = await Activities.create({
    activity,
    player,
    cell,
  });

  if (log) {
    res.status(201).json({
      active: log.activity,
      player: log.player,
      cell: log.cell,
    });
  } else {
    res.status(400);
    throw new Error("Invalid data");
  }
});

// @desc    Get all activities
// @route   GET /api/activities
const getActivities = asyncHandler(async (req, res) => {
  const activities = await Activities.find({});
  res.json(activities);
});

// @desc    Delete all actvities
// @route   DELETE /api/actvities
const deleteActivities = asyncHandler(async (req, res) => {
  const activities = await Activities.deleteMany();

  if (activities) {
    res.json({ message: "activities removed" });
  } else {
    res.status(404);
    throw new Error("activities not found");
  }
});

export { addActivities, getActivities, deleteActivities };
