import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewEmployeeComponent } from './components/add-new-employee/add-new-employee.component';


const routes: Routes = [
  {
    path: 'add',
    component: AddNewEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
