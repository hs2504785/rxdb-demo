import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoInterface } from '../../models/todo.interface';
import { TodoStore } from '../../services/todo-store.service';
import { TododbService } from '../../services/tododb.service';

@Component({
  selector: 'lib-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos$: Observable<TodoInterface[]>;
  completedTodos$: Observable<TodoInterface[]>;
  selectedTodo: TodoInterface;
  constructor(private tododbService: TododbService) {}

  ngOnInit(): void {
    // this.todos$ = this.store.todos$;
    this.todos$ = this.tododbService.getTodoItems();
    this.completedTodos$ = this.tododbService.getCompletedTodoItems();
  }

  onTodoAdd(todo: TodoInterface) {
    // this.todos$;
  }

  onTodoEdit(todo: TodoInterface) {
    //
  }

  removeTodo(todo: TodoInterface) {
    // this.store.removeTodo(todo);
    this.tododbService.removeTodoItem(todo);
  }
}
