import httpsServer from './server';
import * as dotenv from 'dotenv';
dotenv.config();

httpsServer.listen(process.env.PORT || 3000, () => console.log('Example app listening on port 3000!'));