import { ResponseCreateUpdate } from "@/utils/types/types";
import { AddMachine } from "../entities/machine";

export interface MachineManager {
  create : (machine : AddMachine) => Promise<ResponseCreateUpdate>
}