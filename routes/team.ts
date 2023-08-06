import express from "express";
import { addTeam, getAllTeam, getTeamByTitle } from "../controller/team";
const router = express.Router();

router.get("/", getAllTeam);
router.get("/:title", getTeamByTitle);
router.post("/", addTeam);
// router.put("/:id", editVehicle);
// router.delete("/:id", deleteVehicle);

export default router;
