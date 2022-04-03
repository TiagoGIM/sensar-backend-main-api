import { setupRoutes } from '@/main/config/routes';
import express from 'express';
import cors from 'cors';
const app = express();

const origin = {
//  origin: isProduction ? 'https://whitelabel.com' : '*',
  origin: '*'
}
app.use(express.json());
app.use(express.urlencoded({ extended: true}))
app.use(cors(origin))
setupRoutes(app);
export default app;