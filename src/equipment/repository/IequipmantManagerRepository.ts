import { Device } from "@src/company/models/interfaces";

export interface IEquipmantManagerRepository {
  equipmentId?: string;
  getDevicesByEquipmentId(equipmentId: string): Promise<Device[]>;
}