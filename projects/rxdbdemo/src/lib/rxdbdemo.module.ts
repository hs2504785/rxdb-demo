import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule, Routes } from '@angular/router';
import { HeroEditComponent } from './components/hero-edit/hero-edit.component';
import { HeroInsertComponent } from './components/hero-insert/hero-insert.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';

import { RxdbdemoComponent } from './rxdbdemo.component';

const routes: Routes = [
  {
    path: '',
    component: RxdbdemoComponent,
  },
];

@NgModule({
  declarations: [
    RxdbdemoComponent,
    HeroesListComponent,
    HeroInsertComponent,
    HeroEditComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
  ],
  exports: [RxdbdemoComponent],
})
export class RxdbdemoModule {}
