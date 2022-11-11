import express from 'express';
import { ManagerController } from './controller/ManagerController';
import { PatientController } from './controller/PatientController';

const app = express();

app.use(express.json());

app.post('/signup', new ManagerController().createManager);
app.post('/signin', new ManagerController().authenticateManager);

app.post('/patient', new PatientController().createPatient);

export default app;
