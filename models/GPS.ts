import Joi from "joi";
import mongoose from "mongoose";
import GpsInterface from "../interfaces/GPS";

const gpsSchema = new mongoose.Schema<GpsInterface>({
 deviceId: {
  type: String,
  required: true,
 },
 lat: {
  type: Number,
  required: true,
 },
 long: {
  type: Number,
  required: true,
 },
});

const GPS = mongoose.model<GpsInterface>("GPS", gpsSchema);
export default GPS;
