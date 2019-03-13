import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {
  studentsChanged = new Subject<Student[]>();

  students: Student[] = [];

  constructor() {}

  addStudent(student: Student) {
    console.log(student);
    this.students.push(student);
    this.studentsChanged.next(this.students.slice());
  }

  getStudents() {
    return this.students.slice();
  }
  countStudents() {}
}
