import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StudentDataService } from 'src/app/shared/student-data.service';
import { Student } from 'src/app/shared/student.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Output() showDatails = new EventEmitter<boolean>();

  backColor: string;

  students: Student[];

  constructor(private studentDataService: StudentDataService) {}

  ngOnInit() {
    this.students = this.studentDataService.getStudents();
  }

  getinitials(name: string, lastName: String) {
    const nameInitial = name.charAt(0);
    const lastNameInitial = lastName.charAt(0);
    return nameInitial + lastNameInitial;
  }

  onShowDetails(index) {
    this.studentDataService.getStudent(index);
  }

  onPresent(id) {
    this.studentDataService.updateStudentPresent(id);
  }

  onAbsent(id) {
    this.studentDataService.updateStudentAbsence(id);
  }
}
