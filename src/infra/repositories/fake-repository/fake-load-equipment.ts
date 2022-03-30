import { LoadEquipmentRepository } from "@/application/contracts";
import { Equipment } from "@/application/models";
import { sectorsMock } from "@/infra/data-source/data-source";

export class FakeEquipmentRepository implements LoadEquipmentRepository {
  async loadEquipment(equipmentId: string) : Promise<Equipment> {
    return sectorsMock[0].lines[0].machines[0].equipiments[0];
  }
}