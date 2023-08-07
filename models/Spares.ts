import Joi from "joi";
import mongoose from "mongoose";
import SparesInterface from "../interfaces/Spares";

const sparesSchema = new mongoose.Schema<SparesInterface>({
 "CAT/SECTION PART NO. (LV3/ICV)": {
  type: String,
  required: true,
 },
 NOMENCLATURE: {
  type: String,
  required: true,
 },
 QTY: {
  type: Number,
  required: true,
 },
 "UNIT/FORMATION": {
  type: String,
  required: true,
 },
});

export const validateSpares = (spares: SparesInterface) => {
 const schema = Joi.object({
  "CAT/SECTION PART NO. (LV3/ICV)": Joi.string().required(),
  NOMENCLATURE: Joi.string().required(),
  QTY: Joi.number().required(),
  "UNIT/FORMATION": Joi.string().required(),
 });

 return schema.validate(spares);
};

const Spares = mongoose.model<SparesInterface>("Spares", sparesSchema);
export default Spares;
