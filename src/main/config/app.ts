import { setupRoutes } from '@/main/config/routes';
import express from 'express';
import cors from 'cors';
const app = express();

app.options("*", cors());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}))
setupRoutes(app);
export default app;