import { NextApiRequest, NextApiResponse } from 'next';
import { cors } from '../../modules/middleware/cors';
import { server } from '../../utils/apolloServer';

export const config = {
  api: {
    bodyParser: false,
  },
};

const startServer = server.start();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // middleware
  await cors(req, res);
  // schema-wide middleware goes here
  await startServer;
  await server.createHandler({ path: '/api/graphql' })(req, res);
  return;
}
