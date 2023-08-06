import { Types } from "mongoose";

interface TeamInterface {
 _id: Types.ObjectId;
 title: String;
 group: Types.ObjectId | undefined;
}

export default TeamInterface;
