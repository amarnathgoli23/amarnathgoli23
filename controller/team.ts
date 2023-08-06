import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import Team, { validateTeam } from "../models/Team";

export const addTeam = async (req: Request, res: Response) => {
 const { value, error } = validateTeam(req.body);
 if (error) return res.status(500).send(error);
 const team = new Team(value);
 try {
  team.save();
  res.status(200).send({ message: "Group added successfully!" });
 } catch (e) {
  console.log(e);
 }
};

export const getAllTeam = async (req: Request, res: Response) => {
 const team = await Team.find();
 return res.status(200).send(team);
};

export const getTeamByTitle = async (req: Request, res: Response) => {
 const title = req.params.title.split(":")[1];
 const team = await Team.find({ title }).populate({
  path: "group",
  populate: {
   path: "command",
   model: "Command",
  },
 });
 //  console.log(team);
 return res.status(200).send(team);
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
