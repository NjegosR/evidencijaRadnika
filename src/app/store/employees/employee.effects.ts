import {Injectable} from '@angular/core';

import {Effect, Actions, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import { IAppState } from '../../app.state';
import { EmployeeService } from '../../employee/services/employee.service';
import * as employeeActions from '../../store/employees/employee.actions';
import { switchMap, flatMap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { of, forkJoin } from 'rxjs';



@Injectable()
export class EmployeeEffects {
    @Effect()
    getEmployees$ = this.actions$
    .pipe(ofType(employeeActions.GET_EMPLOYEES, employeeActions.DELETE_EMPLOYEE_SUCCESS))
    .pipe(switchMap((action: employeeActions.GetEmployeesSuccess) => {
        return this.employeeService.getEmployees()
        .pipe(map((response) => new employeeActions.GetEmployeesSuccess(response)))
        .pipe(catchError((error) => of(new employeeActions.GetEmployeesFail(error))));
    }));

    @Effect()
    editEmployee$ = this.actions$
    .pipe(ofType(employeeActions.EDIT_EMPLOYEE))
    .pipe(switchMap((action: employeeActions.EditEmployeeSuccess) => {
        return this.employeeService.editEmployee(action.payload.id, action.payload.body)
        .pipe(map((response) => new employeeActions.EditEmployeeSuccess(response)))
        .pipe(catchError((error) => of(new employeeActions.EditEmployeeFail(error))));
    }));

    @Effect()
    deleteEmployee$ = this.actions$
    .pipe(ofType(employeeActions.DELETE_EMPLOYEE))
    .pipe(switchMap((action: employeeActions.DeleteEmployeeSuccess) => {
        return this.employeeService.deleteEmployee(action.payload.id)
        .pipe(map((response) => new employeeActions.DeleteEmployeeSuccess(response)))
        .pipe(catchError((error) => of(new employeeActions.DeleteEmployeeFail(error))));
    }));

    @Effect()
    dailuScrumAdd$ = this.actions$
    .pipe(ofType(employeeActions.DAILY_SCRUM_ADD))
    .pipe(switchMap((action: employeeActions.DailyScrumAddSuccess) => {
        return this.employeeService.addNewEmployeeOnDailyScrumList(action.payload.body)
        .pipe(map((response) => new employeeActions.DailyScrumAddSuccess(response)))
        .pipe(catchError((error) => of(new employeeActions.DailyScrumAddFail(error))));
    }));
    @Effect()
    deleteDailyScrumItem$ = this.actions$
    .pipe(ofType(employeeActions.DELETE_DAILY_SCRUM_ITEM))
    .pipe(switchMap((action: employeeActions.DeleteDailyScrumItemSuccess) => {
        return this.employeeService.deleteDailyScrumItem(action.payload.id)
        .pipe(map((response) => new employeeActions.DeleteDailyScrumItemSuccess(response)))
        .pipe(catchError((error) => of(new employeeActions.DeleteDailyScrumItemFail(error))));
    }));

    @Effect()
    getDailyScrumItem$ = this.actions$
    // tslint:disable-next-line:max-line-length
    .pipe(ofType(employeeActions.GET_DAILY_SCRUM_ITEM, employeeActions.DELETE_DAILY_SCRUM_ITEM_SUCCESS, employeeActions.EDIT_DAILY_SCRUM_ITEM_SUCCESS, employeeActions.DAILY_SCRUM_ADD_SUCCESS))
    .pipe(switchMap((action: employeeActions.GetDailyScrumItemSuccess) => {
        return this.employeeService.getDailyScrumList()
        .pipe(map((response) => new employeeActions.GetDailyScrumItemSuccess(response)))
        .pipe(catchError((error) => of(new employeeActions.GetDailyScrumItemFail(error))));
    }));
    @Effect()
    editDailyScrumItem$ = this.actions$
    .pipe(ofType(employeeActions.EDIT_DAILY_SCRUM_ITEM))
    .pipe(switchMap((action: employeeActions.EditDailyScrumItemSuccess) => {
        return this.employeeService.updateDailyScrumItem(action.payload.body)
        .pipe(map((response) => new employeeActions.EditDailyScrumItemSuccess(response)))
        .pipe(catchError((error) => of(new employeeActions.EditDailyScrumItemFail(error))));
    }));
    constructor(private store: Store<IAppState>, private actions$: Actions, private employeeService: EmployeeService) {}
}

