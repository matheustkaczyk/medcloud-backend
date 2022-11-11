import express from 'express';
import { JwtAuth } from './utils/jwt';

import { ManagerController } from './controller/ManagerController';
import { PatientController } from './controller/PatientController';

const app = express();

app.use(express.json());

app.post('/signup', new ManagerController().createManager);
app.post('/signin', new ManagerController().authenticateManager);

app.post('/patient', JwtAuth.verifyTokenMiddleware, new PatientController().createPatient);
app.put('/patient/:id', new PatientController().updatePatient);
app.get('/patient', new PatientController().getAllPatients);
app.get('/patient/:id', new PatientController().getPatientById);
app.delete('/patient/:id', new PatientController().deletePatientById);

export default app;
