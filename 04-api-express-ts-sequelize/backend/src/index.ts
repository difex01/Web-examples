import 'dotenv/config';
import app from './app';
import { init } from './database/connection';

const PORT = process.env.PORT;

async function main() {
  await init();
  app.listen(PORT, () => console.log('Server running'));
}

main();
