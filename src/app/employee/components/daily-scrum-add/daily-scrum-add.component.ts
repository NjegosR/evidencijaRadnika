import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { Observable, Subscription } from 'rxjs';
import { IEmployee } from '../../models/employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daily-scrum-add',
  templateUrl: './daily-scrum-add.component.html',
  styleUrls: ['./daily-scrum-add.component.scss']
})
export class DailyScrumAddComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  isNameOnEmployeeList = false;
  employees: Observable<IEmployee[]>;
  date: Date = new Date();
  time = { hour: this.date.getHours(), minute: this.date.getMinutes() };
  subcription: Subscription;

  constructor(private fb: FormBuilder,
              private employeeService: EmployeeService,
              private router: Router
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
    this.subcription = this.employees.subscribe((item) => {
      item.map((user) => {
        if (user.name === name) {
         this.isNameOnEmployeeList = true;
        }
      });
    });
    }
    this.isNameOnEmployeeList = false;
  }
  submit(form) {
    const body = {
      name: form.value.name,
      time: form.value.arrivingTime,
      onTime: form.value.employeeArrivedOnTime
    };
    this.employeeService.addNewEmployeeOnDailyScrumList(body).subscribe((item) => {
      if (item) {
        this.router.navigateByUrl('daily-scrum');
      }
    });
  }
  ngOnDestroy() {
    if (this.subcription) {
       this.subcription.unsubscribe();
    }
  }
}



