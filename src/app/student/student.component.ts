import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student: Student={
    studentId:1234,
    studentName:"Rama krishna"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
