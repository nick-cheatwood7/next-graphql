import { Kind } from 'graphql';
import { scalarType } from 'nexus';

export const DateTime = scalarType({
  name: 'dateTime',
  asNexusMethod: 'dateTime',
  description: 'Date custom scalar type',
  parseValue(value) {
    // @ts-ignore
    return new Date(value);
  },
  // @ts-ignore
  serialize(value: Date) {
    return value.getTime();
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(ast.value);
    }
    return null;
  },
});
