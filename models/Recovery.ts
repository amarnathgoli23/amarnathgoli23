import Joi from "joi";
import mongoose from "mongoose";
import { RecoveryStateInterface } from "../interfaces/Reports";

const recoveryStateSchema = new mongoose.Schema<RecoveryStateInterface>({
 "DATE IN": {
  type: String,
  required: true,
 },
 "TYPE INFO RECD BY REC": {
  type: String,
  required: true,
 },
 "UNIT REGNO MAKE&CAS TYPE": {
  type: String,
  required: true,
 },
 "INFO RECD BY(TELE/RADIO/SIG/COURSE)": {
  type: String,
  required: true,
 },
 "TIME BY ROC TO REACH SITE OF CAS": {
  type: String,
  required: true,
 },
 "TIME REQD FOR REC (HRS)": {
  type: String,
  required: true,
 },
 "NO AND TYPE OF REC USED": {
  type: String,
  required: true,
 },
 "MANPOWER EQPT TRADE WISE": {
  type: String,
  required: true,
 },
 "CAS REPAIRED AFTER REC (YES/NO)": {
  type: String,
  required: true,
 },
 "DETAILS OF SPARES FITTED IN CAS": {
  type: String,
  required: true,
 },
 "SIT REP RAISED (YES/NO) (SIT REP NO IF RAISED)": {
  type: String,
  required: true,
 },
});

export const validateRecoveryState = (work: RecoveryStateInterface) => {
 const schema = Joi.object({
  "DATE IN": Joi.string().required(),
  "UNIT REGNO MAKE&CAS TYPE": Joi.string().required(),
  "TYPE INFO RECD BY REC": Joi.string().required(),
  "INFO RECD BY(TELE/RADIO/SIG/COURSE)": Joi.string().required(),
  "TIME BY ROC TO REACH SITE OF CAS": Joi.string().required(),
  "TIME REQD FOR REC (HRS)": Joi.string().required(),
  "NO AND TYPE OF REC USED": Joi.string().required(),
  "MANPOWER EQPT TRADE WISE": Joi.string().required(),
  "CAS REPAIRED AFTER REC (YES/NO)": Joi.string().required(),
  "DETAILS OF SPARES FITTED IN CAS": Joi.string().required(),
  "SIT REP RAISED (YES/NO) (SIT REP NO IF RAISED)": Joi.string().required(),
 });

 return schema.validate(work);
};

const RecoveryState = mongoose.model<RecoveryStateInterface>(
 "RecoveryState",
 recoveryStateSchema
);
export default RecoveryState;
