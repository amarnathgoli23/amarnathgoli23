import Joi from "joi";
import mongoose from "mongoose";
import CommandInterface from "../interfaces/Command";

const commandSchema = new mongoose.Schema<CommandInterface>({
 title: {
  type: String,
  required: true,
 },
});

export const validateCommand = (command: CommandInterface) => {
 const schema = Joi.object({
  title: Joi.string().required(),
 });

 return schema.validate(command);
};

const Command = mongoose.model<CommandInterface>("Command", commandSchema);
export default Command;
