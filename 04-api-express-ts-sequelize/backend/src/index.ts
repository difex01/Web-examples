import 'dotenv/config';
import app from './app';
import { init } from './database/connection';
import './models/associations';

const PORT = process.env.PORT;

async function main() {
  await init();
  app.listen(PORT, () => console.log('Server running on port:', PORT));
}

main();
