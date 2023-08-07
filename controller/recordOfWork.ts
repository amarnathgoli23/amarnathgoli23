import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import RecordOfWork, { validateRecordOfWork } from "../models/RecordOfWork";

export const addRecordOfWork = async (req: Request, res: Response) => {
 const { value, error } = validateRecordOfWork(req.body);
 if (error) return res.status(500).send(error);
 const recordOfWork = new RecordOfWork(value);
 try {
  recordOfWork.save();
  res.status(200).send({ message: "RecordOfWork added successfully!" });
 } catch (e) {
  console.log(e);
 }
};

export const getAllRecordOfWork = async (req: Request, res: Response) => {
 const recordOfWork = await RecordOfWork.find();
 return res.status(200).send(recordOfWork);
};

export const editRecordOfWork = async (req: Request, res: Response) => {
 const id = req.params.id.split(":")[1];
 const { value, error } = validateRecordOfWork(req.body);
 if (error) return res.status(500).send(error);
 const recordOfWork = await RecordOfWork.findByIdAndUpdate({ _id: id }, value, {
  new: true,
 });
 res.status(200).send({ message: "Edit successfully!" });
};

export const deleteRecordOfWork = async (req: Request, res: Response) => {
 const id = req.params.id.split(":")[1];
 await RecordOfWork.findByIdAndDelete({ _id: id });
 res.status(200).send("Deleted RecordOfWork successfully!");
};
