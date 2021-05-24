import { Component, OnInit } from '@angular/core';
import { TodoInterface } from '../../models/todo.interface';
import { TododbService } from '../../services/tododb.service';

@Component({
  selector: 'lib-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  constructor(private tododbService: TododbService) {}

  ngOnInit(): void {}

  async addTodo(todo: TodoInterface) {
    console.log('ss', todo);
    // this.todoStore.addTodo(todo);
    await this.tododbService.createTodoItem(todo);
    // this.todoService.addTodo(todo).subscribe((todo: TodoInterface) => {
    //   console.log('herere', todo);
    // });
  }
}
