import { CompanyId, SectorId } from '@/domain/entities';
import { type } from 'os';
export interface SectorListModel {
  sectors : Sector[];
}
interface Sector {
  name: string;
  id: string
}

export type addSectorDTO = {
  companyId : CompanyId;
  name : string;
}
export class SectorDTO {
  id : SectorId;
  name: string;
  companyId: CompanyId
}