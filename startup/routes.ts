import express, { Application } from "express";
import authRouter from "../routes/auth";
import sparesRouter from "./../routes/spares";
import vehicleRouter from "./../routes/vehicle";
import commandRouter from "./../routes/command";
import groupRouter from "./../routes/group";
import teamRouter from "./../routes/team";
export default function (app: Application) {
 app.use(express.json());
 app.use("/api/auth", authRouter);
 app.use("/api/spares", sparesRouter);
 app.use("/api/vehicle", vehicleRouter);
 app.use("/api/command", commandRouter);
 app.use("/api/group", groupRouter);
 app.use("/api/team", teamRouter);
}
