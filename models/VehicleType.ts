import Joi from "joi";
import { Schema, model } from "mongoose";
import VehicleTypeInterface from "../interfaces/VehicleType";

const vehicleTypeSchema = new Schema<VehicleTypeInterface>({
 title: {
  type: String,
  required: true,
 },
});

export const validateVehicleType = (vehicleType: VehicleTypeInterface) => {
 const schema = Joi.object({
  title: Joi.string().required(),
 });

 return schema.validate(vehicleType);
};

const VehicleType = model<VehicleTypeInterface>(
 "VehicleType",
 vehicleTypeSchema
);
export default VehicleType;
