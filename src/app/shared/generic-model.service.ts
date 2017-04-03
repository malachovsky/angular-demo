import { Injectable } from '@angular/core';
import { IGenericModel } from './generic-model';

@Injectable()
export class GenericModelService implements IGenericModel {
  data: {};

  getData() {
    return this.data;
  }

  setData(rawData) {
    this.data = rawData;
  }

  constructor() { }

}
