import { CreateCompany } from "@/domain/use-cases/company-create";
import { ValidateFields } from "@/infra/helpers/validate";
import { StatusCreateUpdate } from "@/utils/types/types";
import { Request } from "express";
import { Controller, HttpResponse, serverError } from "../contracts";

export class CreateCompanyController implements Controller {
  constructor(readonly createCompany: CreateCompany) { }
  async handle (request: Request) : Promise<HttpResponse<any>> {
    const companyToCreate = request.body;
    const { errors, isValid } = ValidateFields.fieldsValidation(companyToCreate)
    
    if (!isValid) return {
      statusCode: 400, data: {
        statusCreate: StatusCreateUpdate.FAIL,
        error: errors
      }
    }
    try {
      const companyCreated = await this.createCompany.create(companyToCreate)
      return {
        statusCode :201,
        data : companyCreated
      }
    } catch (error : any) {
      console.log(error)
      return serverError(error)
    }
  }
}