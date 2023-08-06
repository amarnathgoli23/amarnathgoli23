import express from "express";
import { addGroup, getAllGroup, getGroupByTitle } from "../controller/group";
const router = express.Router();

router.get("/", getAllGroup);
router.get("/:title", getGroupByTitle);
router.post("/", addGroup);
// router.put("/:id", editVehicle);
// router.delete("/:id", deleteVehicle);

export default router;
