import { AddEquipment, Equipment } from "@/domain/entities/equipment";
import { MachineId } from "@/domain/entities/machine";
import { EquipmentBase } from "../models";

export interface EquipmentMenageRepository {
    save(equipment: Equipment): Promise<Equipment>;
    create(equipment: AddEquipment): Promise<Equipment>
    equipmentsByMachineId(machineId: MachineId): Promise<EquipmentBase[]>;
}