import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { IntersectionObserverComponent } from './intersection-observer.component';
import { SampleComponent } from './sample/sample.component';

const routes: Routes = [
  {
    path: '',
    component: IntersectionObserverComponent,
    children: [
      {
        path: 'sample',
        component: SampleComponent,
        pathMatch: 'full',
      },
      {
        path: 'demo',
        component: DemoComponent,
        pathMatch: 'full',
      },
      {
        path: '',
        redirectTo: 'sample',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntersectionObserverRoutingModule {}
