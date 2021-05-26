import { Injectable } from '@angular/core';
import { createRxDatabase, addRxPlugin } from 'rxdb/plugins/core';
import { TODO_SCHEMA } from '../schemas/todo.schema';
addRxPlugin(require('pouchdb-adapter-idb'));

import * as PouchHttpPlugin from 'pouchdb-adapter-http';
addRxPlugin(PouchHttpPlugin);

import { RxDBValidatePlugin } from 'rxdb/plugins/validate';
addRxPlugin(RxDBValidatePlugin);

import { RxDBQueryBuilderPlugin } from 'rxdb/plugins/query-builder';
addRxPlugin(RxDBQueryBuilderPlugin);

import { RxDBUpdatePlugin } from 'rxdb/plugins/update';
import { HERO_SCHEMA } from 'projects/rxdbdemo/src/lib/schemas/hero.schema';
addRxPlugin(RxDBUpdatePlugin);

import { RxDBReplicationPlugin } from 'rxdb/plugins/replication';
addRxPlugin(RxDBReplicationPlugin);

import { RxDBLeaderElectionPlugin } from 'rxdb/plugins/leader-election';
import {
  COUCHDB_PORT,
  DATABASE_NAME,
  IS_SERVER_SIDE_RENDERING,
} from '../utils/util';
addRxPlugin(RxDBLeaderElectionPlugin);

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
    name: DATABASE_NAME, // <- name
    adapter: IS_SERVER_SIDE_RENDERING ? 'memory' : 'idb', // <- storage-adapter
    // password: 'myPassword',     // <- password (optional)
    multiInstance: true, // <- multiInstance (optional, default: true)
    eventReduce: false, // <- eventReduce (optional, default: true)
  });

  (window as any)[DATABASE_NAME] = db;

  todoCollection = await window[DATABASE_NAME].addCollections({
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

  handleSync(db);
}

function handleSync(db) {
  const syncURL = IS_SERVER_SIDE_RENDERING
    ? 'https://warm-sierra-88348.herokuapp.com/' + DATABASE_NAME
    : 'http://localhost' + ':' + COUCHDB_PORT + '/' + DATABASE_NAME;

  db.hero.sync({
    remote: `${syncURL}/heroes`,
  });

  db.todo.sync({
    remote: `${syncURL}/todos`,
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
