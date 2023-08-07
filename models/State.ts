import Joi from "joi";
import mongoose from "mongoose";
import { StateInterface } from "../interfaces/Reports";

const stateSchema = new mongoose.Schema<StateInterface>({
 "DATE IN": {
  type: String,
  required: true,
 },
 "BA/REG": {
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
 "MUA DEMANDED": {
  type: String,
  required: true,
 },
 "PRESENT STATE": {
  type: String,
  required: true,
 },
 REMARKS: {
  type: String,
  required: true,
 },
});

export const validateRepairCardInterface = (state: StateInterface) => {
 const schema = Joi.object({
  "DATE IN": Joi.string().required(),
  "BA/REG": Joi.string().required(),
  "MAKE&TYPE EQPT": Joi.string().required(),
  "NATURE OF DEFECT": Joi.string().required(),
  "MUA DEMANDED": Joi.string().required(),
  "PRESENT STATE": Joi.string().required(),
  REMARKS: Joi.string().required(),
 });

 return schema.validate(state);
};

const State = mongoose.model<StateInterface>("State", stateSchema);
export default State;
