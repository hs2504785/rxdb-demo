import { Injectable } from '@angular/core';
import { createRxDatabase, addRxPlugin } from 'rxdb/plugins/core';
import { TODO_SCHEMA } from '../schemas/todo.schema';
addRxPlugin(require('pouchdb-adapter-idb'));

import { RxDBValidatePlugin } from 'rxdb/plugins/validate';
addRxPlugin(RxDBValidatePlugin);

import { RxDBQueryBuilderPlugin } from 'rxdb/plugins/query-builder';
addRxPlugin(RxDBQueryBuilderPlugin);

import { RxDBUpdatePlugin } from 'rxdb/plugins/update';
import { HERO_SCHEMA } from 'projects/rxdbdemo/src/lib/schemas/hero.schema';
addRxPlugin(RxDBUpdatePlugin);

let todoCollection: any;
/**
 * This is run via APP_INITIALIZER in app.module.ts
 * to ensure the database exists before the angular-app starts up
 */
export async function initDatabase() {
  if (todoCollection) {
    return;
  }

  const db = await createRxDatabase({
    name: 'db', // <- name
    adapter: 'idb', // <- storage-adapter
    // password: 'myPassword',     // <- password (optional)
    multiInstance: true, // <- multiInstance (optional, default: true)
    eventReduce: false, // <- eventReduce (optional, default: true)
  });

  (window as any)['db'] = db;

  todoCollection = await window['db'].addCollections({
    todo: {
      schema: TODO_SCHEMA,
    },
    hero: {
      name: 'hero',
      schema: HERO_SCHEMA,
      methods: {
        hpPercent(this: any): number {
          return (this.hp / this.maxHP) * 100;
        },
      },
      sync: true,
    },
  });
}

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  get db() {
    return window['db'];
  }
}
