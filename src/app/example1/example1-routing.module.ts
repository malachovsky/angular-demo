import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {Example1Component} from './example1.component';

const routes: Routes = [
  { path: '', redirectTo: 'example1', pathMatch: 'full' },
  { path: 'example1', component: Example1Component },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class Example1RoutingModule {
}
