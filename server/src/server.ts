import 'dotenv/config';
import app, { startGqlServer } from './app.js';

// dotenv
const PORT = process.env.PORT || 3000;

// start server
const startServer = async () => {
  await startGqlServer();

  app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`);
  });
};

startServer();
