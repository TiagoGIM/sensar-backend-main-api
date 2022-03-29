import { HttpResponse } from "@src/presentation/contracts";

export interface Controller {
  handle: ( params? : any) => Promise<HttpResponse>
}