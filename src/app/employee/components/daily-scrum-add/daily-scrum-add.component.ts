import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { Observable, Subscription } from 'rxjs';
import { IEmployee } from '../../models/employee.model';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/app.state';
import * as employeeActions from '../../../store/employees/employee.actions';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-daily-scrum-add',
  templateUrl: './daily-scrum-add.component.html',
  styleUrls: ['./daily-scrum-add.component.scss']
})
export class DailyScrumAddComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  isNameOnEmployeeList = false;
  employees$: Observable<IEmployee[]>;
  date: Date = new Date();
  time = { hour: this.date.getHours(), minute: this.date.getMinutes() };
  subcription: Subscription;

  constructor(private fb: FormBuilder,
              private employeeService: EmployeeService,
              private router: Router,
              private store: Store<IAppState>
  ) {
    this.form = fb.group({
      name: [null, [Validators.required, Validators.minLength(8)]],
      arrivingTime: [null, Validators.required],
      employeeArrivedOnTime: [null, Validators.required],
    });
  }
  get name() {
    return this.form.get('name') as FormControl;
  }
  get arrivingTime() {
    return this.form.get('arrivingTime') as FormControl;
  }
  get employeeArrivedOnTime() {
    return this.form.get('employeeArrivedOnTime') as FormControl;
  }

  ngOnInit() {
    this.store.dispatch({
      type: employeeActions.GET_EMPLOYEES
    });
    this.employees$ = this.store.pipe(select('employee'), pluck('employees'));
    this.setValue();
  }
  setValue() {
    const num = this.time.hour + (this.time.minute / 60);
    const value = (num < 8.75) ? 'DA' : 'NE';
    this.form.controls.employeeArrivedOnTime.setValue(value);
  }
  checkName() {
    const name = this.form.get('name').value;
    if (name !== null && name.length > 7) {
    this.subcription = this.employees$.subscribe((item) => {
      item.map((user) => {
        if (user.name === name) {
          this.isNameOnEmployeeList = true;
        }
      });
    });
    }
  }
  submit(form) {
    this.store.dispatch({
      type: employeeActions.DAILY_SCRUM_ADD,
      payload: {
        body: {
          name: form.value.name,
          time: form.value.arrivingTime,
          onTime: form.value.employeeArrivedOnTime
        }
      }
    });
    setTimeout(() => {
      this.router.navigateByUrl('daily-scrum');
    }, 1000);
  }
  ngOnDestroy() {
    if (this.subcription) {
       this.subcription.unsubscribe();
    }
  }
}



