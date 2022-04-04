import { CompanyId } from "@/domain/entities";
import { LineTree } from "@/domain/entities/line";

export type SectorTree = {
  company_owner: CompanyId;
  id: SectorId;
  name: string;
  lines: LineTree[];
}

export type SectorId = string;
export type Sector = Omit<SectorTree,'lines'>

export type AddSector = Omit<Sector,'id'>

export type CreateNewSectorStatus= {
  statusCreate: StatusCreateUpdate;
  id?: string;
  error? : {}
}

export type UpdateSectorResponse = {
  statusUpdate : StatusCreateUpdate;
  error? : {};
}

export enum StatusCreateUpdate  {
  SUCESS ='sucess',
  FAIL = 'fail',
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
    return sectors.filter( s => s.company_owner == this.company_owner );
  }
}