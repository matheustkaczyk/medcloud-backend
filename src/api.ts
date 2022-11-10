import app from './server';
import dotenv from 'dotenv';
import { AppDataSource } from './data-source';

dotenv.config();

AppDataSource.initialize();

app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port 3000!'));