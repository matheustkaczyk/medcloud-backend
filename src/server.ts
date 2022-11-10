import express from 'express';
import { ManagerController } from './controller/ManagerController';

const app = express();

app.use(express.json());

app.post('/signup', new ManagerController().createManager);

export default app;
