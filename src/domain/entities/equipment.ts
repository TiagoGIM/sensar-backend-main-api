import { DeviceUnit } from "./device";

export type EquipmentId = string;

//export type Equipment = Omit<EquipmentTree,'devices'>
export type EquipmentTree = {
  id: EquipmentId;
  name: string;
  devices?: DeviceUnit[];
}
export type Equipment = Omit<EquipmentTree, 'devices'>

export type AddDevice = Omit<Equipment, 'id'>