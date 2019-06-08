import { Component, OnInit, OnDestroy } from '@angular/core';
import { StudentDataService } from '../shared/student-data.service';
import { Student } from '../shared/student.model';
import { Subscription } from 'rxjs';
import {
  trigger,
  style,
  transition,
  animate,
  keyframes,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(
          ':enter',
          stagger('300ms', [
            animate(
              '1s ease-in',
              keyframes([
                style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
                style({
                  opacity: 0.5,
                  transform: 'translateY(35px)',
                  offset: 0.3
                }),
                style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 })
              ])
            )
          ]),
          { optional: true }
        )
      ])
    ])
  ]
})
export class ListComponent implements OnInit, OnDestroy {
  studentsSub: Subscription;
  students: Student[] = [];

  constructor(private studentDataService: StudentDataService) {}

  ngOnInit() {
    this.studentDataService.getStudents();
    this.studentsSub = this.studentDataService
      .getStudentsChanges()
      .subscribe(studentsD => {
        this.students = [...studentsD];
        console.log(this.students);
      });
  }

  ngOnDestroy() {
    this.studentsSub.unsubscribe();
  }

  onShowDetails(index) {}

  onPresent(id) {
    this.studentDataService.updateStudentPresent(id);
  }

  onAbsent(id) {
    this.studentDataService.updateStudentAbsence(id);
  }
}
