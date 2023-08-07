import express from "express";
import { addVehicleType, getAllVehicleType } from "../controller/vehicleType";
const router = express.Router();

router.get("/", getAllVehicleType);
router.post("/", addVehicleType);
// router.put("/:id", editVehicle);
// router.delete("/:id", deleteVehicle);

export default router;
