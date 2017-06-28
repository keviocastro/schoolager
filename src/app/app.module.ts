import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RoutesApp } from './app.route';
import { Auth0Module } from 'angular2-cmps';
import { MdlModule } from '@angular-mdl/core';
import { SchoolagerAuthComponent } from './auth/auth.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { UserHeaderComponent } from './toolbar/user-header/user-header.component';

@NgModule({
  declarations: [
    AppComponent,
    SchoolagerAuthComponent,
    ToolbarComponent,
    UserHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MdlModule,
    RoutesApp,
    Auth0Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
