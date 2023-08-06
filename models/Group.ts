import Joi from "joi";
import GroupInterface from "../interfaces/Group";
import { Schema, Types, model } from "mongoose";

const groupSchema = new Schema<GroupInterface>({
 title: {
  type: String,
  required: true,
 },
 command: {
  type: Types.ObjectId,
  required: true,
  ref: "Command",
 },
});

export const validateGroup = (group: GroupInterface) => {
 const schema = Joi.object({
  title: Joi.string().required(),
  command: Joi.string().hex().length(24),
 });

 return schema.validate(group);
};

const Group = model<GroupInterface>("Group", groupSchema);
export default Group;
