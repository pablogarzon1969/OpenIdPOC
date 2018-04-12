import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import {BASE_URL} from "./app.tokens";
import { OAuthModule } from "angular-oauth2-oidc";

import { appRouting } from "./app.routes";
import { IlumnoComponent } from './components/ilumno/ilumno.component';

import { APP_CONFIG, AppConfig } from './app.config';
import { DomseguroPipe } from "./components/ilumno/domseguro.pipe";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IlumnoComponent,
    DomseguroPipe   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    OAuthModule.forRoot(),
    appRouting
  ],
  providers: [
    { provide: APP_CONFIG, useValue: AppConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
