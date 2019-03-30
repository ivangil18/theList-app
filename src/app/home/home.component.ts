import { Component, OnInit, Input } from '@angular/core';
import { StudentDataService } from '../shared/student-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  totalStudents: number;
  studentsRegistered = false;
  students: any;

  constructor(private studentDataService: StudentDataService) {}

  ngOnInit() {
    this.onStudentAdded();
  }

  onStudentAdded() {
    this.totalStudents = 0;
    if (this.totalStudents > 0) {
      this.studentsRegistered = true;
    }
  }

  checkConection() {
    this.students = this.studentDataService.getStudents();

    console.log(this.students);
    // this.studentDataService.getStudents();
    // this.studentDataService.studentsChanged.subscribe(studData => {
    //   this.students = studData;
    // });
    // console.log(this.students);
  }
}
