import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IEmployee } from '../models/employee.model';
import { Observable } from 'rxjs';
import {environment} from './../../../environments/environment';
import { IDailyScrum } from '../models/daily-scrum.model';


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
  editEmployee(id, body): Observable<IEmployee>{
    return this.http.put<IEmployee>(`${environment.employeeURL}/${id}`, body);
  }
  addNewEmployeeOnDailyScrumList(body): Observable<IDailyScrum> {
    return this.http.post<IDailyScrum>(environment.dailyScrumURL, body);
  }
  getDailyScrumList(): Observable<IDailyScrum[]> {
    return this.http.get<IDailyScrum[]>(environment.dailyScrumURL);
  }
  updateDailyScrumItem(body): Observable<IDailyScrum> {
    return this.http.put<IDailyScrum>(`${environment.dailyScrumURL}/${body.id}`, body);
  }
  deleteDailyScrumItem(id) {
    return this.http.delete(`${environment.dailyScrumURL}/${id}`);
  }

}
