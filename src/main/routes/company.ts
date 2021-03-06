import {  Router } from 'express'
import { adaptRoute } from '@/main/adpters'
import { makeLoadCompanyStructureController, makeCreateCompanyController } from '@/main/factories'

/**
 * Aqui vao ficar todas as rotas relacionadas a estrutura da empresa
 */
export default  (router : Router ): void => {
  router.get('/query/company-tree/:id', adaptRoute(makeLoadCompanyStructureController()));
  router.post('/action/new-company', adaptRoute(makeCreateCompanyController()));
}