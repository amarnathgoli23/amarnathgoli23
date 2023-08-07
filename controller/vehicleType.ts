import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import VehicleType, { validateVehicleType } from "../models/VehicleType";

export const addVehicleType = async (req: Request, res: Response) => {
 const { value, error } = validateVehicleType(req.body);
 if (error) return res.status(500).send(error);
 const vehicleType = new VehicleType(value);
 try {
  vehicleType.save();
  res.status(200).send({ message: "Vehicle Type added successfully!" });
 } catch (e) {
  console.log(e);
  res.status(500).send({ message: "Error while adding vehicle type" });
 }
};

export const getAllVehicleType = async (req: Request, res: Response) => {
 const vehicleType = await VehicleType.find();

 return res.status(200).send(vehicleType);
};

// export const editVehicle = async (req: Request, res: Response) => {
//  const id = req.params.id.split(":");
//  const vehicleId = id[1];
//  const { value, error } = validateVehicle(req.body);
//  if (error) return res.status(500).send(error);
//  const vehicle = await Vehicle.findByIdAndUpdate({ _id: vehicleId }, value, {
//   new: true,
//  });
//  res.status(200).send({ message: "Edit successfully!" });
// };

// export const deleteVehicle = async (req: Request, res: Response) => {
//  const id = req.params.id.split(":")[1];
//  await Vehicle.findByIdAndDelete({ _id: id });
//  res.status(200).send("Deleted vehicle successfully!");
// };
