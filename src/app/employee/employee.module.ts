import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSmartModalModule } from 'ngx-smart-modal';


import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeListItemComponent } from './components/employee-list-item/employee-list-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddNewEmployeeComponent } from './components/add-new-employee/add-new-employee.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { SearchPipe } from './pipes/search.pipe';


@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeListItemComponent,
    ButtonComponent,
    AddNewEmployeeComponent,
    SearchPipe,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSmartModalModule.forRoot(),
  ],
  exports: [
    EmployeeListComponent,
  ]
})
export class EmployeeModule { }
