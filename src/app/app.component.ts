import { Component, Inject } from '@angular/core';

import { APP_CONFIG } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(@Inject(APP_CONFIG) aaa) {
    console.log(aaa);
  }
}
