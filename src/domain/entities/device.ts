import { EquipmentId } from "./equipment";
// corrigir nome de variavel
export type Device = {
  id : DeviceId;
  macAddress : string;
  name? : string ;
  observations? : string;
  equipmentId? : EquipmentId;
}

export type DeviceUnit = {
  id : DeviceId;
  name? : string ;
  macAddress: string;
}
// no futuro isso sera feito por microservice.
export type AddDevice = Omit<DeviceUnit, 'id'>;

export type DeviceId = string;
