import { Component, OnInit, Input } from '@angular/core';
import { StudentDataService } from 'src/app/shared/student-data.service';
import { Student } from 'src/app/shared/student.model';
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
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() student: Student;

  constructor(private studentDataService: StudentDataService) {}

  ngOnInit() {}

  onShowDetails(index) {}

  onPresent(id) {
    this.studentDataService.updateStudentPresent(id);
  }

  onAbsent(id) {
    this.studentDataService.updateStudentAbsence(id);
  }
}
