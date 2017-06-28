import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { RoutesServer } from './server.route';
import { SidebarComponent } from './sideBar/sidebar.component';
import { MdlModule } from '@angular-mdl/core';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RoutesServer,
    MdlModule,
    SharedModule
  ],
  providers: []
})
export class ServerModule { }