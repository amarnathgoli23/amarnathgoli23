import { Types } from "mongoose";

interface VehicleInterface {
 _id: Types.ObjectId;
 type: String;
 reg: String;
 unit: String;
}

export default VehicleInterface;
