import { Device } from "@src/models/interfaces";

export interface IEquipmantManagerRepository {
  equipmentId?: string;
  getDevicesByEquipmentId(equipmentId: string): Promise<Device[]>;
}