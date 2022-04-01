import { Controller } from "@/presentation/contracts";
import { Request, Response } from "express";

export const adaptRoute = (controller : Controller) => {
  return async (request : Request,response : Response) =>{
    const httpResponse = await controller.handle(request);
    try {
      response.status(httpResponse.statusCode).json(httpResponse.data);
    } catch (error) {
      //console.log(error)
      //console.log(httpResponse.data);
      httpResponse.data = error;
      httpResponse.statusCode=500;
      response.status(httpResponse.statusCode).json(httpResponse.data);
    }
    
  }
}