import mongoose from "mongoose";

const URI = process.env.MONGO_URI as string;
const DB_NAME = process.env.DB_NAME as string;

const connect = (cb: () => void) => {
  mongoose.connect(URI, {
    dbName: DB_NAME, 
  })
  .then(cb)
  .catch((e) => console.error('error on db connection:', e))
}

export default {
  connect,
}
