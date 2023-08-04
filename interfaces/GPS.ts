import { Types } from "mongoose";

interface GPSInterface {
 _id: Types.ObjectId;
 lat: Number;
 long: Number;
 deviceId: String;
}

export default GPSInterface;
