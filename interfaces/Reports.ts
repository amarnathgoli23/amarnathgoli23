import { Types } from "mongoose";

export interface RepairCardInterface {
 _id: Types.ObjectId;
 "DATE IN": String;
 "Ba /Reg": String;
 "Make&type EQPT": String;
 "Nature of defect": String;
 "Repair activity": String;
 "Time taken to repair(min)": String;
 Sys: String;
 SPARE: String;
 QTY: Number;
 "DD-MM-YY": String;
}

export interface RecordOfWorkInterface {
 _id: Types.ObjectId;
 "TYPE OF EQPT": String;
 "BA NO": String;
 UNIT: String;
 "LOC OF CAS(FML/PMC/NMC)": String;
 "TIME REPORTED": String;
 "TIME COMPLETED": String;
 CI: String;
 "CAS DISPOSAL": String;
 "IF UNCOVERD REPORTED TO": String;
 REMARKS: String;
}

export interface RecoveryStateInterface {
 _id: Types.ObjectId;
 DATE: String;
 "UNIT REGNO MAKE&CAS TYPE": String;
 "TIME INFO RECD BY REC": Number;
 "INFO RECD By (TELE/RADIO/SIG/COURSE)": String;
 "TIME BY ROC TO REACH SITE OF CAS": String;
 "TIME Reqd FOR REC (HRS)": String;
 "NO AND TYPE OF REC USED": String;
 "MANPOWER EQPT TRADE WISE": String;
 "Cas  REPAIRED AFTER REC(YES/NO)": String;
 "DETAILS OF SPARES FITTED IN CAS": String;
 "SIT REP RAISED (YES/NO)(SIT REP NO IF RAISED)": String;
}

export interface StateInterface {
 "DATE IN": String;
 "BA/REG": String;
 "MAKE&TYPE EQPT": String;
 "NATURE OF DEFECT": String;
 "MUA DEMANDED": String;
 "PRESENT STATE": String;
 REMARKS: String;
}

export interface RepairInterface {
 "DET NO": String;
 "CG/CT": String;
 "CREW DETAILS": String;
 "SPARES HELD": String;
 "SMTS HELD": String;
 "KM RUN": Number;
 "ENG HRS": Number;
 REMARKS: String;
}

export interface RecurringInterface {
 "MAKE& TYPE OF EQPT": String;
 "FAULT OBSERVED": String;
 SYSTEM: String;
 "NO OF INCIDENCES": String;
 "PROBALE REASON": String;
 "ACTION TAKEN": String;
 REMARKS: String;
}
