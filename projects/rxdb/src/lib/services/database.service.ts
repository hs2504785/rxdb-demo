import { Injectable, isDevMode } from '@angular/core';
import { createRxDatabase, addRxPlugin } from 'rxdb/plugins/core';
import { TODO_SCHEMA } from '../schemas/todo.schema';
import * as PouchdbAdapterIdb from 'pouchdb-adapter-idb';
import * as PouchHttpPlugin from 'pouchdb-adapter-http';
import { RxDBNoValidatePlugin } from 'rxdb/plugins/no-validate';

import { RxDBValidatePlugin } from 'rxdb/plugins/validate';
addRxPlugin(RxDBValidatePlugin);

import { RxDBQueryBuilderPlugin } from 'rxdb/plugins/query-builder';
addRxPlugin(RxDBQueryBuilderPlugin);

import { RxDBUpdatePlugin } from 'rxdb/plugins/update';
import { HERO_SCHEMA } from 'projects/rxdbdemo/src/lib/schemas/hero.schema';
addRxPlugin(RxDBUpdatePlugin);

import { RxDBReplicationPlugin } from 'rxdb/plugins/replication';
// addRxPlugin(RxDBReplicationPlugin);

import { RxDBLeaderElectionPlugin } from 'rxdb/plugins/leader-election';
import {
  COUCHDB_PORT,
  DATABASE_NAME,
  IS_SERVER_SIDE_RENDERING,
} from '../utils/util';

let todoCollection: any;

/**
 * Loads RxDB plugins
 */
async function loadRxDBPlugins(): Promise<void> {
  addRxPlugin(RxDBReplicationPlugin);
  // http-adapter is always needed for replication with the node-server
  addRxPlugin(PouchHttpPlugin);

  if (IS_SERVER_SIDE_RENDERING) {
    // for server side rendering, import the memory adapter
    const PouchdbAdapterMemory = require('pouchdb-adapter-' + 'memory');
    addRxPlugin(PouchdbAdapterMemory);
  } else {
    // else, use indexeddb
    addRxPlugin(PouchdbAdapterIdb);

    // then we also need the leader election
    addRxPlugin(RxDBLeaderElectionPlugin);
  }

  /**
   * to reduce the build-size,
   * we use some modules in dev-mode only
   */
  if (isDevMode() && !IS_SERVER_SIDE_RENDERING) {
    await Promise.all([
      // add dev-mode plugin
      // which does many checks and add full error-messages
      import('rxdb/plugins/dev-mode').then(module => addRxPlugin(module)),

      // we use the schema-validation only in dev-mode
      // this validates each document if it is matching the jsonschema
      import('rxdb/plugins/validate').then(module => addRxPlugin(module)),
    ]);
  } else {
    // in production we use the no-validate module instead of the schema-validation
    // to reduce the build-size
    addRxPlugin(RxDBNoValidatePlugin);
  }
}

/**
 * This is run via APP_INITIALIZER in app.module.ts
 * to ensure the database exists before the angular-app starts up
 */
export async function initDatabase() {
  if (todoCollection) {
    return;
  }

  await loadRxDBPlugins();

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
