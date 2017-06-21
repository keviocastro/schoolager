import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from 'logos-shared'
const appRoutes: Routes = [
   {
    path: 'auth',
    component: AuthComponent
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