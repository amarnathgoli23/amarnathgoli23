import Joi from "joi";
import mongoose from "mongoose";
import VehicleInterface from "../interfaces/Vehicles";

const vehicleSchema = new mongoose.Schema<VehicleInterface>({
 type: {
  required: true,
  type: String,
 },
 reg: {
  required: true,
  type: String,
 },
 unit: {
  required: true,
  type: String,
 },
});

export const validateVehicle = (vehicle: VehicleInterface) => {
 const schema = Joi.object({
  type: Joi.string().required(),
  reg: Joi.string().required(),
  unit: Joi.string().required(),
 });

 return schema.validate(vehicle);
};

const Vehicle = mongoose.model<VehicleInterface>("Vehicle", vehicleSchema);
export default Vehicle;
