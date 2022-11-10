import app from './server';
import dotenv from 'dotenv';
dotenv.config();

app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port 3000!'));