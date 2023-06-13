import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './pages/auth/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'pages',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent,
  },
  { path: '', pathMatch: 'full', redirectTo: 'auth' },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'page-not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
