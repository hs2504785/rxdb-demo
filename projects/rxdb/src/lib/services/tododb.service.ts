import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TodoInterface } from '../models/todo.interface';
import { DatabaseService } from './database.service';
import { TodoService } from './todo.service';

@Injectable({
  providedIn: 'root',
})
export class TododbService {
  todoCollection;
  constructor(
    private databaseService: DatabaseService,
    private todoService: TodoService,
  ) {
    this.todoCollection = this.databaseService.db.todo;
    // this.initTodos(); // Sync
  }

  initTodos() {
    this.todoService
      .getTodos()
      .pipe(
        map((res: TodoInterface[]) => {
          return res.map(todo => {
            return {
              id: todo.id.toString(),
              title: todo.title,
              completed: todo.completed,
            };
          });
        }),
      )
      .subscribe(res => {
        this.todoCollection.bulkInsert(res);
      });
  }

  getTodoItems(): Observable<TodoInterface[]> {
    return this.todoCollection.find().$;
  }

  getCompletedTodoItems(): Observable<TodoInterface[]> {
    return this.todoCollection.find().where('completed').eq(true).$;
  }

  async createTodoItem(todo) {
    const newTodo = {
      title: todo.title,
      completed: !!todo.completed,
      id: new Date().getTime().toString(),
    };
    this.todoService.addTodo(newTodo); // Sync
    return this.todoCollection.insert(newTodo);
  }

  async removeTodoItem(todo) {
    const query = this.todoCollection.find().where('id').eq(todo.id);
    const removedDocs = await query.remove();

    this.todoService.removeTodo(todo); // Sync
    return removedDocs;
  }

  async updateTodoItem(todo) {
    this.todoService.updateTodo(todo); // Sync
    return await this.todoCollection.upsert(todo);
  }

  async getTodoByName(name) {
    return this.todoCollection.find().where('title').eq(name).exec();
  }
}
