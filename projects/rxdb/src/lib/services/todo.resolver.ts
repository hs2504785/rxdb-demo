import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { DataService } from 'src/app/shared/services/data.service';
import { TodoStore } from './todo-store.service';

@Injectable()
export class TodoResolver implements Resolve<boolean> {
  constructor(private store: TodoStore, private dataService: DataService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> {
    return this.dataService.getTodos().pipe(
      tap((todos: any) => {
        this.store.setTodos(todos);
      }),
      first(),
    );
  }
}
