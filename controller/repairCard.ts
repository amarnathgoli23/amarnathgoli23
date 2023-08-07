import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import RepairCard, { validateRepairCard } from "../models/RepairCard";

export const addRepairCard = async (req: Request, res: Response) => {
 console.log("HIII");
 const { value, error } = validateRepairCard(req.body);
 if (error) return res.status(500).send(error);
 const repairCard = new RepairCard(value);
 try {
  repairCard.save();
  res.status(200).send({ message: "Group added successfully!" });
 } catch (e) {
  console.log(e);
  res.status(400).send({ message: "Error" });
 }
};

export const getAllRepairCard = async (req: Request, res: Response) => {
 const repairCard = await RepairCard.find();
 return res.status(200).send(repairCard);
};

export const editRepairCard = async (req: Request, res: Response) => {
 const id = req.params.id.split(":")[1];
 const { value, error } = validateRepairCard(req.body);
 if (error) return res.status(500).send(error);
 const repairCard = await RepairCard.findByIdAndUpdate({ _id: id }, value, {
  new: true,
 });
 res.status(200).send({ message: "Edit successfully!" });
};

export const deleteRepairCard = async (req: Request, res: Response) => {
 const id = req.params.id.split(":")[1];
 await RepairCard.findByIdAndDelete({ _id: id });
 res.status(200).send("Deleted vehicle successfully!");
};
