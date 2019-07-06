import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Observable, from, Subscription } from 'rxjs';
import { IEmployee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { IButton } from '../../models/button.clicked';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/app.state';
import * as employeeActions from '../../../store/employee.actions';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit, OnDestroy {
  employees$: Observable<IEmployee[]>;
  deleteEmployee = false;
  buttonClicked: IButton;
  searchTerm: string;
  subscription: Subscription;

  constructor(private employeesService: EmployeeService, private store: Store<IAppState>) { }

  ngOnInit() {
    this.getEmployees();
    this.store.dispatch({
      type: employeeActions.GET_EMPLOYEES
    });
  }
  editEmpl(ev) {
    if (this.buttonClicked.type === 'Snimi') {
      const body = {
        name: this.buttonClicked.employee
      };
      this.subscription = this.employeesService.editEmployee(ev.id, body).subscribe((item) => {
        if (item) {
          this.getEmployees();
        }
      });
    } else if (this.buttonClicked.type === 'obrisi' && ev.delete) {
      this.employeesService.deleteEmployee(this.buttonClicked.id).subscribe((x) => {
        this.getEmployees();
      });
    }
  }
  getEmployee(ev) {
    this.buttonClicked = ev;
  }
  getEmployees() {
    this.employees$ = this.employeesService.getEmployees();
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
