import { Component, Input, OnInit } from '@angular/core';
import { TodoInterface } from '../../models/todo.interface';
import { TododbService } from '../../services/tododb.service';

@Component({
  selector: 'lib-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css'],
})
export class EditTodoComponent implements OnInit {
  @Input() todo: TodoInterface;

  constructor(private tododbService: TododbService) {}

  ngOnInit(): void {
    // this.todo = todo;
  }

  updateTodo(todo: TodoInterface) {
    // this.todoStore.updateTodo({ ...this.todo, ...todo });
    this.tododbService.updateTodoItem({ id: this.todo.id, ...todo });
  }
}
