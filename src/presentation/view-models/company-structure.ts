import { CompanyId, SectorId } from "@/domain/entities";

export type CompanyModel = {
  id : CompanyId,
  name : string,
}
export type CompanyStructureModel = {
  id: CompanyId;
  name :string;
  sectors?: Sector[];
}

type Sector = {
  id: SectorId;
  name: string;
  lines?: Line[];
}

type Line = {
  id: string;
  name: string;
  machines?: Machine[];
}

type Machine = {
  id: string;
  name:string;
  equipments? : Equipment[];
}

type Equipment = {
  id: string;
  name:string;
  devices? : Device[];
}

type Device = {
  name?: string;
  id : string;
}