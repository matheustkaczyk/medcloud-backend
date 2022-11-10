import express from 'express';
import 'reflect-metadata';

const app = express();

app.use(express.json());

app.get('/', (_req, res) => res.send('Hello World!'));

export default app;
