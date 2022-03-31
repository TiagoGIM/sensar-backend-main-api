import { HttpResponse } from "@/presentation/contracts";

export interface Controller {
  handle: ( params? : any) => Promise<HttpResponse>
}