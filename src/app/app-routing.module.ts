import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'rxdb',
    loadChildren: () =>
      import('projects/rxdb/src/public-api').then(m => m.RxdbModule),
  },
  {
    path: 'rxdbdemo',
    loadChildren: () =>
      import('projects/rxdbdemo/src/public-api').then(m => m.RxdbdemoModule),
  },
  {
    path: 'rxdb-samples',
    loadChildren: () =>
      import('projects/dbsamples/src/public-api').then(m => m.DbsamplesModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'not-found',
    loadChildren: () =>
      import('./not-found/not-found.module').then(m => m.NotFoundModule),
  },

  // default route
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  // Fallbak route
  // {
  //   path: '**',
  //   redirectTo: '/not-found',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
