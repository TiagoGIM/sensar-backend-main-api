import { LineId } from "@/domain/entities/line";
import { MachineId } from "@/domain/entities/machine";

export type MachineDTO = {
  id : MachineId;
  name: string;
  lineId : LineId;
}
export type AddMachineDTO = Omit<MachineDTO ,'id'>