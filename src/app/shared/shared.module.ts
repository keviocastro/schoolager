import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Auth0Module } from 'angular2-cmps';
import { MdlModule } from '@angular-mdl/core';
import { UserHeaderComponent } from './user-header/user-header.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        UserHeaderComponent
    ],
    exports: [
        UserHeaderComponent
    ],
    imports: [
        HttpModule,
        MdlModule,
        CommonModule,
        Auth0Module
    ],
    providers: []
})
export class SharedModule { }
