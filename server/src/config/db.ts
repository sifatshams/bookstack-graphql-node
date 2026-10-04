import mongoose from 'mongoose';
import process from 'process';

const MONGO_URI = process.env.MONGODB_URI;

// validate environment variables
if (!MONGO_URI) {
  throw new Error('MONGODB_URI is not defined in environment variables');
}

// connect to mongodb
export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
};
