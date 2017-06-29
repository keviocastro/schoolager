import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { RoutesServer } from './server.route';
import { SidebarComponent } from './sideBar/sidebar.component';
import { MdlModule } from '@angular-mdl/core';
import { SharedModule } from '../shared/shared.module';
import { RegisterServerComponent } from './register-server/registerServer.component';
import { MaterializeModule } from "angular2-materialize";

@NgModule({
  declarations: [
    SidebarComponent,
    RegisterServerComponent
    
  ],
  imports: [
    CommonModule,
    RoutesServer,
    MdlModule,
    SharedModule,
    MaterializeModule
  ],
  providers: []
})
export class ServerModule { }