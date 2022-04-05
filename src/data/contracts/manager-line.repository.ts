import { AddLine, Line } from "@/domain/entities/line";
export interface LineMenageRepository {
  //save(line: Sector): Promise<Line>;
  create(line: AddLine): Promise<Line>
  //loadLines(companiId: string): Promise<SectorList>;
} 