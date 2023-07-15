import express from "express";
import {
 addSpares,
 deleteSpare,
 editSpare,
 getAllSpares,
} from "../controller/spares";
const router = express.Router();

router.get("/", getAllSpares);
router.post("/", addSpares);
router.put("/:id", editSpare);
router.delete("/:id", deleteSpare);

export default router;
