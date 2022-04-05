import { DeviceUnit } from "./device";
import { MachineId } from "./machine";

export type EquipmentId = string;

//export type Equipment = Omit<EquipmentTree,'devices'>
export type EquipmentTree = {
  id: EquipmentId;
  name: string;
  machineId: MachineId;
  devices?: DeviceUnit[];
}
export type Equipment = Omit<EquipmentTree, 'devices'>

export type AddEquipment = Omit<Equipment, 'id'>