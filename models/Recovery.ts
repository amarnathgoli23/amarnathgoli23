import Joi from "joi";
import mongoose from "mongoose";
import { RecoveryStateInterface } from "../interfaces/Reports";

const recoveryStateSchema = new mongoose.Schema<RecoveryStateInterface>({
 DATE: {
  type: String,
  required: true,
 },
 "UNIT REGNO MAKE&CAS TYPE": {
  type: String,
  required: true,
 },
 "TIME INFO RECD BY REC": {
  type: Number,
  required: true,
 },
 "INFO RECD By (TELE/RADIO/SIG/COURSE)": {
  type: String,
  required: true,
 },
 "TIME BY ROC TO REACH SITE OF CAS": {
  type: String,
  required: true,
 },
 "TIME Reqd FOR REC (HRS)": {
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
 "Cas  REPAIRED AFTER REC(YES/NO)": {
  type: String,
  required: true,
 },
 "DETAILS OF SPARES FITTED IN CAS": {
  type: String,
  required: true,
 },
 "SIT REP RAISED (YES/NO)(SIT REP NO IF RAISED)": {
  type: String,
  required: true,
 },
});

export const validateRecoveryState = (work: RecoveryStateInterface) => {
 const schema = Joi.object({
  "TYPE OF EQPT": Joi.string().required(),
  DATE: Joi.string().required(),
  "UNIT REGNO MAKE&CAS TYPE": Joi.string().required(),
  "TIME INFO RECD BY REC": Joi.number().required(),
  "INFO RECD By (TELE/RADIO/SIG/COURSE)": Joi.string().required(),
  "TIME BY ROC TO REACH SITE OF CAS": Joi.string().required(),
  "TIME Reqd FOR REC (HRS)": Joi.string().required(),
  "NO AND TYPE OF REC USED": Joi.string().required(),
  "MANPOWER EQPT TRADE WISE": Joi.string().required(),
  "Cas  REPAIRED AFTER REC(YES/NO)": Joi.string().required(),
  "DETAILS OF SPARES FITTED IN CAS": Joi.string().required(),
  "SIT REP RAISED (YES/NO)(SIT REP NO IF RAISED)": Joi.string().required(),
 });

 return schema.validate(work);
};

const RecoveryState = mongoose.model<RecoveryStateInterface>(
 "RecoveryState",
 recoveryStateSchema
);
export default RecoveryState;
