export interface Device {
  id : string;
  macAdrr : string;
  alias? : string ;
  observacoes? : string;
  sector : string;
  line : string;
  machine : string;
  equipment : string;
}
export interface DeviceUnit {
  id : string;
  name :string;
}

export interface Equipment{
  id: string;
  name:string;
  devices : DeviceUnit[];
}

export interface Machine{
  id: string;
  name:string;
  equipments : Equipment[];
}

export interface Line {
  name: string;
  id: string;
  machines: Machine[];
}

export interface Sector {
  company_owner:string;
  id: string;
  name: string;
  lines: Line[];
}

export interface InfrastrureTree {
  sectors: Sector[];
}