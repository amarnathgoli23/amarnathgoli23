import express, { Application } from "express";
import authRouter from "../routes/auth";
import sparesRouter from "./../routes/spares";
import vehicleRouter from "./../routes/vehicle";
export default function (app: Application) {
 app.use(express.json());
 app.use("/api/auth", authRouter);
 app.use("/api/spares", sparesRouter);
 app.use("/api/vehicle", vehicleRouter);
}
