import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import Repair, { validateRepair } from "../models/Repair";

export const addRepair = async (req: Request, res: Response) => {
 const { value, error } = validateRepair(req.body);
 if (error) return res.status(500).send(error);
 const repair = new Repair(value);
 try {
  repair.save();
  res.status(200).send({ message: "Repair added successfully!" });
 } catch (e) {
  console.log(e);
 }
};

export const getAllRepair = async (req: Request, res: Response) => {
 const repair = await Repair.find();
 return res.status(200).send(repair);
};

export const editRepair = async (req: Request, res: Response) => {
 const id = req.params.id.split(":")[1];
 const { value, error } = validateRepair(req.body);
 if (error) return res.status(500).send(error);
 const repair = await Repair.findByIdAndUpdate({ _id: id }, value, {
  new: true,
 });
 res.status(200).send({ message: "Edit successfully!" });
};

export const deleteRepair = async (req: Request, res: Response) => {
 const id = req.params.id.split(":")[1];
 await Repair.findByIdAndDelete({ _id: id });
 res.status(200).send("Deleted Repair successfully!");
};
