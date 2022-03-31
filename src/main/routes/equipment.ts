import {  Router } from 'express'
import { adaptRoute } from '@/main/adpters'
import { makeLoadEquipmentController } from '../factories';

/**
 * Aqui vao ficar todas as rotas relacionadas a estrutura da empresa
 */
export default  (router : Router ): void => {
  router.get('/query/equipment/:id', adaptRoute(makeLoadEquipmentController()));
}