import express from "express";
import {
 addRepairCard,
 getAllRepairCard,
 editRepairCard,
 deleteRepairCard,
} from "../controller/repairCard";
import {
 addRepair,
 deleteRepair,
 editRepair,
 getAllRepair,
} from "../controller/repair";
import {
 addRecordOfWork,
 deleteRecordOfWork,
 editRecordOfWork,
 getAllRecordOfWork,
} from "../controller/recordOfWork";
import {
 addRecurring,
 deleteRecurring,
 editRecurring,
 getAllRecurring,
} from "../controller/recurring";
import {
 addRecoveryState,
 deleteRecoveryState,
 editRecoveryState,
 getAllRecoveryState,
} from "../controller/recovery";
import {
 addState,
 deleteState,
 editState,
 getAllState,
} from "../controller/state";
const router = express.Router();

router.get("/repairCard/", getAllRepairCard);
router.post("/repairCard/", addRepairCard);
router.put("/repairCard/:id", editRepairCard);
router.delete("/repairCard/:id", deleteRepairCard);

router.get("/repair/", getAllRepair);
router.post("/repair/", addRepair);
router.put("/repair/:id", editRepair);
router.delete("/repair/:id", deleteRepair);

router.get("/recordOfWork/", getAllRecordOfWork);
router.post("/recordOfWork/", addRecordOfWork);
router.put("/recordOfWork/:id", editRecordOfWork);
router.delete("/recordOfWork/:id", deleteRecordOfWork);

router.get("/recurring/", getAllRecurring);
router.post("/recurring/", addRecurring);
router.put("/recurring/:id", editRecurring);
router.delete("/recurring/:id", deleteRecurring);

router.get("/recovery/", getAllRecoveryState);
router.post("/recovery/", addRecoveryState);
router.put("/recovery/:id", editRecoveryState);
router.delete("/recovery/:id", deleteRecoveryState);

router.get("/state/", getAllState);
router.post("/state/", addState);
router.put("/state/:id", editState);
router.delete("/state/:id", deleteState);

export default router;
