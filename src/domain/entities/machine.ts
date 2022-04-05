import { Equipment, EquipmentTree } from "./equipment";
import { LineId } from "./line";

export type MachineTree = {
  id: MachineId;
  lineId : LineId
  name: string;
  equipments?: EquipmentTree[];
}

export type Machine = Omit<MachineTree, 'equipments'>
export type AddMachine = Omit<Machine,'id'>
export type MachineId = string;