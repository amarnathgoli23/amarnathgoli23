import express, { Application } from "express";
import authRouter from "../routes/auth";
import sparesRouter from "./../routes/spares";
export default function (app: Application) {
 app.use(express.json());
 app.use("/api/auth", authRouter);
 app.use("/api/spares", sparesRouter);
}
