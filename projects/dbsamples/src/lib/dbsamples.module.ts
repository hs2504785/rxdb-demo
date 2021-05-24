import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DbsamplesComponent } from './dbsamples.component';

const routes: Routes = [
  {
    path: '',
    component: DbsamplesComponent,
  },
];

@NgModule({
  declarations: [DbsamplesComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [DbsamplesComponent],
})
export class DbsamplesModule {}
