import { AddMachine, Machine } from "@/domain/entities/machine";
export interface MachineMenageRepository {
  //save(Machine: Sector): Promise<Machine>;
  create(machine: AddMachine): Promise<Machine>
  //loadLines(companiId: string): Promise<SectorList>;
} 