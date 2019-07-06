import { AbstractControl } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { IEmployee } from '../models/employee.model';
import { Observable } from 'rxjs';
import { ɵConsole } from '@angular/core';

export class MyValidators {
    employees: Observable<IEmployee[]>;
    constructor(employees: Observable<IEmployee[]>) {
        this.employees = employees;
    }
validateName(control: AbstractControl): {[key: string]: any} | null {
        // const name = control.value;
        // let isNameOnListOfEmployees = false;
        // if (this.employees) {
        //   this.employees.subscribe((item) => {
        //     isNameOnListOfEmployees = (item !== name) ? false : true;
        //   });
        // }
        // return (isNameOnListOfEmployees) ? null : {name: false};
        // console.log(this.employees);
        return null;
      }
}
