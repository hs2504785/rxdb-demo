import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VirtualScrollRoutingModule } from './virtual-scroll-routing.module';
import { VirtualScrollComponent } from './virtual-scroll.component';
import { BasicComponent } from './components/basic/basic.component';
import { DemoComponent } from './components/demo/demo.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [VirtualScrollComponent, BasicComponent, DemoComponent],
  imports: [CommonModule, VirtualScrollRoutingModule, ScrollingModule],
})
export class VirtualScrollModule {}
