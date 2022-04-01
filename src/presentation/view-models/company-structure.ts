export type CompanyStructureModel = {
  sectors: Sector[];
}

type Sector = {
  id: string;
  name: string;
  lines: Line[];
}

type Line = {
  id: string;
  name: string;
  machines: Machine[];
}

type Machine = {
  id: string;
  name:string;
  equipments : Equipment[];
}

type Equipment = {
  id: string;
  name:string;
  devices : Device[];
}

type Device = {
  name?: string;
  id : string;
}