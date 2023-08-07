import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import SparesInterface from "../interfaces/Spares";
import Vehicle, { validateVehicle } from "../models/Vehicles";

export const addVehicle = async (req: Request, res: Response) => {
 const { value, error } = validateVehicle(req.body);
 if (error) return res.status(500).send(error);
 const vehicle = new Vehicle(value);
 vehicle.save();
 res.status(200).send({ message: "Vehicle added successfully!" });
};

export const getAllVehicles = async (req: Request, res: Response) => {
 const vehicle = await Vehicle.find()
  .populate("type")
  .populate({
   path: "team",
   model: "Team",
   populate: {
    path: "group",
    model: "Group",
    populate: {
     path: "command",
     model: "Command",
    },
   },
  });
 return res.status(200).send(vehicle);
};

export const editVehicle = async (req: Request, res: Response) => {
 const id = req.params.id.split(":");
 const vehicleId = id[1];
 const { value, error } = validateVehicle(req.body);
 if (error) return res.status(500).send(error);
 const vehicle = await Vehicle.findByIdAndUpdate({ _id: vehicleId }, value, {
  new: true,
 });
 res.status(200).send({ message: "Edit successfully!" });
};

export const deleteVehicle = async (req: Request, res: Response) => {
 const id = req.params.id.split(":")[1];
 await Vehicle.findByIdAndDelete({ _id: id });
 res.status(200).send("Deleted vehicle successfully!");
};
