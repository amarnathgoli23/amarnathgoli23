import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import UserInterface from "../interfaces/User";
import User from "./../models/User";
import admin from "./../helpers/firebase-config";

export const postSignUp = (req: Request, res: Response) => {
 const { value, error } = User.validate(req.body);

 if (!error) {
  const user = User({
   username: req.body.username,
   password: req.body.password,
   email: req.body.email,
  });
  res.send("User added successfully!");
  return user.save();
 } else {
  res.send(error.details);
 }
};

export const postFirebaseLogin = async (req: Request, res: Response) => {
 //  console.log(req.body.data);
 try {
  const token = await admin.auth().verifyIdToken(req.body.data);
  if (token) res.send(token);
  console.log(token);
 } catch (err) {
  res.send(err);
 }
};

export const postLogin = (req: Request, res: Response) => {
 const username = req.body.username;
 const password = req.body.password;
 console.log(username, password);

 User.findOne({ username: username }).then((user: UserInterface) => {
  if (!user) {
   return res.status(401).send(`Invalid Credentials provided`);
  }
  bcrypt.compare(password, user.password).then((doMatch) => {
   if (!doMatch) {
    return res.status(401).send(`Invalid Credentials provided`);
   }
   const token = User.generateAuthToken(user);
   res.status(200).send({ token, user });
  });
 });
};
