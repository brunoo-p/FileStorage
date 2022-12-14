import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MaterialAngularModule } from '../app/components/material-angular/material-angular.module';

import { httpInterceptorProviders } from './services/domain/interceptors/index';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ComponentsModule } from './components/components.module';
import { AuthenticationPageComponent } from './pages/authentication-page/authentication-page.component';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
    AuthenticationPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    BrowserAnimationsModule,
    MaterialAngularModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
