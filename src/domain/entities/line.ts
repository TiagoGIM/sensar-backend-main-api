import { ResponseCreateUpdate } from "@/utils/types/types";
import { MachineTree } from "./machine";
import { SectorId } from "./sector";

export type LineId = string;
export type LineTree = {
  id: LineId;
  sectorId : SectorId;
  name: string;
  machines?: MachineTree[];
}

export type Line = Omit<LineTree, 'machines'>
export type AddLine = Omit<Line,'id'>

export type CreateNewLineStatus =  ResponseCreateUpdate;