export type EquipmentModel = {
  name:string;
  devices : Device[];
}
type Device = {
  id : string;
  macAdrr : string;
  alias? : string ;
  observacoes? : string;
  section : string;
  line : string;
  machine : string;
  equipiment : string;
}