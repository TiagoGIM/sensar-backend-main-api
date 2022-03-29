import {  Router } from 'express'
import { adaptRoute } from '../adpters'
import { makeLoadCompanyStructureController } from '@src/main/factories'

/**
 * Aqui vao ficar todas as rotas relacionadas a estrutura da empresa
 */
export default  (router : Router ): void => {
  router.get('/company-tree', adaptRoute(makeLoadCompanyStructureController()));
}