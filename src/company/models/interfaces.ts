export interface Device {
  id : string;
  macAdrr : string;
  alias? : string ;
  observacoes? : string;
  section : string;
  line : string;
  machine : string;
  equipiment : string;
}

export interface Equipment{
  id: string;
  name:string;
  equipiments : Device[];
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
export interface InfrastrureTree {
  sectors: Sector[];
}

export interface Sector {
  name: string;
  id: string;
  lines: Line[];
}