import {
  Line,
  CreateNewLineStatus,
  AddLine
} from "@/domain/entities/line";

export interface LineManager {
  create: (sector: AddLine) => Promise<CreateNewLineStatus>
  //update: (sector: Line) => Promise<StatusCreateUpdate>
  //load: (companiId: string) => Promise<LineList>
}