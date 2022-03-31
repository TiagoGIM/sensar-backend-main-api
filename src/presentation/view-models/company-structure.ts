export type CompanyStructureModel = {
  sectors: Sector[];
}

type Sector = {
  name: string;
  lines: Line[];
}

type Line = {
  name: string;
  machines: Machine[];
}

type Machine = {
  name:string;
  equipiments : Equipment[];
}

export type Equipment = {
  name:string;
  devices : Device[];
}

type Device = {
  name: string;
  id : string;
}