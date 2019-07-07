import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, from } from 'rxjs';
import { IEmployee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { IButton } from '../../models/button.clicked';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/app.state';
import * as employeeActions from '../../../store/employees/employee.actions';
import { pluck } from 'rxjs/operators';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees$: Observable<IEmployee[]>;
  deleteEmployee = false;
  buttonClicked: IButton;
  searchTerm: string;

  constructor(private employeesService: EmployeeService, private store: Store<IAppState>) { }

  ngOnInit() {
    this.store.dispatch({
      type: employeeActions.GET_EMPLOYEES
    });
    this.employees$ = this.store.pipe(select('employee'), pluck('employees'));
  }
  editOrDelete(event) {
    if (event.type === 'Snimi') {
      this.store.dispatch({
        type: employeeActions.EDIT_EMPLOYEE,
        payload: {
          id: event.id,
          body: {
            name: event.employee
          }
        }
      });
    } else if (event.type === 'obrisi' && event.delete) {
      this.store.dispatch({
        type: employeeActions.DELETE_EMPLOYEE,
        payload: {
          id: event.id
        }
      });
    }
  }
}
