import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreegridRoutingModule } from './treegrid-routing.module';
import { TreegridComponent } from './treegrid.component';

@NgModule({
  declarations: [TreegridComponent],
  imports: [CommonModule, TreegridRoutingModule],
})
export class TreegridModule {}
