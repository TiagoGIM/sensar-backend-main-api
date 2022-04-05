import {  Router } from 'express'
import { adaptRoute } from '@/main/adpters'
import { makeLoadEquipmentController } from '@/main/factories/load-equipment-controller';
import { makePostEquipmentController } from '@/main/factories/equipment-manager.controler';

/**
 * Aqui vao ficar todas as rotas relacionadas a estrutura da empresa
 */
export default  (router : Router ): void => {
  router.get('/query/equipment/:id', adaptRoute(makeLoadEquipmentController()));
  router.post('/action/equipment', adaptRoute(makePostEquipmentController()));
}