import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import Spares, { validateSpares } from "../models/Spares";
import SparesInterface from "../interfaces/Spares";

export const addSpares = async (req: Request, res: Response) => {
 const { value, error } = validateSpares(req.body);
 if (error) return res.status(500).send(error);
 const spares = new Spares(value);
 spares.save();
 res.status(200).send({ message: "Spares added successfully!" });
};

export const getAllSpares = async (req: Request, res: Response) => {
 const spares = await Spares.find();
 return res.status(200).send(spares);
};

export const editSpare = async (req: Request, res: Response) => {
 const id = req.params.id.split(":");
 const spareId = id[1];
 const { value, error } = validateSpares(req.body);
 if (error) return res.status(500).send(error);
 const device = await Spares.findByIdAndUpdate({ _id: spareId }, value, {
  new: true,
 });
 res.status(200).send({ message: "Edit successfully!" });
};

export const deleteSpare = async (req: Request, res: Response) => {
 const id = req.params.id.split(":")[1];
 await Spares.findByIdAndDelete({ _id: id });
 res.status(200).send("Deleted spare successfully!");
};
