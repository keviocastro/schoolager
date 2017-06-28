import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RoutesApp } from './app.route';
import { Auth0Module } from 'angular2-cmps';
import { MdlModule } from '@angular-mdl/core';
import { SchoolagerAuthComponent } from './auth/auth.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    SchoolagerAuthComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MdlModule,
    RoutesApp,
    Auth0Module,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
