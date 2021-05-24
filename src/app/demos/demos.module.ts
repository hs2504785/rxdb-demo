import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemosRoutingModule } from './demos-routing.module';
import { DemosComponent } from './demos.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [DemosComponent, ToolbarComponent],
  imports: [
    CommonModule,
    DemosRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
  ],
})
export class DemosModule {}
