import Joi from "joi";
import TeamInterface from "../interfaces/Team";
import { Schema, Types, model } from "mongoose";

const teamSchema = new Schema<TeamInterface>({
 title: {
  type: String,
  required: true,
 },
 group: {
  type: Types.ObjectId,
  required: true,
  ref: "Group",
 },
});

export const validateTeam = (team: TeamInterface) => {
 const schema = Joi.object({
  title: Joi.string().required(),
  group: Joi.string().hex().length(24),
 });

 return schema.validate(team);
};

const Team = model<TeamInterface>("Team", teamSchema);
export default Team;
