import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { IEmployee } from '../../models/employee.model';


@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-add-new-employee',
  templateUrl: './add-new-employee.component.html',
  styleUrls: ['./add-new-employee.component.scss']
})
export class AddNewEmployeeComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  newEmployee: Observable<IEmployee>;
  subscription: Subscription;

  constructor(private fb: FormBuilder,
              private employeesService: EmployeeService,
              private router: Router
    ) {

    this.form = fb.group({
        firstName: [null, [Validators.required, Validators.minLength(3)]],
        lastName: [null, [Validators.required, Validators.minLength(5)]]
    });
  }
    get firstName() {
      return this.form.get('firstName') as FormControl;
    }
    get lastName() {
      return this.form.get('lastName') as FormControl;
    }

  ngOnInit() {
  }
  submit(form) {
    const body = {
      name: `${form.value.firstName} ${form.value.lastName}`
    };
    this.subscription = this.employeesService.addNewEmployee(body).subscribe((employee) => {
      if (employee) {
        this.router.navigateByUrl('/');
      }
    });
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
