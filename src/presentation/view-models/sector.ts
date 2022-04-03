import { CompanyId, SectorId } from '@/domain/entities';
export interface SectorListModel {
  sectors : Sector[];
}
interface Sector {
  name: string;
  id: string
}

export class SectorDTO {
  id! : SectorId;
  name!: string;
  companyId!: CompanyId
}