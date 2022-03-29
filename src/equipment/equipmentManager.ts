import { Device } from "@src/models/interfaces";
import { IEquipmantManagerRepository } from "./repository/IequipmantManagerRepository";

export interface EquipmentDTO {
  id :string,
  devices : Device[]
}

export class EquipmentManger {

  constructor( private equipmantManagerRepository : IEquipmantManagerRepository) {}

  async getDevicesAssocieted(equipmentId: string) : Promise<EquipmentDTO> {
    const devices : Device[] = await this.equipmantManagerRepository.getDevicesByEquipmentId(equipmentId);
    let equipmantDTO : EquipmentDTO = {
      id: equipmentId,
      devices: devices
    }
    return equipmantDTO;
  } 
}