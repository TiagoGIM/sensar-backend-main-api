import { LoadEquipmentRepository } from "@/data/contracts";
import { sectorsMock } from "@/infra/data-source/data-source";
import { Equipment, EquipmentTree } from "@/domain/entities/equipment";

export class FakeEquipmentRepository implements LoadEquipmentRepository {
  async loadEquipment(equipmentId: string) : Promise<EquipmentTree> {
    let equip = sectorsMock[0].lines[0].machines[0].equipments[0]
    const loaded :EquipmentTree  = {
     name: equip.name,
     machineId : 'machineId',
     id:equip.id,
     devices: equip.devices.map(d => ({
        id: d.id,
        name: d.name,
        macAddress: 'mocado',
        observations: d.observations,
        equipmentId: d.equipmentId
      }))
    }
    return loaded;
  }
}