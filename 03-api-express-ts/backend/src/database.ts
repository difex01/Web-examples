import mongoose from "mongoose";

const URI = process.env.MONGO_URI as string;

const connect = (cb: () => void) => {
  mongoose.connect(URI)
  .then(cb)
  .catch((e) => console.error('error on db connection:', e))
}

export default {
  connect,
}
