import express from 'express';

import { JwtAuth } from './utils/jwt';

import { ManagerController } from './controller/ManagerController';
import { PatientController } from './controller/PatientController';

import { ManagerValidation } from './middleware/ManagerValidation';

const app = express();

app.use(express.json());

app.post('/signup', ManagerValidation.createManagerMiddleware, new ManagerController().createManager);
app.post('/signin', ManagerValidation.authenticateManagerMiddleware, new ManagerController().authenticateManager);

app.post('/patient', JwtAuth.verifyTokenMiddleware, new PatientController().createPatient);
app.put('/patient/:id', JwtAuth.verifyTokenMiddleware, new PatientController().updatePatient);
app.get('/patient', JwtAuth.verifyTokenMiddleware, new PatientController().getAllPatients);
app.get('/patient/:id', JwtAuth.verifyTokenMiddleware, new PatientController().getPatientById);
app.delete('/patient/:id', JwtAuth.verifyTokenMiddleware, new PatientController().deletePatientById);

export default app;
