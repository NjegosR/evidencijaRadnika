import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IEmployee } from '../models/employee.model';
import { Observable } from 'rxjs';
import {environment} from './../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private readonly http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(environment.getEmployeesURL);
  }
  addNewEmployee(body): Observable<IEmployee> {
    console.log('#############');
    console.log(body);
    console.log('#############');
    return this.http.post<IEmployee>(environment.addEmployeeURL, body);
  }

}
