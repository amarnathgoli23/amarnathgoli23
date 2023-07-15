import { Types } from "mongoose";

interface SparesInterface {
 _id: Types.ObjectId;
 catPartNumber: string;
 nomenclature: string;
 quantityHeld: Number;
 quantityConsumed: Number;
}

export default SparesInterface;
