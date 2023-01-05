import fs from 'fs';
import cors from 'cors';
import express, { Request, Response } from 'express';

const app = express();

// Middlewares
// Para este ejemplo, este middleware no es necesario
app.use(express.json())
// Usamos cors para habilitar el acceso a recursos desde un origen distinto
// al del servidor
app.use(cors());

app.get('/video', (_req: Request, res: Response) => {
  // Creamos stream de lectura
  const videoStream = fs.createReadStream('./src/public/video.mp4');
  // Con el método pipe enviamos el video al cliente a través de
  // un stream de escritura
  videoStream.pipe(res);
});

export default app;
