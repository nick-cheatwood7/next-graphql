import { interfaceType } from 'nexus';

export const Node = interfaceType({
  name: 'Node',
  definition(t) {
    t.id('id', { description: 'the GUID of the resource' });
    t.nonNull.dateTime('createdAt', {
      description: 'the creation timestamp of the resource',
    });
    t.nonNull.dateTime('updatedAt', {
      description: 'the last modification timestamp of the resource',
    });
  },
});

export const BaseResult = interfaceType({
  name: 'BaseResult',
  definition(t) {
    t.nonNull.string('message');
    t.nonNull.boolean('errors');
  },
});
