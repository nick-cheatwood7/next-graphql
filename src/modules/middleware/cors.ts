import Cors from 'cors';
import initMiddleware from './initMiddleware';

export const cors = initMiddleware(
  Cors({
    credentials: true,
    origin: ['https://studio.apollographql.com'],
  })
);
