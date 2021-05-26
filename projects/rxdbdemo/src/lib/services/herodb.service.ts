import { Injectable } from '@angular/core';
import { DatabaseService } from 'projects/rxdb/src/lib/services/database.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HerodbService {
  heroCollection;
  constructor(private databaseService: DatabaseService) {
    this.heroCollection = this.databaseService.db.hero;
    // this.initHeroes(); // Sync
  }

  initHeroes() {
    const data = [
      {
        color: '#032c33',
        hp: 30,
        maxHP: 50,
        skills: [{ name: 'use the ring', damage: 0 }],
        name: 'Frodo',
      },
      {
        color: '#5d686c',
        hp: 100,
        maxHP: 100,
        skills: [],
        name: 'Gandalf',
      },
      {
        maxHP: 819.7604540938978,
        color: 'pink',
        hp: 93,
        skills: [],
        name: 'hemant',
      },
      {
        maxHP: 618.8025655939274,
        color: 'blue',
        hp: 100,
        skills: [],
        name: 'name',
      },
      {
        maxHP: 678.4904025062559,
        color: 'cyan',
        hp: 93,
        skills: [],
        name: 'ooaoaoaoa',
      },
      {
        maxHP: 217.7168432469147,
        color: 'green',
        hp: 100,
        skills: [],
        name: 'ppp',
      },
      {
        maxHP: 988.0275266006324,
        color: 'red',
        hp: 100,
        skills: [],
        name: 'sss',
      },
    ];
    this.heroCollection.bulkInsert(data);
    // this.todoService
    //   .getTodos()
    //   .pipe(
    //     map((res: TodoInterface[]) => {
    //       return res.map(todo => {
    //         return {
    //           id: todo.id.toString(),
    //           title: todo.title,
    //           completed: todo.completed,
    //         };
    //       });
    //     }),
    //   )
    //   .subscribe(res => {
    //     this.heroCollection.bulkInsert(res);
    //   });
  }

  getHeroes(): Observable<any[]> {
    return this.heroCollection.find().$;
  }

  getCompletedTodoItems(): Observable<any[]> {
    return this.heroCollection.find().where('completed').eq(true).$;
  }

  async addHero(hero) {
    console.log(hero);
    // const newTodo = {
    //   title: todo.title,
    //   completed: !!todo.completed,
    //   id: new Date().getTime().toString(),
    // };
    // this.todoService.addTodo(newTodo); // Sync
    // return this.heroCollection.insert(newTodo);
  }

  async removeTodoItem(todo) {
    const query = this.heroCollection.find().where('id').eq(todo.id);
    const removedDocs = await query.remove();

    // this.todoService.removeTodo(todo); // Sync
    return removedDocs;
  }

  async updateTodoItem(todo) {
    // this.todoService.updateTodo(todo); // Sync
    return await this.heroCollection.upsert(todo);
  }

  async getHeroByName(name) {
    return this.heroCollection.find().where('name').eq(name).exec();
  }
}
