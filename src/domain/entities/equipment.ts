import { DeviceUnit } from "./device";

export type EquipmentId = string;

//export type Equipment = Omit<EquipmentTree,'devices'>

export type Equipment ={
  id: EquipmentId;
  name:string;
  devices : DeviceUnit[];
}