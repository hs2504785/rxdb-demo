import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarComponent } from './toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatMenuModule],
  exports: [ToolbarComponent],
})
export class ToolbarModule {}
