import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dumblist',
  templateUrl: './dumblist.component.html',
  styleUrls: ['./dumblist.component.css']
})
export class DumblistComponent implements OnInit {

  @Input()
  items: any[];

  @Input()
  listName: string;

  constructor() { }

  ngOnInit() {
  }

}
