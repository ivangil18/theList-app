import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {
  studentsChanged = new Subject<Student[]>();
  studentSelected = new Subject<Student>();

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

  getStudent(index) {
    this.studentSelected.next(this.students[index]);
  }

  updateStudentPresent(id) {
    const presents = this.students[id].presents;
    this.students[id].presents = presents + 1;
    this.studentsChanged.next(this.students.slice());
  }
  updateStudentAbsence(id) {
    const absenses = this.students[id].absenses;
    this.students[id].absenses = absenses + 1;
    this.studentsChanged.next(this.students.slice());
  }

  countStudents() {}
}
