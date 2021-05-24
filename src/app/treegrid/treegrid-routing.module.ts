import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreegridComponent } from './treegrid.component';

const routes: Routes = [{ path: '', component: TreegridComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TreegridRoutingModule {}
