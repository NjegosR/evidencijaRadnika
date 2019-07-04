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
    return this.http.get<IEmployee[]>(environment.employeeURL);
  }
  addNewEmployee(body): Observable<IEmployee> {
    return this.http.post<IEmployee>(environment.employeeURL, body);
  }
  deleteEmployee(id) {
    return this.http.delete(`${environment.employeeURL}/${id}`);
  }

}
