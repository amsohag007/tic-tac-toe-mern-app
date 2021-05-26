import express from "express";
const router = express.Router();
import {
  addActivities,
  deleteActivities,
  getActivities,
} from "../controlers/activitiesControler.js";

router.route("/").post(addActivities);
router.route("/").get(getActivities);
router.route("/").delete(deleteActivities);

export default router;
