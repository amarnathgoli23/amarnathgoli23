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
 "LOC OF CAS": {
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
 "CASUALITY DISPOSAL": {
  type: String,
  required: true,
 },
 "IF UNRECOVERED REPORTED TO": {
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
  "LOC OF CAS": Joi.string().required(),
  "TIME REPORTED": Joi.string().required(),
  "TIME COMPLETED": Joi.string().required(),
  CI: Joi.string().required(),
  "CASUALITY DISPOSAL": Joi.string().required(),
  "IF UNRECOVERED REPORTED TO": Joi.string().required(),
  REMARKS: Joi.string().required(),
 });

 return schema.validate(work);
};

const RecordOfWork = mongoose.model<RecordOfWorkInterface>(
 "RepairOfWork",
 recordOfWorkSchema
);
export default RecordOfWork;
