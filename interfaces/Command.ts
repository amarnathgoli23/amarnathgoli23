import { Types } from "mongoose";

interface CommandInterface {
 _id: Types.ObjectId;
 title: String;
}

export default CommandInterface;
