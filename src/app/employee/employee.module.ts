import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSmartModalModule } from 'ngx-smart-modal';


import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeListItemComponent } from './components/employee-list-item/employee-list-item.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AddNewEmployeeComponent } from './components/add-new-employee/add-new-employee.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { SearchPipe } from './pipes/search.pipe';
import { DailyScrumComponent } from './components/daily-scrum/daily-scrum.component';
import { DailyScrumAddComponent } from './components/daily-scrum-add/daily-scrum-add.component';
import { EditDeleteModalComponent } from './components/edit-delete-modal/edit-delete-modal.component';


@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeListItemComponent,
    ButtonComponent,
    AddNewEmployeeComponent,
    SearchPipe,
    DailyScrumComponent,
    DailyScrumAddComponent,
    EditDeleteModalComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSmartModalModule.forRoot(),
    NgbModule
  ],
  exports: [
    EmployeeListComponent,
    EditDeleteModalComponent
  ]
})
export class EmployeeModule { }
