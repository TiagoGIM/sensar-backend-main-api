import { SectorId } from ".";
import { EquipmentId } from "./equipment";
import { LineId } from "./line";
import { MachineId } from "./machine";
// corrigir nome de variavel
export type Device = {
  id : DeviceId;
  macAdrr : string;
  name? : string ;
  observacoes? : string;
  sector : SectorId;
  line : LineId;
  machine : MachineId;
  equipment : EquipmentId;
}

export type DeviceUnit = {
  id : DeviceId;
  name? : string ;
}

export type DeviceId = string;