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
      country: new FormControl()
    });
  }

  onSave() {
    console.log({ ...this.studentForm.value });

    this.studentDataService.addStudent({ ...this.studentForm.value });
    this.router.navigate(['/list']);
    this.studentForm.reset();
  }

  getBackColor() {}
}
