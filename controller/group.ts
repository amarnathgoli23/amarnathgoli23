import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import Group, { validateGroup } from "../models/Group";

export const addGroup = async (req: Request, res: Response) => {
 const { value, error } = validateGroup(req.body);
 if (error) return res.status(500).send(error);
 const group = new Group(value);
 try {
  group.save();
  res.status(200).send({ message: "Group added successfully!" });
 } catch (e) {
  console.log(e);
 }
};

export const getAllGroup = async (req: Request, res: Response) => {
 const group = await Group.find();
 return res.status(200).send(group);
};

export const getGroupByTitle = async (req: Request, res: Response) => {
 const title = req.params.title.split(":")[1];
 const group = await Group.find({ title }).populate("command");
 console.log(group);
 return res.status(200).send(group);
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
