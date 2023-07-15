import Joi from "joi";
import mongoose from "mongoose";
import SparesInterface from "../interfaces/Spares";

const sparesSchema = new mongoose.Schema<SparesInterface>({
 catPartNumber: {
  type: String,
  required: true,
 },
 nomenclature: {
  type: String,
  required: true,
 },
 quantityHeld: {
  type: Number,
  required: true,
 },
 quantityConsumed: {
  type: Number,
  required: true,
 },
});

export const validateSpares = (spares: SparesInterface) => {
 const schema = Joi.object({
  catPartNumber: Joi.string().required(),
  nomenclature: Joi.string().required(),
  quantityHeld: Joi.number().required(),
  quantityConsumed: Joi.number().required(),
 });

 return schema.validate(spares);
};

const Spares = mongoose.model<SparesInterface>("Spares", sparesSchema);
export default Spares;
