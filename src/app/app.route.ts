import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SchoolagerAuthComponent } from './auth/auth.component';

const appRoutes: Routes = [
  {
    path: 'auth',
    component: SchoolagerAuthComponent
  },
  {
    path: '',
    component: ToolbarComponent,
    children: [
      {
        path: 'server',
        loadChildren: './servers/server.module#ServerModule'
      }
    ]
  },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  //   { path: '**', component: NotFoundComponent },
];

export const RoutesApp: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: false });