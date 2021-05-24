import type { RxJsonSchema } from 'rxdb/plugins/core';
export const TODO_SCHEMA: RxJsonSchema = {
  title: 'todo schema',
  description: 'describes a simple todo',
  version: 0,
  keyCompression: false,
  type: 'object',
  properties: {
    id: {
      type: 'string',
      primary: true,
    },
    title: {
      type: 'string',
      minLength: 3,
    },
    completed: {
      type: 'boolean',
    },
  },
};
