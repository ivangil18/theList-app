import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Student } from '../shared/student.model';
import { StudentDataService } from '../shared/student-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  studentForm: FormGroup;
  backColor: string;
  editMode = true;

  constructor(
    private studentDataService: StudentDataService,
    private router: Router
  ) {
    this.getBackColor();
  }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.studentForm = new FormGroup({
      name: new FormControl(),
      lastName: new FormControl(),
      group: new FormControl(),
      major: new FormControl(),
      city: new FormControl(),
      country: new FormControl(),
      email: new FormControl(),
      avatar: new FormControl(this.backColor),
      presents: new FormControl(0),
      absenses: new FormControl(0)
    });
  }

  onSave() {
    this.studentDataService.addStudent(this.studentForm.value);
    this.router.navigate(['/list']);
    this.studentForm.reset();
  }

  getBackColor() {
    this.backColor =
      '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
  }
}
