import { setupRoutes } from '@/main/config/routes';
import express from 'express';
import cors from 'cors';
const app = express();
const API_URL = 'http://localhost:3000';
const options: cors.CorsOptions = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
  ],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: API_URL,
  preflightContinue: false,
};
app.use(express.json());
app.use(express.urlencoded({ extended: true}))
app.use(cors(origin))
setupRoutes(app);
export default app;
