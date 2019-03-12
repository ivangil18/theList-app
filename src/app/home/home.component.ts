import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  totalStudents = 2;

  studentsRegistered = false;

  constructor() {}

  ngOnInit() {}

  onAddStudent() {
    this.totalStudents += 1;
    this.studentsRegistered = true;
    console.log(this.totalStudents);

  }
}
