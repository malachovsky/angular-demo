import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Example1Module } from '../example1/example1.module';

import { Example2RoutingModule } from './example2-routing.module';
import { Example2Component } from './example2.component';

@NgModule({
  imports: [
    CommonModule,
    Example2RoutingModule,
    Example1Module
  ],
  declarations: [Example2Component]
})
export class Example2Module { }
