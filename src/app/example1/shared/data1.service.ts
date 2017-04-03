import { Injectable } from '@angular/core';
import { Data1 } from './data1';

/**
 * Data Object Service
 * - list is inside service and is shared through whole application
 */
@Injectable()
export class Data1Service {
  /**
   * List of Data1 objects
   * @type {Array}
   */
  list: Data1[];

  constructor() {
    this.list = [];

    this.addToList({id: 1, name: 'name1', description: 'description1'});
    this.addToList({id: 2, name: 'name2', description: 'description2'});
  }

  /**
   * Method for adding data into list
   * @param data
   */
  addToList(data: Data1): void {
    this.list.push(data);
  }

}
