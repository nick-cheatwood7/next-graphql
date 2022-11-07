import { objectType } from 'nexus';
import { BaseResult } from './Globals';

export const HealthcheckResult = objectType({
  name: 'HealthcheckResult',
  definition(t) {
    t.implements(BaseResult);
  },
});
