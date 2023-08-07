import { Types } from "mongoose";

interface VehicleInterface {
 _id: Types.ObjectId;
 team: Types.ObjectId | undefined;
 type: String;
 reg: String;
 unit: String;
}

export default VehicleInterface;
