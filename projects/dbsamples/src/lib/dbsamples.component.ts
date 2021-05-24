import { Component, OnInit } from '@angular/core';
import { TodoInterface } from 'projects/rxdb/src/lib/models/todo.interface';
import { TododbService } from 'projects/rxdb/src/lib/services/tododb.service';
import { HerodbService } from 'projects/rxdbdemo/src/lib/services/herodb.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-dbsamples',
  templateUrl: './dbsamples.component.html',
})
export class DbsamplesComponent implements OnInit {
  todoCollection: any;
  heroCollection: any;
  todos$: Observable<TodoInterface[]>;
  heroes$: Observable<any[]>;
  hero: any;
  todo: any;
  constructor(
    private todoDbService: TododbService,
    private heroDbService: HerodbService,
  ) {
    this.todoCollection = this.todoDbService.todoCollection;
    this.heroCollection = this.heroDbService.heroCollection;
  }

  ngOnInit(): void {
    this.todos$ = this.todoDbService.getTodoItems();
    this.heroes$ = this.heroDbService.getHeroes();
  }

  getHero() {
    this.hero = this.heroDbService.getHeroByName('hemant');
  }

  getTodo(name) {
    this.todo = this.todoDbService.getTodoByName(name || 'test');
  }
}
