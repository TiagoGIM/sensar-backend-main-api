import { setupRoutes } from '@/main/config/routes';
import express from 'express';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}))
setupRoutes(app);
export default app;