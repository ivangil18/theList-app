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

  constructor(private studentDataService: StudentDataService) {}

  ngOnInit() {
    this.onStudentAdded();
  }

  onStudentAdded() {
    this.totalStudents = this.studentDataService.getStudents().length;
    if (this.totalStudents > 0) {
      this.studentsRegistered = true;
    }
  }
}
