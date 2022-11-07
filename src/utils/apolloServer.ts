import { ApolloServer } from 'apollo-server-micro';
import { schema } from '../modules/graphql/schema';

export const server = new ApolloServer({
  schema: schema,
  context: ({ req }) => ({ req }),
});
