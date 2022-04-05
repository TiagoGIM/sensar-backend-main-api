import { DeviceId } from "@/domain/entities/device";
import { EquipmentId } from "@/domain/entities/equipment";
import { MachineId } from "@/domain/entities/machine";

export type EquipmentModel = {
  id:string;
  name:string;
  devices? : DeviceUnit[];
}
type Device = {
  id : string;
  macAdrr : string;
  alias? : string ;
  observacoes? : string;a
  sector : string;
  line : string;
  machine : string;
  equipment : string;
}
type DeviceUnit = {
  id : DeviceId;
  name? : string;
}




export type EquipmentDTO = {
  id : EquipmentId;
  name: string;
  machineId : MachineId;
}
export type AddEquipmentDTO = Omit<EquipmentDTO ,'id'>