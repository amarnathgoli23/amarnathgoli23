import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import RecoveryState, { validateRecoveryState } from "../models/Recovery";

export const addRecoveryState = async (req: Request, res: Response) => {
 const { value, error } = validateRecoveryState(req.body);
 if (error) return res.status(500).send(error);
 const recoveryState = new RecoveryState(value);
 try {
  recoveryState.save();
  res.status(200).send({ message: "RecoveryState added successfully!" });
 } catch (e) {
  console.log(e);
 }
};

export const getAllRecoveryState = async (req: Request, res: Response) => {
 const recoveryState = await RecoveryState.find();
 return res.status(200).send(recoveryState);
};

export const editRecoveryState = async (req: Request, res: Response) => {
 const id = req.params.id.split(":")[1];
 const { value, error } = validateRecoveryState(req.body);
 if (error) return res.status(500).send(error);
 const recoveryState = await RecoveryState.findByIdAndUpdate(
  { _id: id },
  value,
  {
   new: true,
  }
 );
 res.status(200).send({ message: "Edit successfully!" });
};

export const deleteRecoveryState = async (req: Request, res: Response) => {
 const id = req.params.id.split(":")[1];
 await RecoveryState.findByIdAndDelete({ _id: id });
 res.status(200).send("Deleted RecoveryState successfully!");
};
