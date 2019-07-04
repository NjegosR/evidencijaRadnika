import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeListItemComponent } from './components/employee-list-item/employee-list-item.component';
import { ButtonComponent } from './components/button/button.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeListItemComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    NgbModule
  ],
  exports: [
    EmployeeListComponent
  ]
})
export class EmployeeModule { }
