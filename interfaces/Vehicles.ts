import { Types } from "mongoose";

interface VehicleInterface {
 _id: Types.ObjectId;
 type: String;
 reg: String;
 year: Number;
}

export default VehicleInterface;
