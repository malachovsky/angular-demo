import { Injectable } from '@angular/core';
import { Data2List } from './data2-list';

@Injectable()
export class Data2Service {

  createList() {
    return new Data2List();
  }

}
