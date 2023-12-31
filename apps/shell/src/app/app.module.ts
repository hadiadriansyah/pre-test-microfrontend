import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutes, BrowserAnimationsModule, HttpClientModule, MatSnackBarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
