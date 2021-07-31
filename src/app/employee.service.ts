import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
  getEmployees():Observable<Object>
  {
    // return this.http.get("http://dummy.restapiexample.com/api/v1/employees");
    return this.http.get("https://jsonplaceholder.typicode.com/todos");
  }
}
