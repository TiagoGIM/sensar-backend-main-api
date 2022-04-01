import { HttpResponse } from "@/presentation/contracts";
import {Request} from 'express'
export interface Controller {
  handle: ( params? : Request) => Promise<HttpResponse>
}