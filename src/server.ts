import express from 'express';
import https from 'https'
import fs from 'fs';
import path from 'path';
import cors from 'cors';

import { JwtAuth } from './utils/jwt';

import { ManagerController } from './controller/ManagerController';
import { PatientController } from './controller/PatientController';

import { ManagerValidation } from './middleware/ManagerValidation';
import { PatientValidation } from './middleware/PatientValidation';

const app = express();

const corsOptions = {
  origin: '*'
}

app.use(cors(corsOptions));

app.use(express.json());

app.post('/signup', ManagerValidation.createManagerMiddleware, new ManagerController().createManager);
app.post('/signin', ManagerValidation.authenticateManagerMiddleware, new ManagerController().authenticateManager);
app.post('/validate', JwtAuth.verifyTokenMiddleware, new ManagerController().validateManagersToken);

app.post('/patient', PatientValidation.createPatientMiddleware, JwtAuth.verifyTokenMiddleware, new PatientController().createPatient);
app.put('/patient/:id', PatientValidation.updatePatientMiddleware, JwtAuth.verifyTokenMiddleware, new PatientController().updatePatient);
app.get('/patient', JwtAuth.verifyTokenMiddleware, new PatientController().getAllPatients);
app.get('/patient/:id', JwtAuth.verifyTokenMiddleware, new PatientController().getPatientById);
app.delete('/patient/:id', JwtAuth.verifyTokenMiddleware, new PatientController().deletePatientById);

const options = {
  key: fs.readFileSync(path.join(__dirname, './certs/key.pem')),
  cert: fs.readFileSync(path.join(__dirname, './certs/cert.pem'))
}

const httpsServer = https.createServer(options, app);

export default httpsServer;
