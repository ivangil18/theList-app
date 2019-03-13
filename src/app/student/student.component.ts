import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Student } from '../shared/student.model';
import { StudentDataService } from '../shared/student-data.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  studentForm: FormGroup;

  constructor(private studentDataService: StudentDataService) {}

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.studentForm = new FormGroup({
      name: new FormControl(),
      lastName: new FormControl(),
      group: new FormControl(),
      city: new FormControl(),
      country: new FormControl(),
      email: new FormControl()
    });
  }

  onSave() {
    this.studentDataService.addStudent(this.studentForm.value);
  }
}
