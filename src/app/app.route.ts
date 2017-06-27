import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchoolagerAuthComponent } from './auth/auth.component';
const appRoutes: Routes = [
  {
    path: 'auth',
    component: SchoolagerAuthComponent
  },
  //   , {
  //     path: 'profile',
  //     component: ProfileComponent,
  //     canActivate: [UserLoadedGuard]
  //   },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  //   { path: '**', component: NotFoundComponent },
];

export const RoutesApp: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: false });