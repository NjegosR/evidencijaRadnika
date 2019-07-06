import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewEmployeeComponent } from './components/add-new-employee/add-new-employee.component';
import { DailyScrumComponent } from './components/daily-scrum/daily-scrum.component';
import { DailyScrumAddComponent } from './components/daily-scrum-add/daily-scrum-add.component';


const routes: Routes = [
  {
    path: 'add',
    component: AddNewEmployeeComponent
  },
  {
    path: 'daily-scrum',
    component: DailyScrumComponent,
    // children: [
    //   {
    //     path: 'add',
    //     component: DailyScrumAddComponent
    //   }
    // ]
  },
  {
    path: 'daily-scrum/add',
    component: DailyScrumAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
