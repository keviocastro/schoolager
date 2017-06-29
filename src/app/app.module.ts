import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RoutesApp } from './app.route';
import { Auth0Module } from 'angular2-cmps';
import { MdlModule } from '@angular-mdl/core';
import { SchoolagerAuthComponent } from './auth/auth.component';
import { SharedModule } from './shared/shared.module';

export const DECLARATIONS = [
  AppComponent,
  SchoolagerAuthComponent
];

export const IMPORTS = [
  BrowserModule,
  HttpModule,
  MdlModule,
  RoutesApp,
  Auth0Module,
  SharedModule
]

export const PROVIDERS = [
  { provide: LOCALE_ID, useValue: "pt-BR" },
  { provide: APP_BASE_HREF, useValue: '/'}
]

@NgModule({
  declarations: DECLARATIONS,
  imports: IMPORTS,
  providers: PROVIDERS,
  bootstrap: [AppComponent]
})
export class AppModule { }
