import { Action } from '@ngrx/store';

export const GET_EMPLOYEES = '[Employees] get employees';
export const GET_EMPLOYEES_SUCCESS = '[Employees] get employees success';
export const GET_EMPLOYEES_FAIL = '[Employees] get employees fail';

export class GetEmployees implements Action {
    readonly type = GET_EMPLOYEES;
    constructor(public payload?: any) {}
}
export class GetEmployeesSuccess implements Action {
    readonly type = GET_EMPLOYEES_SUCCESS;
    constructor(public payload?: any) {}
}
export class GetEmployeesFail implements Action {
    readonly type = GET_EMPLOYEES_FAIL;
    constructor(public payload?: any) {}
}

export const EDIT_EMPLOYEE = '[Employees] edit employee';
export const EDIT_EMPLOYEE_SUCCESS = '[Employees] edit employee success';
export const EDIT_EMPLOYEE_FAIL = '[Employees] edit employee fail';

export class EditEmployee implements Action {
    readonly type = EDIT_EMPLOYEE;
    constructor(public payload?: any) {}
}
export class EditEmployeeSuccess implements Action {
    readonly type = EDIT_EMPLOYEE_SUCCESS;
    constructor(public payload?: any) {}
}
export class EditEmployeeFail implements Action {
    readonly type = EDIT_EMPLOYEE_FAIL;
    constructor(public payload?: any) {}
}

export const DELETE_EMPLOYEE = '[Employees] delete employee';
export const DELETE_EMPLOYEE_SUCCESS = '[Employees] delete employee success';
export const DELETE_EMPLOYEE_FAIL = '[Employees] delete employee fail';

export class DeleteEmployee implements Action {
    readonly type = DELETE_EMPLOYEE;
    constructor(public payload?: any) { }
}
export class DeleteEmployeeSuccess implements Action {
    readonly type = DELETE_EMPLOYEE_SUCCESS;
    constructor(public payload?: any) {}
}
export class DeleteEmployeeFail implements Action {
    readonly type = DELETE_EMPLOYEE_FAIL;
    constructor(public payload?: any) {}
}

export const DAILY_SCRUM_ADD = '[Employees] daily scrum add';
export const DAILY_SCRUM_ADD_SUCCESS = '[Employees] daily scrum add success';
export const DAILY_SCRUM_ADD_FAIL = '[Employees] daily scrum add fail';

export class DailyScrumAdd implements Action {
    readonly type = DAILY_SCRUM_ADD;
    constructor(public payload?: any) { }
}
export class DailyScrumAddSuccess implements Action {
    readonly type = DAILY_SCRUM_ADD_SUCCESS;
    constructor(public payload?: any) {}
}
export class DailyScrumAddFail implements Action {
    readonly type = DAILY_SCRUM_ADD_FAIL;
    constructor(public payload?: any) {}
}

export const DELETE_DAILY_SCRUM_ITEM = '[Employees] delete daily scrum item';
export const DELETE_DAILY_SCRUM_ITEM_SUCCESS = '[Employees] delete daily scrum item success';
export const DELETE_DAILY_SCRUM_ITEM_FAIL = '[Employees] delete daily scrum item fail';

export class DeleteDailyScrumItem implements Action {
    readonly type = DELETE_DAILY_SCRUM_ITEM;
    constructor(public payload?: any) { }
}
export class DeleteDailyScrumItemSuccess implements Action {
    readonly type = DELETE_DAILY_SCRUM_ITEM_SUCCESS;
    constructor(public payload?: any) {}
}
export class DeleteDailyScrumItemFail implements Action {
    readonly type = DELETE_DAILY_SCRUM_ITEM_FAIL;
    constructor(public payload?: any) {}
}

export const GET_DAILY_SCRUM_ITEM = '[Employees] get daily scrum item';
export const GET_DAILY_SCRUM_ITEM_SUCCESS = '[Employees] get daily scrum item success';
export const GET_DAILY_SCRUM_ITEM_FAIL = '[Employees] get daily scrum item fail';

export class GetDailyScrumItem implements Action {
    readonly type = GET_DAILY_SCRUM_ITEM;
    constructor(public payload?: any) { }
}
export class GetDailyScrumItemSuccess implements Action {
    readonly type = GET_DAILY_SCRUM_ITEM_SUCCESS;
    constructor(public payload?: any) {}
}
export class GetDailyScrumItemFail implements Action {
    readonly type = GET_DAILY_SCRUM_ITEM_FAIL;
    constructor(public payload?: any) {}
}

export const EDIT_DAILY_SCRUM_ITEM = '[Employees] edit daily scrum item';
export const EDIT_DAILY_SCRUM_ITEM_SUCCESS = '[Employees] edit daily scrum item success';
export const EDIT_DAILY_SCRUM_ITEM_FAIL = '[Employees] edit daily scrum item fail';

export class EditDailyScrumItem implements Action {
    readonly type = EDIT_DAILY_SCRUM_ITEM;
    constructor(public payload?: any) { }
}
export class EditDailyScrumItemSuccess implements Action {
    readonly type = EDIT_DAILY_SCRUM_ITEM_SUCCESS;
    constructor(public payload?: any) {}
}
export class EditDailyScrumItemFail implements Action {
    readonly type = EDIT_DAILY_SCRUM_ITEM_FAIL;
    constructor(public payload?: any) {}
}
export type Actions = GetEmployees
                    | GetEmployeesSuccess
                    | GetEmployeesFail
                    | EditEmployee
                    | EditEmployeeSuccess
                    | EditEmployeeFail
                    | DeleteEmployee
                    | DeleteEmployeeSuccess
                    | DeleteEmployeeFail
                    | DailyScrumAdd
                    | DailyScrumAddSuccess
                    | DailyScrumAddFail
                    | DeleteDailyScrumItem
                    | DeleteDailyScrumItemSuccess
                    | DeleteDailyScrumItemFail
                    | GetDailyScrumItem
                    | GetDailyScrumItemSuccess
                    | GetDailyScrumItemFail
                    | EditDailyScrumItem
                    | EditDailyScrumItemSuccess
                    | EditDailyScrumItemFail;
