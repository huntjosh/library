import mongoose from 'mongoose';
import config from './config';

export const connectToDb = () => {
 return mongoose.connect(config.databaseUrl, { useNewUrlParser: true });
};
