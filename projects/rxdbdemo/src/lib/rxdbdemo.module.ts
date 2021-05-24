import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxdbdemoComponent } from './rxdbdemo.component';

const routes: Routes = [
  {
    path: '',
    component: RxdbdemoComponent,
  },
];

@NgModule({
  declarations: [RxdbdemoComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RxdbdemoComponent],
})
export class RxdbdemoModule {}
