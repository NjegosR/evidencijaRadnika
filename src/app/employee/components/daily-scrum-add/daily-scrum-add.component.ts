import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import * as $ from 'jquery';
import { EmployeeService } from '../../services/employee.service';
import { Observable } from 'rxjs';
import { IEmployee } from '../../models/employee.model';
import { MyValidators } from '../../validators/my-validators';

@Component({
  selector: 'app-daily-scrum-add',
  templateUrl: './daily-scrum-add.component.html',
  styleUrls: ['./daily-scrum-add.component.scss']
})
export class DailyScrumAddComponent implements OnInit {
  public form: FormGroup;
  isNameOnEmployeeList = false;
  employees: Observable<IEmployee[]>;
  valid = new MyValidators(this.employees);
  date: Date = new Date();
  time = { hour: this.date.getHours(), minute: this.date.getMinutes() };




  constructor(private fb: FormBuilder,
              private employeeService: EmployeeService
  ) {
    this.form = fb.group({
      name: [null, [Validators.required, Validators.minLength(8)]],
      arrivingTime: [null, Validators.required],
      employeeArrivedOnTime: [{value: null, disabled: true}, Validators.required]
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
    this.employees = this.employeeService.getEmployees();
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
    this.employees.subscribe((item) => {
      item.map((user) => {
        if (user.name === name) {
         this.isNameOnEmployeeList = true;
        }
      });
    });
    }
    this.isNameOnEmployeeList = false;
  }
}



