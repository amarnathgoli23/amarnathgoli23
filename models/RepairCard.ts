import Joi from "joi";
import mongoose from "mongoose";
import { RepairCardInterface } from "../interfaces/Reports";

const repairCardSchema = new mongoose.Schema<RepairCardInterface>({
 "DATE IN": {
  type: String,
  required: true,
 },
 "Ba /Reg": {
  type: String,
  required: true,
 },
 "Make&type EQPT": {
  type: String,
  required: true,
 },
 "Nature of defect": {
  type: String,
  required: true,
 },
 "Repair activity": {
  type: String,
  required: true,
 },
 "Time taken to repair(min)": {
  type: String,
  required: true,
 },
 Sys: {
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
 "DD-MM-YY": {
  type: String,
  required: true,
 },
});

export const validateRepairCard = (repair: RepairCardInterface) => {
 const schema = Joi.object({
  "DATE IN": Joi.string().required(),
  "Ba /Reg": Joi.string().required(),
  "Make&type EQPT": Joi.string().required(),
  "Nature of defect": Joi.string().required(),
  "Repair activity": Joi.string().required(),
  "Time taken to repair(min)": Joi.string().required(),
  Sys: Joi.string().required(),
  SPARE: Joi.string().required(),
  QTY: Joi.number().required(),
  "DD-MM-YY": Joi.string().required(),
 });

 return schema.validate(repair);
};

const RepairCard = mongoose.model<RepairCardInterface>(
 "RepairCard",
 repairCardSchema
);
export default RepairCard;
