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
      .post<{ message: string; student: any }>(
        'http://localhost:3000/api/createStudent',
        student
      )
      .subscribe(resData => {
        console.log(resData.message);
        this.getStudents();
      });
  }

  getStudents() {
    this.http
      .get<{ message: string; students: any }>(
        'http://localhost:3000/api/students'
      )
      .pipe(
        map(studentData => {
          return studentData.students.map(student => {
            return {
              id: student._id,
              name: student.name,
              lastName: student.lastName,
              group: student.group,
              major: student.major,
              city: student.city,
              country: student.country,
              email: student.email,
              avatar: {
                color: student.avatar.color,
                initials: student.avatar.initials
              },
              presents: student.presents,
              absents: student.absents
            };
          });
        })
      )
      .subscribe(studentsData => {
        console.log(studentsData);
        this.students = studentsData;
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

  private generateStudent(student: any) {}
}
