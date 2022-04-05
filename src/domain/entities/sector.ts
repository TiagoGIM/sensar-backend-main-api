import { CompanyId } from "@/domain/entities";
import { LineTree } from "@/domain/entities/line";
import { ResponseCreateUpdate, StatusCreateUpdate } from "@/utils/types/types";

export type SectorTree = {
  companyId: CompanyId;
  id: SectorId;
  name: string;
  lines: LineTree[];
}

export type SectorId = string;
export type Sector = Omit<SectorTree,'lines'>

export type AddSector = Omit<Sector,'id'>

export type CreateNewSectorStatus = ResponseCreateUpdate;

export type UpdateSectorResponse = {
  statusUpdate : StatusCreateUpdate;
  error? : {};
}

//regra de dominio, todos os setores devem pertencer à mesma empresa.
//export type SectorList = Sector[];

export class SectorList {
  private sectors: Sector[];
  private company_owner: string;

  constructor(sectors: Sector[], company_owner :string) {
    this.sectors = this.validate(sectors) || [];
    this.company_owner = company_owner;
  }
  private validate(sectors: Sector[]): Sector[] {
    return sectors.filter( s => s.companyId == this.company_owner );
  }
}