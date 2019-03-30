import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/app/shared/student.model';
import { StudentDataService } from 'src/app/shared/student-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  studentData: Student;

  constructor(
    private studanteDataService: StudentDataService,
    private router: Router
  ) {}

  ngOnInit() {

  }

  onStudentEdit(id) {
    this.router.navigate(['/student/edit/' + id]);
  }
}
