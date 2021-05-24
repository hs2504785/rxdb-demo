import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { RxdbComponent } from './rxdb.component';
import { CommonModule } from '@angular/common';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { ViewTodoComponent } from './components/view-todo/view-todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { TodoResolver } from './services/todo.resolver';
import { TododbService } from './services/tododb.service';

const routes: Routes = [
  {
    path: '',
    component: RxdbComponent,
    // resolve: [TodoResolver],
    children: [
      {
        path: 'add-todo',
        component: AddTodoComponent,
      },
      {
        path: 'edit-todo/:id',
        component: EditTodoComponent,
      },
      {
        path: 'view-todo/:id',
        component: ViewTodoComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    RxdbComponent,
    TodoListComponent,
    AddTodoComponent,
    EditTodoComponent,
    ViewTodoComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    MatButtonModule,
    RouterModule.forChild(routes),
  ],
  providers: [TodoResolver],
  exports: [RxdbComponent],
})
export class RxdbModule {}
