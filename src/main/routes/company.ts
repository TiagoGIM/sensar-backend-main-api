import {  Router } from 'express'
import { adaptRoute } from '@/main/adpters'
import { makeLoadCompanyStructureController } from '@/main/factories'

/**
 * Aqui vao ficar todas as rotas relacionadas a estrutura da empresa
 */
export default  (router : Router ): void => {
  router.get('/company-tree/:id', adaptRoute(makeLoadCompanyStructureController()));
}