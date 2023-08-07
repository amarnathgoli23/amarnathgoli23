import { Types } from "mongoose";

interface SparesInterface {
 _id: Types.ObjectId;
 "CAT/SECTION PART NO. (LV3/ICV)": string;
 NOMENCLATURE: string;
 QTY: Number;
 "UNIT/FORMATION": String;
}

export default SparesInterface;
