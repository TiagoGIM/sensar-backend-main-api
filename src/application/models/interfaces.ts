export interface Device {
  id : string;
  macAdrr : string;
  alias? : string ;
  observacoes? : string;
  sector : string;
  line : string;
  machine : string;
  equipiment : string;
}

export interface Equipment{
  id: string;
  name:string;
  devices : Device[];
}

export interface Machine{
  id: string;
  name:string;
  equipiments : Equipment[];
}

export interface Line {
  name: string;
  id: string;
  machines: Machine[];
}

export interface Sector {
  name: string;
  id: string;
  lines: Line[];
}

export interface InfrastrureTree {
  sectors: Sector[];
}