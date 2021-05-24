import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-rxdbdemo',
  templateUrl: './rxdbdemo.component.html',
})
export class RxdbdemoComponent implements OnInit {
  public editedHero?: any;

  constructor() {}
  ngOnInit() {}

  editHero(hero: any) {
    this.editedHero = hero;
  }
}
