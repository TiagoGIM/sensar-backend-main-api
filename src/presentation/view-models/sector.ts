import { CompanyId, SectorId } from '@/domain/entities';
import { makeValidateBody } from 'express-class-validator'
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