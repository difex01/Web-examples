import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import routes from './routes';
import database from './database';

// Conectamos la base de datos
database.connect(() => {
  console.log('db connected')
});

const app = express();

// Middleware que transforma la req.body a un json: content-type - application/json
app.use(express.json())
app.use(cors());

const PORT = process.env.PORT;

app.use('/api/', routes);

app.listen(PORT, () => {
  console.log('server running on port ', PORT)
});
