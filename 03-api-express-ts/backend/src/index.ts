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

// parse requests of content-type - application/x-www-form-urlencoded
// app.use(express.urlencoded({extended: true}))

// Middleware que transforma la req.body a un json: content-type - application/json
app.use(express.json())
app.use(cors());

const PORT = process.env.PORT;

app.get('/ping', (_req, res) => {
  console.log('ping!');
  res.send('pong!!!')
});

app.use('/api/', routes);

app.listen(PORT, () => {
  console.log('server running on port ', PORT)
});
