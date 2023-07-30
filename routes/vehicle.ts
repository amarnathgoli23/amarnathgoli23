import express from "express";
import {
 addVehicle,
 deleteVehicle,
 editVehicle,
 getAllVehicles,
} from "../controller/vehicle";
const router = express.Router();

router.get("/", getAllVehicles);
router.post("/", addVehicle);
router.put("/:id", editVehicle);
router.delete("/:id", deleteVehicle);

export default router;
