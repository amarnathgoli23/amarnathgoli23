import { Types } from "mongoose";

interface GroupInterface {
 _id: Types.ObjectId;
 title: String;
 command: Types.ObjectId | undefined;
}

export default GroupInterface;
