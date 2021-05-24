import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TodoInterface } from '../models/todo.interface';
import { TodoService } from './todo.service';

@Injectable({
  providedIn: 'root',
})
export class TodoStore {
  private _todos$ = new BehaviorSubject([]);

  constructor(private todoService: TodoService) {}

  get todos$(): Observable<TodoInterface[]> {
    return this._todos$.asObservable();
  }

  setTodos(todos: TodoInterface[]): void {
    this._todos$.next([...todos]);
  }

  addTodo(todo: TodoInterface): void {
    // We cannot use array.push because we only want to
    // pass immutable data to the streame
    // for the OnPush strategy remmber?
    this._todos$.next([todo, ...this._todos$.getValue()]);

    // Add
    this.todoService.addTodo(todo);
  }

  removeTodo(todo: TodoInterface) {
    // Again, we have to create a new Array instance to not break the
    // immutable dataflow
    this._todos$.next(this._todos$.getValue().filter(v => v.id !== todo.id));
    // Remove
    this.todoService.removeTodo(todo);
  }

  updateTodo(todo: TodoInterface) {
    const updatedTodos = this._todos$.getValue().map(v => {
      if (v.id === todo.id) {
        return {
          ...v,
          ...todo,
        };
      } else {
        return v;
      }
    });

    this._todos$.next(updatedTodos);

    // Update
    this.todoService.updateTodo(todo);
  }
}
