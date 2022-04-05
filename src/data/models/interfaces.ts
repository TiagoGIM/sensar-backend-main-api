import { SectorId } from "@/domain/entities";
import { EquipmentId } from "@/domain/entities/equipment";

export interface Device {
  id : string;
  macAdrr : string;
  name? : string ;
  observacoes? : string;
  equipment : string;
}
export interface DeviceUnit {
  id : string;
  name :string;
}

export interface Equipment{
  id: string;
  name:string;
  devices : DeviceUnit[];
}

export type EquipmentBase = Omit<Equipment,'devices'>

export interface Machine{
  id: string;
  name:string;
  equipments : Equipment[];
}

export interface Line {
  name: string;
  id: string;
  machines: Machine[];
}

export interface Sector {
  company_owner:string;
  id: SectorId;
  name: string;
  lines: Line[];
}

export interface InfrastrureTree {
  sectors: Sector[];
}

export type DeviceToUpdate = {
  id: string;
  observations?: string;
  name?: string;
  equipmentId?: EquipmentId;
}