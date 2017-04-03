import { Component, OnInit } from '@angular/core';

import { Data1Service } from './shared/data1.service';
import { Data2Service } from './shared/data2.service';
import { Data2List } from './shared/data2-list';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.css']
})
export class Example1Component implements OnInit {
  list1: any[];

  dataA: Data2List;
  dataB: Data2List;

  constructor(
    private data1Service: Data1Service,
    private data2Service: Data2Service
  ) { }

  ngOnInit() {
    this.list1 = this.data1Service.list;

    this.dataA = this.data2Service.createList();
    this.dataA.addToList({id: 10, name: 'item10', description: 'code10'});

    this.dataB = this.data2Service.createList();
    this.dataB.addToList({id: 20, name: 'item20', description: 'code20'});
  }

}
