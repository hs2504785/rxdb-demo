import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerformanceRoutingModule } from './performance-routing.module';
import { PerformanceComponent } from './performance.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { ToolbarComponent } from '../shared/components/toolbar/toolbar.component';
import { AvoidFunctionCallComponent } from './components/avoid-function-call/avoid-function-call.component';
import { ReturnSymbolPipe } from './pipes/return-symbol.pipe';
import { NgforTrackByComponent } from './components/ngfor-track-by/ngfor-track-by.component';
import { JustMatTableComponent } from './components/just-mat-table/just-mat-table.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    PerformanceComponent,
    ToolbarComponent,
    AvoidFunctionCallComponent,
    ReturnSymbolPipe,
    NgforTrackByComponent,
    JustMatTableComponent,
  ],
  imports: [
    CommonModule,
    PerformanceRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
  ],
})
export class PerformanceModule {}
