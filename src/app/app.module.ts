import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { APP_CONFIG, AppConfig } from './app.config';
import { AppComponent } from './app.component';

import { Example1Module } from './example1/example1.module';
import { Example1RoutingModule } from './example1/example1-routing.module';

import { Example2Module } from './example2/example2.module';
import { Example2RoutingModule } from './example2/example2-routing.module';

const appRoutes: Routes = [];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Example1Module,
    Example1RoutingModule,
    Example2Module,
    Example2RoutingModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    { provide: APP_CONFIG, useValue: AppConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
