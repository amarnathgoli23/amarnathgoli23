import Joi from "joi";
import mongoose from "mongoose";
import { RepairInterface } from "../interfaces/Reports";

const repairSchema = new mongoose.Schema<RepairInterface>({
 "DATE IN": {
  type: String,
  required: true,
 },
 "CG/CT": {
  type: String,
  required: true,
 },
 "UNIT/COMBAT GROUP": {
  type: String,
  required: true,
 },
 "CREW DETAILS": {
  type: String,
  required: true,
 },
 "SPARES HELD": {
  type: String,
  required: true,
 },
 "SMTS HELD": {
  type: String,
  required: true,
 },
 "KM RUN": {
  type: String,
  required: true,
 },
 "ENG HRS": {
  type: String,
  required: true,
 },
 REMARKS: {
  type: String,
  required: true,
 },
});

export const validateRepair = (repair: RepairInterface) => {
 const schema = Joi.object({
  "DATE IN": Joi.string().required(),
  "CG/CT": Joi.string().required(),
  "UNIT/COMBAT GROUP": Joi.string().required(),
  "CREW DETAILS": Joi.string().required(),
  "SPARES HELD": Joi.string().required(),
  "SMTS HELD": Joi.string().required(),
  "KM RUN": Joi.string().required(),
  "ENG HRS": Joi.string().required(),
  REMARKS: Joi.string().required(),
 });

 return schema.validate(repair);
};

const Repair = mongoose.model<RepairInterface>("RepairREC", repairSchema);
export default Repair;
