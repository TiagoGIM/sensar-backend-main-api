import { Equipment } from "./equipment";

export type MachineTree = {
  id: MachineId;
  name: string;
  equipments: Equipment[];
}

export type Machine = Omit<MachineTree, 'equipments'>

export type MachineId = string;