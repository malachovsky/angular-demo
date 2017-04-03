import { Component, OnInit } from '@angular/core';
import { Data1Service } from '../shared/data1.service';
import { Data1 } from '../shared/data1';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items: Data1[];

  constructor(
    private data1Service: Data1Service
  ) { }

  ngOnInit() {
    this.items = this.data1Service.list;
  }

  addItem() {
    this.data1Service.addToList({id:3, name: 'name3', description: 'description3'});
  }

}
