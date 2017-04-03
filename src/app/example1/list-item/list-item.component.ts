import { Component, Input, OnInit } from '@angular/core';
import { Data1 } from '../shared/data1';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input()
  item: Data1;

  constructor() { }

  ngOnInit() {
    console.log(this.item);
  }

}
