import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeListItemComponent } from './components/employee-list-item/employee-list-item.component';


@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeListItemComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ],
  exports: [
    EmployeeListComponent
  ]
})
export class EmployeeModule { }
