import express from 'express';
import router from './routes/routes.js';
import cors from 'cors';
import DBConnetion from './database/db.js';

const app = express();

app.use(cors(
    {
        origin: 'https://client-nine-green-66.vercel.app/'
    }
));
app.use('/', router);

const  PORT = 8000;

DBConnetion();

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));