import { Types } from "mongoose";

export interface RepairCardInterface {
 _id: Types.ObjectId;
 "DATE IN": String;
 "UNIT/COMBAT GROUP": String;
 "BA /Reg": String;
 "MAKE&TYPE EQPT": String;
 "NATURE OF DEFECT": String;
 "REPAIR ACTIVITY": String;
 "TIME TAKEN TO REPAIR(MIN)": String;
 SYS: String;
 SPARE: String;
 QTY: Number;
 "DATE OUT": String;
}

export interface RecordOfWorkInterface {
 _id: Types.ObjectId;
 "TYPE OF EQPT": String;
 "BA NO": String;
 UNIT: String;
 "LOC OF CAS": String;
 "TIME REPORTED": String;
 "TIME COMPLETED": String;
 CI: String;
 "CASUALITY DISPOSAL": String;
 "IF UNRECOVERED REPORTED TO": String;
 REMARKS: String;
}

export interface RecoveryStateInterface {
 _id: Types.ObjectId;
 "DATE IN": String;
 "UNIT REGNO MAKE&CAS TYPE": String;
 "TYPE INFO RECD BY REC": String;
 "INFO RECD BY(TELE/RADIO/SIG/COURSE)": String;
 "TIME BY ROC TO REACH SITE OF CAS": String;
 "TIME REQD FOR REC (HRS)": String;
 "NO AND TYPE OF REC USED": String;
 "MANPOWER EQPT TRADE WISE": String;
 "CAS REPAIRED AFTER REC (YES/NO)": String;
 "DETAILS OF SPARES FITTED IN CAS": String;
 "SIT REP RAISED (YES/NO) (SIT REP NO IF RAISED)": String;
}

export interface StateInterface {
 "DATE IN": String;
 "BA/REG": String;
 "UNIT/COMBAT GROUP": String;
 "MAKE&TYPE EQPT": String;
 "NATURE OF DEFECT": String;
 "MUA DEMANDED": String;
 "PRESENT STATE": String;
 REMARKS: String;
}

export interface RepairInterface {
 "DATE IN": String;
 "CG/CT": String;
 "UNIT/COMBAT GROUP": String;
 "CREW DETAILS": String;
 "SPARES HELD": String;
 "SMTS HELD": String;
 "KM RUN": String;
 "ENG HRS": String;
 REMARKS: String;
}

export interface RecurringInterface {
 "MAKE& TYPE OF EQPT": String;
 "FAULT OBSERVED": String;
 "UNIT/COMBAT GROUP": String;
 SYSTEM: String;
 "NO OF INCIDENCES": String;
 "PROBALE REASON": String;
 "ACTION TAKEN": String;
 REMARKS: String;
}
