import Joi from "joi";
import mongoose from "mongoose";
import { RepairCardInterface } from "../interfaces/Reports";

const repairCardSchema = new mongoose.Schema<RepairCardInterface>({
 "DATE IN": {
  type: String,
  required: true,
 },
 "BA /Reg": {
  type: String,
  required: true,
 },
 "UNIT/COMBAT GROUP": {
  type: String,
  required: true,
 },
 "MAKE&TYPE EQPT": {
  type: String,
  required: true,
 },
 "NATURE OF DEFECT": {
  type: String,
  required: true,
 },
 "REPAIR ACTIVITY": {
  type: String,
  required: true,
 },
 "TIME TAKEN TO REPAIR(MIN)": {
  type: String,
  required: true,
 },
 SYS: {
  type: String,
  required: true,
 },
 SPARE: {
  type: String,
  required: true,
 },
 QTY: {
  type: Number,
  required: true,
 },
 "DATE OUT": {
  type: String,
  required: true,
 },
});

export const validateRepairCard = (repair: RepairCardInterface) => {
 const schema = Joi.object({
  "DATE IN": Joi.string().required(),
  "BA /Reg": Joi.string().required(),
  "UNIT/COMBAT GROUP": Joi.string().required(),
  "MAKE&TYPE EQPT": Joi.string().required(),
  "NATURE OF DEFECT": Joi.string().required(),
  "REPAIR ACTIVITY": Joi.string().required(),
  "TIME TAKEN TO REPAIR(MIN)": Joi.string().required(),
  SYS: Joi.string().required(),
  SPARE: Joi.string().required(),
  QTY: Joi.number().required(),
  "DATE OUT": Joi.string().required(),
 });

 return schema.validate(repair);
};

const RepairCard = mongoose.model<RepairCardInterface>(
 "RepairCard",
 repairCardSchema
);
export default RepairCard;
