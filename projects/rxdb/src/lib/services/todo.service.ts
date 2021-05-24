import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodoInterface } from '../models/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  API_URL = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}

  getTodos(): any {
    return this.http.get(`${this.API_URL}`);
  }

  addTodo(todo: TodoInterface): any {
    this.http.post(`${this.API_URL}`, todo).subscribe();
  }

  updateTodo(todo: TodoInterface): any {
    this.http.put(`${this.API_URL}/${todo.id}`, todo).subscribe();
  }

  removeTodo(todo: TodoInterface): any {
    this.http.delete(`${this.API_URL}/${todo.id}`).subscribe();
  }
}
