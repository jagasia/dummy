import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import {Employee} from '../employee';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  title:string="Welcome this is title";
  employees:any;
  employee : Employee={userId:1,
    id:101,
    title:"My Title",
    completed:true
  };
  userName:string;
  password:string;
  constructor(private service:EmployeeService) { }

  ngOnInit(): void {
  }

  fn1()
  {
    console.log(this.userName+":"+this.password);
  }

  getEmployees()
  {
    this.service.getEmployees().subscribe(data=>{ this.employees=data;  console.log(data); });
   // console.log(this.employees);
  }
}
