import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  show = false;

  constructor() {}

  ngOnInit() {}

  showDatails(value) {
    this.show = value;
    console.log(value);
  }
}
