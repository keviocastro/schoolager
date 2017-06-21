import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RoutesApp } from './app.route';
import { LogosLoginModule } from 'logos-shared';
import { MdlModule } from '@angular-mdl/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MdlModule,
    RoutesApp,
    LogosLoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
