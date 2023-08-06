import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import Command, { validateCommand } from "../models/Command";

export const addCommand = async (req: Request, res: Response) => {
 const { value, error } = validateCommand(req.body);
 if (error) return res.status(500).send(error);
 const command = new Command(value);
 try {
  command.save();
  res.status(200).send({ message: "Command added successfully!" });
 } catch (e) {
  console.log(e);
 }
};

export const getAllCommand = async (req: Request, res: Response) => {
 const command = await Command.find();
 return res.status(200).send(command);
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
