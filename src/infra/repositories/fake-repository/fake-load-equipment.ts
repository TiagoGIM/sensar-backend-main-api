import { LoadEquipmentRepository } from "@/data/contracts";
import { sectorsMock } from "@/infra/data-source/data-source";
import { Equipment } from "@/domain/entities/equipment";

export class FakeEquipmentRepository implements LoadEquipmentRepository {
  async loadEquipment(equipmentId: string) : Promise<Equipment> {
    let equip = sectorsMock[0].lines[0].machines[0].equipments[0]
    const loaded :Equipment  = {
     name: equip.name,
     devices: equip.devices,
     id:equip.id,
    }
    return loaded;
  }
}