import { Express, Router } from 'express'
import { readdirSync } from 'fs'

/**
 * 
 * @param app passaremos todas as rotas para aplicaçao nessa etapa
 * Um export do setupRoutes default dinamico é escrito de forma difrente e assincrona
 */
export const setupRoutes = (app : Express ): void => {
  const router = Router();
  app.use('/api',router);
  readdirSync(`${__dirname}/../routes`).map(async filename => {
    (await import (`../routes/${filename}`)).default(router)
  })
}