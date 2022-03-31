//export type SectorList = Sector[];
export type Sector = {
  company_owner: string; //pode ser id?
  name: string;
  id: string;
}
export type AddSector = Omit<Sector,'id'>

export type CreateSectorStatus= {
  statusCreate: StatusCreateUpdate;
  id: string;
}

export enum StatusCreateUpdate  {
  SUCESS ='sucess',
  FAIL = 'fail',
}
//regra de dominio, todos os setores devem pertencer à mesma empresa.

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