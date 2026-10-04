import 'dotenv/config';
import app, { startGqlServer } from './app.js';
import { connectDB } from './config/db.js';

// dotenv
const PORT = process.env.PORT || 3000;

// start server
const startServer = async () => {
  try {
    // connect db
    await connectDB();
    // start graphql server
    await startGqlServer();

    // express server listen
    app.listen(PORT, () => {
      console.log(`Server is running on port:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start the server:', error);
    process.exit(1);
  }
};

startServer();
