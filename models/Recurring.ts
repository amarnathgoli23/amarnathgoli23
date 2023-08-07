import Joi from "joi";
import mongoose from "mongoose";
import { RecurringInterface } from "../interfaces/Reports";

const recurringSchema = new mongoose.Schema<RecurringInterface>({
 "MAKE& TYPE OF EQPT": {
  type: String,
  required: true,
 },
 "FAULT OBSERVED": {
  type: String,
  required: true,
 },
 SYSTEM: {
  type: String,
  required: true,
 },
 "NO OF INCIDENCES": {
  type: String,
  required: true,
 },
 "PROBALE REASON": {
  type: String,
  required: true,
 },
 "ACTION TAKEN": {
  type: String,
  required: true,
 },
 REMARKS: {
  type: String,
  required: true,
 },
});

export const validateRecurring = (recurring: RecurringInterface) => {
 const schema = Joi.object({
  "MAKE& TYPE OF EQPT": Joi.string().required(),
  "FAULT OBSERVED": Joi.string().required(),
  SYSTEM: Joi.string().required(),
  "NO OF INCIDENCES": Joi.string().required(),
  "PROBALE REASON": Joi.string().required(),
  "ACTION TAKEN": Joi.string().required(),
  REMARKS: Joi.string().required(),
 });

 return schema.validate(recurring);
};

const Recurring = mongoose.model<RecurringInterface>(
 "Recurring",
 recurringSchema
);
export default Recurring;
