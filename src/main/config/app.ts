import { setupRoutes } from '@/main/config/routes';
import express from 'express';
import cors from 'cors';
const app = express();

const options: cors.CorsOptions = {
  origin: '*'
};
app.use(cors(options));
app.use(express.json());
app.use(express.urlencoded({ extended: true}))
setupRoutes(app);
export default app;