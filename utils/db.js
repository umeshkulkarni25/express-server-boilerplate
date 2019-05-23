import mongoose from 'mongoose';

let MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL, { useNewUrlParser: true });
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoDatabaseUrl}`);
});

export default mongoose.connection;
