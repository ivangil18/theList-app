import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';
import { StudentDataService } from 'src/app/shared/student-data.service';
import { Student } from 'src/app/shared/student.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit, OnDestroy {

  backColor: string;
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

  getinitials(name: string, lastName: String) {
    const nameInitial = name.charAt(0);
    const lastNameInitial = lastName.charAt(0);
    return nameInitial + lastNameInitial;
  }

  onShowDetails(index) {}

  onPresent(id) {
    this.studentDataService.updateStudentPresent(id);
  }

  onAbsent(id) {
    this.studentDataService.updateStudentAbsence(id);
  }
}
