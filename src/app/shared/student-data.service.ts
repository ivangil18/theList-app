import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {
  studentsChanged = new Subject<Student[]>();
  students: Student[] = [];

  constructor(private http: HttpClient) {}

  addStudent(student) {
    this.http
      .post<{ messge: string; student: Student }>(
        'http://localhost:3000/api/createStudent',
        student
      )
      .subscribe(resData => {
        console.log(resData.student);
        this.students.push(resData.student);
        this.studentsChanged.next([...this.students]);
      });
  }

  getStudents() {
    this.http
      .get<{ message: string; students: Student[] }>(
        'http://localhost:3000/api/students'
      )
      .subscribe(studentsData => {
        console.log(studentsData);
        this.students = studentsData.students;
        this.studentsChanged.next([...this.students]);
      });
  }

  getStudentsChanges() {
    return this.studentsChanged.asObservable();
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
