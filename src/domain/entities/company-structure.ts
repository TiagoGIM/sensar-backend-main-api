// TODO : colocar os IDs das estruturas hierarquicas
//https://medium.com/@gara.mohamed/domain-driven-design-the-identifier-type-pattern-d86fd3c128b3#:~:text=The%20key%20difference%20between%20an,Value%20Objects%20have%20no%20identity.

export type CompanyStructure = {
  sectors: Sector[];
}

export type Sector = {
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
  id: string
  macAdrr : string;
  alias? : string ;
  observacoes? : string;
  section : string;
  line : string;
  machine : string;
  equipiment : string;
}