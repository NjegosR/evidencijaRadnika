import { Action } from '@ngrx/store';

export const GET_EMPLOYEES = '[Employees] get employees';

export class GetEmployees implements Action {
    readonly type = GET_EMPLOYEES;
    constructor(public payload?: any) {}
}

export type Actions = GetEmployees;
