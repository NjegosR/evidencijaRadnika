import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees$: Observable<IEmployee[]>;


  constructor(private employeesService: EmployeeService) { }

  ngOnInit() {
    this.employees$ = this.employeesService.getEmployees();
  }

}
