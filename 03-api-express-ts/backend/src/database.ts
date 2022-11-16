import mongoose from "mongoose";

const URI = process.env.MONGO_URI || '';

const connect = (cb: () => void) => {
  mongoose.connect(URI)
  .then(cb)
  .catch((e) => console.log('error>', e))
}

export default {
  connect,
}
