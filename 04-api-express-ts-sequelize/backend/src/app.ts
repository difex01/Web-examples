import express, { Request, Response } from 'express';
import router from './routes';

const app = express();

// Middlewares
app.use(express.json())

app.use('/', router);

app.get('/music', (_req: Request, res: Response) => {
  res.writeHead(301, {
    Location: 'https://youtu.be/i32E7GPSwRw',
  }).end();
});

export default app;
