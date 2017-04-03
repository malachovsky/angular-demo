import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Example1Component } from './example1.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';

import { Data1Service } from './shared/data1.service';
import { Data2Service } from './shared/data2.service';
import { DumblistComponent } from './dumblist/dumblist.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ListComponent,
    ListItemComponent,
    Example1Component,
    DumblistComponent
  ],
  exports: [
    ListComponent,
    ListItemComponent,
    Example1Component
  ],
  providers: [
    Data1Service,
    Data2Service
  ]
})
export class Example1Module { }
