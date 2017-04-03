import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Example2Component } from './example2.component';

const routes: Routes = [
  { path: 'example2', component: Example2Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Example2RoutingModule { }
