import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from './sideBar/sidebar.component';
import { RegisterServerComponent } from './register-server/registerServer.component';
const appRoutes: Routes = [
  {
    path: '',
    component: SidebarComponent,
    children: [
      {
        path: '',
        component: RegisterServerComponent
      }
    ]
  },
];

export const RoutesServer = RouterModule.forChild(appRoutes);