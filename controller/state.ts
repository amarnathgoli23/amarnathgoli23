import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import State, { validateState } from "../models/State";

export const addState = async (req: Request, res: Response) => {
 const { value, error } = validateState(req.body);
 if (error) return res.status(500).send(error);
 const state = new State(value);
 try {
  state.save();
  res.status(200).send({ message: "State added successfully!" });
 } catch (e) {
  console.log(e);
 }
};

export const getAllState = async (req: Request, res: Response) => {
 const state = await State.find();
 return res.status(200).send(state);
};

export const editState = async (req: Request, res: Response) => {
 const id = req.params.id.split(":")[1];
 const { value, error } = validateState(req.body);
 if (error) return res.status(500).send(error);
 const state = await State.findByIdAndUpdate({ _id: id }, value, {
  new: true,
 });
 res.status(200).send({ message: "Edit successfully!" });
};

export const deleteState = async (req: Request, res: Response) => {
 const id = req.params.id.split(":")[1];
 await State.findByIdAndDelete({ _id: id });
 res.status(200).send("Deleted State successfully!");
};
