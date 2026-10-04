import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@as-integrations/express5';
import cors from 'cors';
import express from 'express';
import { resolvers } from './graphql/resolvers/node.resolver.js';
import { typeDefs } from './graphql/schema/node.schema.js';

const app = express();

// create graphql server
const graphqlServer = new ApolloServer({
  typeDefs,
  resolvers,
});

// start graphql server
export const startGqlServer = async () => {
  await graphqlServer.start();

  app.use(express.json());
  app.use(cors());

  app.use('/graphql', expressMiddleware(graphqlServer));
};

app.get('/', (req, res) => {
  res.json({
    message: 'Node Manager API is running...',
  });
});

export default app;
