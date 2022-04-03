import { HttpResponse } from "@/presentation/contracts";
import {Request} from 'express'
export interface Controller {
  // Comander : Request
  handle: ( params? : Request) => Promise<HttpResponse>
}