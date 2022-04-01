import { DeviceId } from "@/domain/entities/device";

export type EquipmentModel = {
  id:string;
  name:string;
  devices : DeviceUnit[];
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