import express from "express";
import { addCommand, getAllCommand } from "../controller/command";
const router = express.Router();

router.get("/", getAllCommand);
router.post("/", addCommand);
// router.put("/:id", editVehicle);
// router.delete("/:id", deleteVehicle);

export default router;
