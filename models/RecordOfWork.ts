import Joi from "joi";
import mongoose from "mongoose";
import { RecordOfWorkInterface } from "../interfaces/Reports";

const recordOfWorkSchema = new mongoose.Schema<RecordOfWorkInterface>({
 "TYPE OF EQPT": {
  type: String,
  required: true,
 },
 "BA NO": {
  type: String,
  required: true,
 },
 UNIT: {
  type: String,
  required: true,
 },
 "LOC OF CAS(FML/PMC/NMC)": {
  type: String,
  required: true,
 },
 "TIME REPORTED": {
  type: String,
  required: true,
 },
 "TIME COMPLETED": {
  type: String,
  required: true,
 },
 CI: {
  type: String,
  required: true,
 },
 "CAS DISPOSAL": {
  type: String,
  required: true,
 },
 "IF UNCOVERD REPORTED TO": {
  type: String,
  required: true,
 },
 REMARKS: {
  type: String,
  required: true,
 },
});

export const validateRecordOfWork = (work: RecordOfWorkInterface) => {
 const schema = Joi.object({
  "TYPE OF EQPT": Joi.string().required(),
  "BA NO": Joi.string().required(),
  UNIT: Joi.string().required(),
  "LOC OF CAS(FML/PMC/NMC)": Joi.string().required(),
  "TIME REPORTED": Joi.string().required(),
  "TIME COMPLETED": Joi.string().required(),
  CI: Joi.string().required(),
  "CAS DISPOSAL": Joi.string().required(),
  "IF UNCOVERD REPORTED TO": Joi.string().required(),
  REMARKS: Joi.string().required(),
 });

 return schema.validate(work);
};

const RecordOfWork = mongoose.model<RecordOfWorkInterface>(
 "RepairCard",
 recordOfWorkSchema
);
export default RecordOfWork;
