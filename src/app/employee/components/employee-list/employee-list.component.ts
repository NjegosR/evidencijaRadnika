import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, from } from 'rxjs';
import { IEmployee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { IButton } from '../../models/button.clicked';

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

  constructor(private employeesService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }
  editOrDelete(ev) {
    this.buttonClicked = ev;
    console.log(ev);
    // if (ev.type === 'obrisi') {
    //   console.log(this.deleteEmployee);
    //   if (this.deleteEmployee) {
    //     this.employeesService.deleteEmployee(ev.id).subscribe((x) => {
    //       console.log(x);
    //     });
    //   }
    // }
  }
  deleteEmpl(ev) {
    if (ev && this.buttonClicked.type === 'obrisi') {
      this.employeesService.deleteEmployee(this.buttonClicked.id).subscribe((x) => {
        this.getEmployees();
      });
    }
  }
  getEmployees() {
    this.employees$ = this.employeesService.getEmployees();
  }
}
