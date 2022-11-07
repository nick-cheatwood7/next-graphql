import { extendType } from 'nexus';
import { HealthcheckResult } from '../types';

export const HealthcheckQuery = extendType({
  type: 'Query',
  definition(t) {
    t.field('healthcheck', {
      type: HealthcheckResult,
      resolve: async (_root, _args, _ctx) => {
        return {
          message: 'Hello from GraphQL',
          errors: false,
        };
      },
    });
  },
});
