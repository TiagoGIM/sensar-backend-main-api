import { MachineTree } from "./machine";

export type LineTree = {
  name: string;
  id: LineId;
  machines: MachineTree[];
}

export type Line = Omit<LineTree, 'machines'>

export type LineId = string;