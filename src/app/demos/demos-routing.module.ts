import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemosComponent } from './demos.component';

const routes: Routes = [{ path: '', component: DemosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemosRoutingModule {}
