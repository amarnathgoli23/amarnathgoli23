import Joi from "joi";
import mongoose, { Types } from "mongoose";
import VehicleInterface from "../interfaces/Vehicles";

const vehicleSchema = new mongoose.Schema<VehicleInterface>({
 type: {
  required: true,
  type: Types.ObjectId,
  ref: "VehicleType",
 },
 reg: {
  required: true,
  type: String,
 },
 unit: {
  required: true,
  type: String,
 },
 team: {
  required: true,
  type: Types.ObjectId,
  ref: "Team",
 },
});

export const validateVehicle = (vehicle: VehicleInterface) => {
 const schema = Joi.object({
  type: Joi.string().hex().length(24).required(),
  team: Joi.string().hex().length(24).required(),
  reg: Joi.string().required(),
  unit: Joi.string().required(),
 });

 return schema.validate(vehicle);
};

const Vehicle = mongoose.model<VehicleInterface>("Vehicle", vehicleSchema);
export default Vehicle;
