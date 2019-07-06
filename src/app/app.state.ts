import { IEmployeeState, employeeReducer } from './store/employees/employee.reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface IAppState {
    employees: IEmployeeState;
}
export const reducers: ActionReducerMap<IAppState> = {
    employees: employeeReducer
};
