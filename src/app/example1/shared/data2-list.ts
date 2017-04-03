import { Data2 } from './data2';

export class Data2List {
  private list: Data2[] = [];

  constructor() { }

  getList(): Data2[] {
    return this.list;
  }

  addToList(item: Data2): void {
    this.list.push(item);
  }

}
