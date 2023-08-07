import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import Recurring, { validateRecurring } from "../models/Recurring";

export const addRecurring = async (req: Request, res: Response) => {
 const { value, error } = validateRecurring(req.body);
 if (error) return res.status(500).send(error);
 const recurring = new Recurring(value);
 try {
  recurring.save();
  res.status(200).send({ message: "Recurring added successfully!" });
 } catch (e) {
  console.log(e);
 }
};

export const getAllRecurring = async (req: Request, res: Response) => {
 const recurring = await Recurring.find();
 return res.status(200).send(recurring);
};

export const editRecurring = async (req: Request, res: Response) => {
 const id = req.params.id.split(":")[1];
 const { value, error } = validateRecurring(req.body);
 if (error) return res.status(500).send(error);
 const recurring = await Recurring.findByIdAndUpdate({ _id: id }, value, {
  new: true,
 });
 res.status(200).send({ message: "Edit successfully!" });
};

export const deleteRecurring = async (req: Request, res: Response) => {
 const id = req.params.id.split(":")[1];
 await Recurring.findByIdAndDelete({ _id: id });
 res.status(200).send("Deleted Recurring successfully!");
};
