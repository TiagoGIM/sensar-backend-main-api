import { AddEquipment, Equipment } from "@/domain/entities/equipment";

export interface EquipmentMenageRepository {
    //save(Machine: Sector): Promise<Machine>;
    create(equipment: AddEquipment): Promise<Equipment>
    //loadLines(companiId: string): Promise<SectorList>;
}