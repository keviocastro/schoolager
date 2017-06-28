import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from './sideBar/sidebar.component';

const appRoutes: Routes = [
  {
    path: '',
    component: SidebarComponent
  },
];

export const RoutesServer = RouterModule.forChild(appRoutes);